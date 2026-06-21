import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORDPRESS_API_URL = 'http://localhost/workshop_desainUI/wordpress/wp-json/wp/v2/posts?_embed&categories=4';
const jsonPath = path.resolve(__dirname, '../../public/articles-wp.json');
const imgDirPublic = path.resolve(__dirname, '../../public/images/articles');
const imgDirRoot = path.resolve(__dirname, '../../images/articles');

// Ensure directories exist
[imgDirPublic, imgDirRoot].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const wpUploadUrlRegex = /https?:\/\/(?:localhost|127\.0\.0\.1)\/workshop_desainUI\/wordpress\/wp-content\/uploads\/\d{4}\/\d{2}\/([a-zA-Z0-9%_.-]+)/i;
const imagesToDownload = new Map(); // filename -> fullUrl

function processValue(val) {
  if (typeof val === 'string') {
    const match = val.match(wpUploadUrlRegex);
    if (match) {
      const fullUrl = match[0];
      const filename = decodeURIComponent(match[1]);
      imagesToDownload.set(filename, fullUrl);
      return `/images/articles/${filename}`;
    }
    return val;
  } else if (Array.isArray(val)) {
    return val.map(processValue);
  } else if (val !== null && typeof val === 'object') {
    const newObj = {};
    for (const key in val) {
      newObj[key] = processValue(val[key]);
    }
    return newObj;
  }
  return val;
}

async function downloadImage(url, filename) {
  const destPublic = path.join(imgDirPublic, filename);
  const destRoot = path.join(imgDirRoot, filename);

  // Check if already exists in public
  if (fs.existsSync(destPublic) && fs.existsSync(destRoot)) {
    console.log(`Image already exists: ${filename}`);
    return;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    
    fs.writeFileSync(destPublic, buffer);
    fs.writeFileSync(destRoot, buffer);
    console.log(`Downloaded image: ${filename}`);
  } catch (err) {
    console.error(`Failed to download ${url}:`, err.message);
  }
}

async function sync() {
  console.log(`Fetching latest articles from local WordPress...`);
  try {
    const response = await fetch(WORDPRESS_API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const posts = await response.json();
    console.log(`Fetched ${posts.length} articles from WordPress.`);

    // Recursively find local upload URLs and map them to local paths
    const processedPosts = processValue(posts);

    console.log(`Downloading ${imagesToDownload.size} images...`);
    for (const [filename, url] of imagesToDownload.entries()) {
      await downloadImage(url, filename);
    }

    // Save updated posts array to public/articles-wp.json
    fs.writeFileSync(jsonPath, JSON.stringify(processedPosts, null, 2), 'utf8');
    console.log(`Successfully synced and updated public/articles-wp.json!`);
  } catch (err) {
    console.error(`WordPress Sync failed:`, err.message);
    console.error(`Please make sure your local Laragon / WordPress site is running.`);
  }
}

sync();
