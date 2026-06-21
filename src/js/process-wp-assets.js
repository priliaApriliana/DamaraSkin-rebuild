// src/js/process-wp-assets.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.resolve(__dirname, '../../public/articles-wp.json');
const imgDir = path.resolve(__dirname, '../../images/articles');

// Ensure image directory exists
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

let dataStr = fs.readFileSync(jsonPath, 'utf8');

// Regex to find escaped local WordPress media URLs
const localUrlRegex = /http:\\\/\\\/localhost\\\/[a-zA-Z0-9%_.-]+\\\/wordpress\\\/wp-content\\\/uploads\\\/[0-9]{4}\\\/[0-9]{2}\\\/([^\\"\s]+)/g;

const matches = [];
let match;
while ((match = localUrlRegex.exec(dataStr)) !== null) {
  const fullUrl = match[0].replace(/\\/g, ''); // Remove backslashes to get clean URL
  const filename = match[1];
  // Avoid duplicate downloads
  if (!matches.some(m => m.fullUrl === fullUrl)) {
    matches.push({ fullUrl, filename });
  }
}

console.log(`Found ${matches.length} unique local WordPress images to download.`);

async function downloadImage(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    console.log(`Downloaded: ${url} -> ${dest}`);
    return true;
  } catch (err) {
    console.error(`Failed to download ${url}:`, err.message);
    return false;
  }
}

async function run() {
  for (const item of matches) {
    const destPath = path.join(imgDir, item.filename);
    console.log(`Processing: ${item.filename}`);
    
    // Download image if it doesn't exist
    let success = true;
    if (!fs.existsSync(destPath)) {
      success = await downloadImage(item.fullUrl, destPath);
    }
    
    if (success) {
      // Replace all occurrences in the JSON string
      const escapedTarget = item.fullUrl.replace(/\//g, '\\/');
      const localReplacement = `/images/articles/${item.filename}`;
      const escapedReplacement = localReplacement.replace(/\//g, '\\/');
      
      dataStr = dataStr.replaceAll(escapedTarget, escapedReplacement);
      dataStr = dataStr.replaceAll(item.fullUrl, localReplacement);
    }
  }
  
  // Write the updated JSON back to the file
  fs.writeFileSync(jsonPath, dataStr, 'utf8');
  console.log("JSON file updated with local image references successfully!");
}

run();
