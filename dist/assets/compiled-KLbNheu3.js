import e from"https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/module.esm.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=[{id:`admin_001`,name:`Admin DamaraSkin`,email:`admin@damaraskin.com`,password:`password`,role:`admin`,phone:`081234567890`,address:`DamaraSkin Headquarters, Jakarta`,status:`active`},{id:`user_001`,name:`Putri Cantika`,email:`putri@damaraskin.com`,password:`password`,role:`user`,phone:`089876543210`,address:`Jl. Sehat No. 10, Bandung`,skin_type:`dry`,skin_concerns:[`brightening`,`hydrating`],status:`active`},{id:`user_002`,name:`Rani Amelia`,email:`rani@example.com`,password:`password`,role:`user`,phone:`081234567800`,address:`Jl. Dummy No. 1, Surabaya`,skin_type:`sensitive`,skin_concerns:[`acne`],status:`active`},{id:`user_003`,name:`Siti Rahma`,email:`siti@example.com`,password:`password`,role:`user`,phone:`081234567801`,address:`Jl. Dummy No. 2, Yogyakarta`,skin_type:`oily`,skin_concerns:[`brightening`],status:`active`},{id:`user_004`,name:`Dewi Lestari`,email:`dewi@example.com`,password:`password`,role:`user`,phone:`081234567802`,address:`Jl. Melati No. 5, Jakarta`,skin_type:`normal`,skin_concerns:[`anti_aging`],status:`active`},{id:`user_005`,name:`Larasati Putri`,email:`laras@example.com`,password:`password`,role:`user`,phone:`081234567803`,address:`Jl. Anggrek No. 12, Semarang`,skin_type:`combination`,skin_concerns:[`pore`,`brightening`],status:`active`},{id:`user_006`,name:`Nadia Safira`,email:`nadia@example.com`,password:`password`,role:`user`,phone:`081234567804`,address:`Jl. Mawar No. 8, Medan`,skin_type:`sensitive`,skin_concerns:[`acne`,`hydrating`],status:`suspended`}],n=[{id:`prod_001`,name:`Skintific 5X Ceramide Barrier Moisture Gel`,brand:`Skintific`,slug:`skintific-5x-ceramide-barrier-moisture-gel`,description:`Pelembap wajah terlaris dengan formulasi gabungan 5 jenis Ceramide berbeda. Sangat baik untuk memperkuat skin barrier, melembapkan kulit secara mendalam, menenangkan sel kulit sensitif, dan mengunci kelembapan selama 24 jam dengan tekstur gel air yang sangat ringan.`,price:139e3,stock:50,category:`moisturizer`,skin_type:`sensitive`,concern:[`hydrating`],concerns:[`hydrating`],image:`/images/products/skintific_moisturizer.jpg`,images:[`/images/products/skintific_moisturizer.jpg`],rating:4.8,review_count:124,created_at:`2024-01-15`},{id:`prod_002`,name:`Skin1004 Madagascar Centella Ampoule`,brand:`Skin1004`,slug:`skin1004-madagascar-centella-ampoule`,description:`Ampul wajah legendaris yang mengandung 100% ekstrak murni daun Centella Asiatica dari Madagaskar. Berfungsi meredakan kemerahan, merawat kulit berjerawat, menenangkan iritasi kulit, serta merangsang regenerasi skin barrier yang rusak.`,price:198e3,stock:30,category:`serum`,skin_type:`sensitive`,concern:[`acne`],concerns:[`acne`],image:`/images/products/skin1004_ampoule.jpg`,images:[`/images/products/skin1004_ampoule.jpg`],rating:4.9,review_count:95,created_at:`2024-01-16`},{id:`prod_003`,name:`Hada Labo Gokujyun Ultimate Moisturizing Lotion`,brand:`Hada Labo`,slug:`hada-labo-gokujyun-ultimate-moisturizing-lotion`,description:`Toner hidrasi legendaris asal Jepang yang mengandung 3 tipe Hyaluronic Acid. Membantu mengembalikan kelembapan alami kulit setelah mencuci muka, membuat kulit terhidrasi secara intensif sehingga terasa lebih kenyal, halus, dan elastis.`,price:45e3,stock:80,category:`toner`,skin_type:`dry`,concern:[`hydrating`],concerns:[`hydrating`],image:`/images/products/hada_labo_lotion.jpg`,images:[`/images/products/hada_labo_lotion.jpg`],rating:4.7,review_count:210,created_at:`2024-01-17`},{id:`prod_004`,name:`Somethinc Niacinamide + Moisture Sabi Beet Brightening Serum`,brand:`Somethinc`,slug:`somethinc-niacinamide-moisture-sabi-beet-brightening-serum`,description:`Serum pencerah wajah premium buatan lokal dengan kandungan utama Niacinamide dan Sabiwhite (ekstrak kunyit). Sangat efektif menyamarkan noda hitam bekas jerawat, meratakan warna kulit yang belang, serta memberikan efek kilau sehat alami.`,price:119e3,stock:45,category:`serum`,skin_type:`all`,concern:[`brightening`],concerns:[`brightening`],image:`/images/products/somethinc_serum.jpg`,images:[`/images/products/somethinc_serum.jpg`],rating:4.8,review_count:154,created_at:`2024-01-18`},{id:`prod_005`,name:`COSRX Low pH Good Morning Gel Cleanser`,brand:`COSRX`,slug:`cosrx-low-ph-good-morning-gel-cleanser`,description:`Pembersih wajah bertekstur gel transparan dengan formula pH rendah yang mendekati pH alami kulit. Mengandung Tea Tree Oil dan BHA untuk membersihkan minyak berlebih, mengangkat komedo, mencegah jerawat baru, tanpa efek kulit kering tertarik.`,price:125e3,stock:60,category:`cleanser`,skin_type:`oily`,concern:[`acne`,`pore`],concerns:[`acne`,`pore`],image:`/images/products/cosrx_cleanser.jpg`,images:[`/images/products/cosrx_cleanser.jpg`],rating:4.6,review_count:188,created_at:`2024-01-19`},{id:`prod_006`,name:`Avoskin Miraculous Refining Toner`,brand:`Avoskin`,slug:`avoskin-miraculous-refining-toner`,description:`Toner eksfoliasi kimiawi lokal terbaik yang mengandung AHA, BHA, PHA, Niacinamide, dan Tea Tree. Membantu mengeksfoliasi sel kulit mati, membersihkan komedo di pori-pori tersumbat, serta memicu pertumbuhan kulit baru yang sehat dan cerah.`,price:165e3,stock:25,category:`toner`,skin_type:`combination`,concern:[`pore`,`acne`],concerns:[`pore`,`acne`],image:`/images/products/avoskin_toner.jpg`,images:[`/images/products/avoskin_toner.jpg`],rating:4.5,review_count:74,created_at:`2024-01-20`},{id:`prod_007`,name:`Whitelab Brightening Facial Wash`,brand:`Whitelab`,slug:`whitelab-brightening-facial-wash`,description:`Sabun pembersih wajah lokal yang diperkaya dengan Niacinamide dan Collagen. Membantu mengangkat kotoran, sisa makeup, dan sebum berlebih sekaligus menjaga elastisitas kulit agar tetap kencang, cerah, dan tampak bersinar sepanjang hari.`,price:37e3,stock:100,category:`cleanser`,skin_type:`normal`,concern:[`brightening`],concerns:[`brightening`],image:`/images/products/whitelab_wash.jpg`,images:[`/images/products/whitelab_wash.jpg`],rating:4.4,review_count:312,created_at:`2024-01-21`},{id:`prod_008`,name:`Anessa Perfect UV Sunscreen Mild Milk SPF 50+`,brand:`Anessa`,slug:`anessa-perfect-uv-sunscreen-mild-milk-spf50`,description:`Tabir surya harian premium bertekstur susu cair yang lembut untuk kulit sensitif dan bayi sekalipun. Menggunakan teknologi perlindungan UV eksklusif yang tahan terhadap gesekan, air, dan keringat, mencegah penuaan dini serta kerutan halus.`,price:18e4,stock:35,category:`sunscreen`,skin_type:`sensitive`,concern:[`anti_aging`],concerns:[`anti_aging`],image:`/images/products/anessa_sunscreen.jpg`,images:[`/images/products/anessa_sunscreen.jpg`],rating:4.9,review_count:88,created_at:`2024-01-22`},{id:`prod_009`,name:`Wardah Crystal Secret Dark Spot Brightening Serum`,brand:`Wardah`,slug:`wardah-crystal-secret-dark-spot-brightening-serum`,description:`Serum intensif lokal pencerah flek dan noda hitam dengan kandungan Edelweiss Extract dan Alpha Arbutin. Membantu meratakan warna kulit wajah, menyamarkan flek membandel bekas jerawat, serta memberikan tampilan wajah cerah sebening kristal.`,price:85e3,stock:50,category:`serum`,skin_type:`all`,concern:[`brightening`],concerns:[`brightening`],image:`/images/products/wardah_serum.jpg`,images:[`/images/products/wardah_serum.jpg`],rating:4.6,review_count:121,created_at:`2024-01-23`},{id:`prod_010`,name:`L'Oreal Paris Glycolic-Bright Glowing Cleanser Foam`,brand:`L'Oreal`,slug:`loreal-paris-glycolic-bright-glowing-cleanser-foam`,description:`Sabun pembersih wajah dari L'Oreal Paris yang mengandung Glycolic Acid (AHA). Membantu mengeksfoliasi sel kulit mati secara lembut setiap hari, meratakan tekstur kulit kasar, mencerahkan kulit kusam, dan meminimalkan penampakan pori-pori.`,price:69e3,stock:40,category:`cleanser`,skin_type:`combination`,concern:[`brightening`,`pore`],concerns:[`brightening`,`pore`],image:`/images/products/loreal_foam.jpg`,images:[`/images/products/loreal_foam.jpg`],rating:4.5,review_count:143,created_at:`2024-01-24`},{id:`prod_011`,name:`Sukin Signature Facial Moisturiser`,brand:`Sukin`,slug:`sukin-signature-facial-moisturiser`,description:`Pelembap harian Sukin yang memadukan Rosehip Oil, Avocado, Sesame Seed Oil, dan Jojoba Oil untuk menutrisi kulit secara optimal. Memberikan hidrasi mendalam dan mengembalikan kekenyalan kulit alami Anda.`,price:145e3,stock:30,category:`moisturizer`,skin_type:`normal`,concern:[`hydrating`],concerns:[`hydrating`],image:`https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80`,images:[`https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80`],rating:4.7,review_count:67,created_at:`2024-01-25`},{id:`prod_012`,name:`Biore UV Aqua Rich Watery Essence SPF 50+`,brand:`Biore`,slug:`biore-uv-aqua-rich-watery-essence-spf50`,description:`Tabir surya bertekstur sangat ringan seperti air dengan kandungan Hyaluronic Acid dan Royal Jelly. Melindungi kulit dari sinar UV secara maksimal tanpa rasa lengket atau white cast.`,price:115e3,stock:50,category:`sunscreen`,skin_type:`oily`,concern:[`hydrating`],concerns:[`hydrating`],image:`https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80`,images:[`https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80`],rating:4.8,review_count:320,created_at:`2024-01-26`}],r=[{id:1,product_id:`prod_001`,user_name:`Rani Amelia`,rating:5,comment:`Produk ini sangat bagus dan cocok di kulit saya! Sangat melembapkan.`,created_at:`2026-06-10T12:00:00Z`},{id:2,product_id:`prod_001`,user_name:`Siti Rahma`,rating:4,comment:`Suka sekali dengan teksturnya yang ringan dan cepat meresap.`,created_at:`2026-06-11T14:30:00Z`},{id:3,product_id:`prod_002`,user_name:`Putri Cantika`,rating:5,comment:`Baru coba seminggu sudah terlihat hasilnya, kemerahan mereda.`,created_at:`2026-06-12T09:15:00Z`},{id:4,product_id:`prod_002`,user_name:`Rani Amelia`,rating:5,comment:`Sangat direkomendasikan untuk masalah kulit sensitif dan berjerawat.`,created_at:`2026-06-13T10:20:00Z`},{id:5,product_id:`prod_003`,user_name:`Putri Cantika`,rating:5,comment:`Toner legendaris! Kulit jadi kenyal dan elastis.`,created_at:`2026-06-14T11:00:00Z`}],i=[{id:`art_001`,title:`5 Langkah Skincare Rutin untuk Kulit Kering`,slug:`5-langkah-skincare-rutin-untuk-kulit-kering`,excerpt:`Kulit kering membutuhkan hidrasi ekstra dan kelembapan yang terkunci rapat. Berikut adalah langkah-langkah skincare pagi dan malam yang wajib Anda lakukan untuk mendapatkan kulit dewy.`,content:`<p>Kulit kering seringkali ditandai dengan tekstur yang kasar, kusam, dan mudah mengelupas. Untuk mengatasinya, Anda membutuhkan rangkaian skincare yang fokus pada hidrasi dan memperkuat skin barrier.</p><h2>Langkah Skincare Pagi</h2><ul><li><strong>1. Pembersih Wajah Lembut:</strong> Gunakan face wash dengan formula pH seimbang yang tidak berbusa banyak agar kelembapan alami tidak terangkat.</li><li><strong>2. Hydrating Toner:</strong> Tepuk-tepuk toner dengan kandungan Hyaluronic Acid untuk mengembalikan air ke dalam sel kulit.</li><li><strong>3. Moisturizer:</strong> Aplikasikan pelembap bertekstur cream untuk mengunci hidrasi.</li><li><strong>4. Sunscreen:</strong> Wajib gunakan tabir surya minimal SPF 30 untuk melindungi kulit dari penuaan dini akibat UV.</li></ul><h2>Langkah Skincare Malam</h2><ul><li><strong>1. Double Cleansing:</strong> Bersihkan sisa kotoran dengan micellar water atau cleansing oil, dilanjutkan face wash.</li><li><strong>2. Moisturizer / Sleeping Mask:</strong> Gunakan moisturizer yang lebih tebal atau sleeping mask untuk kelembapan ekstra semalaman.</li></ul>`,thumbnail:`/images/articles/dry_skin.png`,jetpack_featured_media_url:`/images/articles/dry_skin.png`,category:`Skincare Tips`,author:`Damara Beauty`,date:`2026-06-13`,read_time:`5 menit`},{id:`art_002`,title:`Cara Mengatasi Jerawat Aktif Secara Aman`,slug:`cara-mengatasi-jerawat-secara-alami-dan-cepat`,excerpt:`Jerawat aktif meradang memang sangat mengganggu penampilan. Pelajari kandungan aktif skincare terbaik seperti Salicylic Acid dan Centella Asiatica untuk meredakan kemerahan.`,content:`<p>Mengatasi jerawat meradang membutuhkan ketelatenan dan pilihan kandungan skincare yang tepat. Menekan atau memencet jerawat hanya akan memperparah infeksi dan meninggalkan bopeng.</p><h2>Kandungan Aktif Pereda Jerawat</h2><ul><li><strong>Salicylic Acid (BHA):</strong> Bekerja membersihkan sumbatan minyak di dalam pori-pori.</li><li><strong>Centella Asiatica (Cica):</strong> Menenangkan kemerahan dan mempercepat penyembuhan kulit.</li><li><strong>Tea Tree Oil:</strong> Berperan sebagai antibakteri alami untuk melawan bakteri penyebab jerawat.</li></ul><p>Gunakan produk yang ringan (seperti gel) dan kurangi pemakaian scrub fisik sementara waktu agar jerawat tidak tergesek.</p>`,thumbnail:`https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80`,jetpack_featured_media_url:`https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80`,category:`Skincare Tips`,author:`Damara Beauty`,date:`2026-06-10`,read_time:`4 menit`},{id:`art_003`,title:`Pentingnya Double Cleansing untuk Kulit Oily`,slug:`mengenal-pentingnya-double-cleansing-setiap-hari`,excerpt:`Mencuci muka dengan facial wash saja tidak cukup untuk membersihkan sisa makeup dan sunscreen. Temukan mengapa double cleansing adalah kunci wajah bebas komedo dan jerawat.`,content:`<p>Double cleansing adalah metode membersihkan wajah dengan dua tahap pembersih berbeda. Tahap pertama menggunakan pembersih berbahan dasar minyak (oil/milk/micellar), dilanjutkan dengan sabun cuci muka berbahan dasar air.</p><h2>Mengapa Double Cleansing Penting?</h2><p>Sebagian besar sunscreen dan kosmetik diformulasikan tahan air. Sabun wajah biasa tidak dapat mengangkat lapisan lilin atau minyak tersebut sepenuhnya, menyisakan residu yang menyumbat pori-pori penyebab komedo. Lakukan double cleansing terutama pada sore atau malam hari setelah beraktivitas di luar rumah.</p>`,thumbnail:`https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80`,jetpack_featured_media_url:`https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80`,category:`Skincare Tips`,author:`Damara Beauty`,date:`2026-06-08`,read_time:`3 menit`},{id:`art_004`,title:`Mengenal Kandungan Niacinamide dan Manfaatnya`,slug:`mengenal-kandungan-niacinamide-dan-manfaatnya`,excerpt:`Niacinamide adalah salah satu kandungan skincare paling populer saat ini. Simak manfaat hebatnya untuk mencerahkan dan menjaga skin barrier.`,content:`<p>Niacinamide, atau dikenal juga sebagai Vitamin B3, adalah bahan serbaguna dalam dunia kecantikan. Kandungan ini sangat disukai karena bekerja dengan lembut tanpa menyebabkan iritasi parah bagi pemula.</p><h2>Manfaat Utama Niacinamide</h2><ul><li><strong>Mencerahkan Kulit:</strong> Membantu menghambat transfer pigmen warna ke sel kulit terluar, menyamarkan noda hitam bekas jerawat.</li><li><strong>Mengontrol Produksi Sebum:</strong> Sangat baik bagi kulit berminyak karena dapat membantu mengendalikan kelenjar minyak berlebih.</li><li><strong>Memperkuat Skin Barrier:</strong> Merangsang sintesis ceramide alami kulit untuk mengunci kelembapan dan mencegah infeksi bakteri.</li></ul>`,thumbnail:`https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80`,jetpack_featured_media_url:`https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80`,category:`Skincare Tips`,author:`Damara Beauty`,date:`2026-06-14`,read_time:`5 menit`},{id:`art_005`,title:`Sunscreen: Mengapa Wajib Dipakai Setiap Hari`,slug:`sunscreen-mengapa-wajib-dipakai-setiap-hari`,excerpt:`Mengabaikan penggunaan sunscreen dapat memicu flek hitam, penuaan dini, hingga risiko kanker kulit. Cari tahu pentingnya proteksi UV harian.`,content:`<p>Menggunakan serum mahal tidak akan ada gunanya jika Anda tidak melindungi kulit menggunakan tabir surya. Sinar ultraviolet (UV) dari matahari selalu ada sepanjang hari bahkan saat cuaca mendung.</p><h2>Alasan Wajib Memakai Sunscreen</h2><p>Sinar UVA menembus lapisan kulit dalam dan memecah kolagen, menyebabkan keriput halus dan kulit kendur (photoaging). Sinar UVB menyebabkan kulit terbakar matahari (sunburn) dan noda hitam. Pastikan Anda menggunakan sunscreen minimal dengan proteksi SPF 30 dan PA+++ setiap pagi hari dan lakukan re-apply setiap 2-3 jam saat berada di luar ruangan.</p>`,thumbnail:`https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80`,jetpack_featured_media_url:`https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80`,category:`Skincare Tips`,author:`Damara Beauty`,date:`2026-06-15`,read_time:`6 menit`},{id:`art_006`,title:`Panduan Memilih Moisturizer Sesuai Jenis Kulit`,slug:`panduan-memilih-moisturizer-sesuai-jenis-kulit`,excerpt:`Pelembap adalah kunci mengunci hidrasi. Kenali jenis pelembap yang tepat, apakah gel untuk kulit berminyak atau krim untuk kulit kering.`,content:`<p>Tugas utama moisturizer adalah mencegah penguapan air alami dari kulit. Namun, salah memilih tekstur dapat membuat kulit Anda terasa terlalu berminyak atau sebaliknya, kurang lembap.</p><h2>Cara Memilih Berdasarkan Jenis Kulit</h2><ul><li><strong>Kulit Berminyak/Kombinasi:</strong> Pilih pelembap bertekstur gel ringan berbasis air (water-based) agar cepat menyerap dan tidak menyumbat pori-pori wajah.</li><li><strong>Kulit Kering:</strong> Gunakan pelembap bertekstur krim tebal (rich cream) yang kaya kandungan emolin dan oklusif untuk menjaga barrier kulit sepanjang hari.</li><li><strong>Kulit Sensitif:</strong> Cari formula bebas alkohol, bebas parfum, dan hipoalergenik dengan kandungan penenang seperti Ceramide atau cica.</li></ul>`,thumbnail:`/images/products/skintific_moisturizer.jpg`,jetpack_featured_media_url:`/images/products/skintific_moisturizer.jpg`,category:`Skincare Tips`,author:`Damara Beauty`,date:`2026-06-12`,read_time:`5 menit`}],a=[{id:`DS-20260612001`,user_id:`user_001`,user_name:`Putri Cantika`,order_number:`ORD-20260612-001`,total_price:199e3,total:199e3,shipping_cost:15e3,shipping:15e3,payment_method:`transfer_bank`,payment_status:`paid`,status:`delivered`,order_status:`delivered`,recipient_name:`Putri Cantika`,recipient_phone:`089876543210`,shipping_address:`Jl. Sehat No. 10, Bandung`,notes:`Tolong diantar sebelum jam 5 sore.`,tracking_number:`DS-9081237198`,created_at:`2026-06-12T01:28:00Z`,items:[{product_id:`prod_001`,quantity:1,qty:1,price:139e3,name:`Skintific 5X Ceramide Barrier Moisture Gel`},{product_id:`prod_003`,quantity:1,qty:1,price:45e3,name:`Hada Labo Gokujyun Ultimate Moisturizing Lotion`}]},{id:`DS-20260615002`,user_id:`user_002`,user_name:`Rani Amelia`,order_number:`ORD-20260615-002`,total_price:213e3,total:213e3,shipping_cost:15e3,shipping:15e3,payment_method:`transfer_bank`,payment_status:`paid`,status:`shipped`,order_status:`shipped`,recipient_name:`Rani Amelia`,recipient_phone:`081234567800`,shipping_address:`Jl. Dummy No. 1, Surabaya`,notes:``,tracking_number:`DS-9081237199`,created_at:`2026-06-15T09:15:00Z`,items:[{product_id:`prod_002`,quantity:1,qty:1,price:198e3,name:`Skin1004 Madagascar Centella Ampoule`}]},{id:`DS-20260616003`,user_id:`user_003`,user_name:`Siti Rahma`,order_number:`ORD-20260616-003`,total_price:14e4,total:14e4,shipping_cost:15e3,shipping:15e3,payment_method:`cod`,payment_status:`unpaid`,status:`pending`,order_status:`pending`,recipient_name:`Siti Rahma`,recipient_phone:`081234567801`,shipping_address:`Jl. Dummy No. 2, Yogyakarta`,notes:``,tracking_number:``,created_at:`2026-06-16T11:00:00Z`,items:[{product_id:`prod_005`,quantity:1,qty:1,price:125e3,name:`COSRX Low pH Good Morning Gel Cleanser`}]}];function o(){let e=localStorage.getItem(`damaraskin_users`);(!e||JSON.parse(e).length===0)&&localStorage.setItem(`damaraskin_users`,JSON.stringify(t));let o=localStorage.getItem(`damaraskin_products`);(!o||JSON.parse(o).length===0)&&localStorage.setItem(`damaraskin_products`,JSON.stringify(n));let s=localStorage.getItem(`damaraskin_reviews`);(!s||JSON.parse(s).length===0)&&localStorage.setItem(`damaraskin_reviews`,JSON.stringify(r));let c=localStorage.getItem(`damaraskin_articles`);(!c||JSON.parse(c).length===0)&&localStorage.setItem(`damaraskin_articles`,JSON.stringify(i));let l=localStorage.getItem(`damaraskin_orders`);(!l||JSON.parse(l).length===0)&&localStorage.setItem(`damaraskin_orders`,JSON.stringify(a)),localStorage.setItem(`damaraskin_db_initialized`,`true`)}o();var s={getUsers(){return JSON.parse(localStorage.getItem(`damaraskin_users`)||`[]`)},saveUsers(e){localStorage.setItem(`damaraskin_users`,JSON.stringify(e))},getCurrentUser(){let e=sessionStorage.getItem(`damaraskin_current_user`)||localStorage.getItem(`damaraskin_current_user`);return e?JSON.parse(e):null},setCurrentUser(e,t=!1){let n=JSON.stringify(e);e?t?localStorage.setItem(`damaraskin_current_user`,n):sessionStorage.setItem(`damaraskin_current_user`,n):(localStorage.removeItem(`damaraskin_current_user`),sessionStorage.removeItem(`damaraskin_current_user`))},login(e,t,n=!1){let r=this.getUsers().find(n=>n.email===e&&n.password===t);return r?r.status===`suspended`?{success:!1,message:`Akun Anda ditangguhkan. Hubungi admin.`}:(this.setCurrentUser(r,n),{success:!0,user:r}):{success:!1,message:`Email atau password salah.`}},register(e,t,n){let r=this.getUsers();if(r.some(e=>e.email===t))return{success:!1,message:`Email sudah digunakan.`};let i={id:`user_`+Date.now(),name:e,email:t,password:n,role:`user`,phone:``,address:``,skin_type:null,skin_concerns:[],status:`active`};return r.push(i),this.saveUsers(r),this.setCurrentUser(i,!1),{success:!0,user:i}},logout(){this.setCurrentUser(null)},updateProfile(e,t,n,r){let i=this.getCurrentUser();if(!i)return{success:!1};let a=this.getUsers(),o=a.findIndex(e=>String(e.id)===String(i.id));if(o!==-1){a[o].name=e,a[o].email=t,a[o].phone=n,a[o].address=r,this.saveUsers(a);let i=!!localStorage.getItem(`damaraskin_current_user`);return this.setCurrentUser(a[o],i),{success:!0,user:a[o]}}return{success:!1}},updatePassword(e,t){let n=this.getCurrentUser();if(!n)return{success:!1,message:`Belum login.`};let r=this.getUsers(),i=r.findIndex(e=>String(e.id)===String(n.id));if(i!==-1){if(r[i].password!==e)return{success:!1,message:`Password lama salah.`};r[i].password=t,this.saveUsers(r);let n=!!localStorage.getItem(`damaraskin_current_user`);return this.setCurrentUser(r[i],n),{success:!0}}return{success:!1,message:`User tidak ditemukan.`}},updateSkinProfile(e,t){let n=this.getCurrentUser();if(!n)return{success:!1};let r=this.getUsers(),i=r.findIndex(e=>String(e.id)===String(n.id));if(i!==-1){r[i].skin_type=e,r[i].skin_concerns=t,this.saveUsers(r);let n=!!localStorage.getItem(`damaraskin_current_user`);return this.setCurrentUser(r[i],n),{success:!0,user:r[i]}}return{success:!1}},toggleUserStatus(e){let t=this.getUsers(),n=t.findIndex(t=>String(t.id)===String(e));return n!==-1&&t[n].role!==`admin`?(t[n].status=t[n].status===`active`?`suspended`:`active`,this.saveUsers(t),{success:!0,user:t[n]}):{success:!1}},getProducts(){return JSON.parse(localStorage.getItem(`damaraskin_products`)||`[]`)},saveProducts(e){localStorage.setItem(`damaraskin_products`,JSON.stringify(e))},getProductBySlug(e){return this.getProducts().find(t=>t.slug===e)},getProductById(e){return this.getProducts().find(t=>String(t.id)===String(e))},saveProduct(e){let t=this.getProducts();if(e.id){let n=t.findIndex(t=>String(t.id)===String(e.id));if(n!==-1)return t[n]={...t[n],...e,id:String(e.id)},this.saveProducts(t),t[n]}else{let n={...e,id:`prod_`+Date.now(),rating:5,review_count:0,images:e.images||[e.image||`/images/products/default_product.png`],image:e.image||(e.images?e.images[0]:`/images/products/default_product.png`)};return t.push(n),this.saveProducts(t),n}return null},deleteProduct(e){let t=this.getProducts();return t=t.filter(t=>String(t.id)!==String(e)),this.saveProducts(t),!0},getReviews(e=null){let t=JSON.parse(localStorage.getItem(`damaraskin_reviews`)||`[]`);return e?t.filter(t=>String(t.product_id)===String(e)):t},addReview(e,t,n){let r=this.getCurrentUser();if(!r)return{success:!1,message:`Silakan login terlebih dahulu.`};let i=JSON.parse(localStorage.getItem(`damaraskin_reviews`)||`[]`);if(i.some(t=>String(t.product_id)===String(e)&&t.user_name===r.name))return{success:!1,message:`Anda sudah mengulas produk ini.`};let a={id:Date.now(),product_id:String(e),user_name:r.name,rating:parseInt(t),comment:n,created_at:new Date().toISOString()};i.push(a),localStorage.setItem(`damaraskin_reviews`,JSON.stringify(i));let o=i.filter(t=>String(t.product_id)===String(e)),s=o.reduce((e,t)=>e+t.rating,0)/o.length,c=this.getProducts(),l=c.findIndex(t=>String(t.id)===String(e));return l!==-1&&(c[l].rating=parseFloat(s.toFixed(1)),c[l].review_count=o.length,this.saveProducts(c)),{success:!0,review:a}},getCart(){let e=this.getCurrentUser();if(!e)return[];let t=`damaraskin_cart_${e.id}`;return JSON.parse(localStorage.getItem(t)||`[]`)},saveCart(e){let t=this.getCurrentUser();if(!t)return;let n=`damaraskin_cart_${t.id}`;localStorage.setItem(n,JSON.stringify(e)),window.dispatchEvent(new Event(`cart-updated`))},addToCart(e,t=1){let n=this.getCart(),r=this.getProductById(e);if(!r)return{success:!1,message:`Produk tidak ditemukan.`};let i=n.findIndex(t=>String(t.product_id)===String(e));if(i!==-1){let e=n[i].quantity+parseInt(t);if(e>r.stock)return{success:!1,message:`Stok tidak mencukupi. Tersedia: ${r.stock}`};n[i].quantity=e}else{if(parseInt(t)>r.stock)return{success:!1,message:`Stok tidak mencukupi. Tersedia: ${r.stock}`};n.push({id:Date.now(),product_id:String(e),quantity:parseInt(t)})}return this.saveCart(n),{success:!0}},updateCartQty(e,t){let n=this.getCart(),r=n.findIndex(t=>String(t.id)===String(e));return r===-1||t>this.getProductById(n[r].product_id).stock?{success:!1}:(n[r].quantity=parseInt(t),this.saveCart(n),{success:!0})},removeFromCart(e){let t=this.getCart();return t=t.filter(t=>String(t.id)!==String(e)),this.saveCart(t),!0},clearCart(){let e=this.getCurrentUser();if(!e)return;let t=`damaraskin_cart_${e.id}`;localStorage.removeItem(t),window.dispatchEvent(new Event(`cart-updated`))},getOrders(){let e=JSON.parse(localStorage.getItem(`damaraskin_orders`)||`[]`),t=this.getCurrentUser();return t?t.role===`admin`?e:e.filter(e=>String(e.user_id)===String(t.id)):[]},getAllOrders(){return JSON.parse(localStorage.getItem(`damaraskin_orders`)||`[]`)},getOrderById(e){return this.getAllOrders().find(t=>String(t.id)===String(e))},checkout(e,t,n,r,i){let a=this.getCurrentUser();if(!a)return{success:!1,message:`Silakan login terlebih dahulu.`};let o=this.getCart();if(o.length===0)return{success:!1,message:`Keranjang kosong.`};let s=this.getProducts(),c=[],l=0;for(let e of o){let t=s.find(t=>String(t.id)===String(e.product_id));if(!t||t.stock<e.quantity)return{success:!1,message:`Stok produk ${t?t.name:`tidak diketahui`} habis.`};c.push({product_id:String(t.id),quantity:e.quantity,qty:e.quantity,price:t.price,name:t.name}),l+=t.price*e.quantity,t.stock-=e.quantity}let u=15e3,d=l+u,f=`ORD-`+new Date().toISOString().slice(0,10).replace(/-/g,``)+`-`+Math.floor(1e3+Math.random()*9e3),p={id:`DS-`+Date.now(),user_id:String(a.id),user_name:a.name,order_number:f,total_price:d,total:d,shipping_cost:u,shipping:u,payment_method:i,payment_status:i===`cod`?`unpaid`:`paid`,status:`pending`,order_status:`pending`,recipient_name:e,recipient_phone:t,shipping_address:n,notes:r,tracking_number:``,created_at:new Date().toISOString(),items:c};this.saveProducts(s);let m=this.getAllOrders();return m.unshift(p),localStorage.setItem(`damaraskin_orders`,JSON.stringify(m)),this.clearCart(),{success:!0,order:p}},updateOrderStatus(e,t){let n=this.getAllOrders(),r=n.findIndex(t=>String(t.id)===String(e));return r===-1?{success:!1}:(n[r].status=t,n[r].order_status=t,t===`delivered`&&(n[r].payment_status=`paid`),t===`shipped`&&!n[r].tracking_number&&(n[r].tracking_number=`DS-`+Math.floor(1e9+Math.random()*9e9)),localStorage.setItem(`damaraskin_orders`,JSON.stringify(n)),{success:!0,order:n[r]})},getArticles(){return JSON.parse(localStorage.getItem(`damaraskin_articles`)||`[]`).map(e=>{let t={...e};return t.title&&typeof t.title==`string`&&(t.title={rendered:t.title}),t.excerpt&&typeof t.excerpt==`string`&&(t.excerpt={rendered:t.excerpt}),t.content&&typeof t.content==`string`&&(t.content={rendered:t.content}),!t.jetpack_featured_media_url&&t.thumbnail&&(t.jetpack_featured_media_url=t.thumbnail),t})},getArticleBySlug(e){return this.getArticles().find(t=>t.slug===e)},saveArticles(e){localStorage.setItem(`damaraskin_articles`,JSON.stringify(e))},getArticleById(e){return this.getArticles().find(t=>String(t.id)===String(e))},saveArticle(e){let t=this.getArticles();if(e.id){let n=t.findIndex(t=>String(t.id)===String(e.id));if(n!==-1)return t[n]={...t[n],...e,id:String(e.id)},this.saveArticles(t),t[n]}else{let n={...e,id:`art_`+Date.now(),date:new Date().toISOString().slice(0,10),jetpack_featured_media_url:e.thumbnail||e.jetpack_featured_media_url||`/images/articles/default.png`,title:typeof e.title==`string`?{rendered:e.title}:e.title,excerpt:typeof e.excerpt==`string`?{rendered:e.excerpt}:e.excerpt,content:typeof e.content==`string`?{rendered:e.content}:e.content};return t.push(n),this.saveArticles(t),n}return null},deleteArticle(e){let t=this.getArticles();return t=t.filter(t=>String(t.id)!==String(e)),this.saveArticles(t),!0}};window.db=s,window.Alpine=e;var c=`
<nav class="bg-white/80 backdrop-blur-md border-b border-primary/10 sticky top-0 z-50 transition-all duration-300" x-data="navbarComponent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex items-center">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center">
                    <a href="/index.html" class="flex items-center gap-2.5 group transition duration-300">
                        <img src="/images/logo.png" alt="DamaraSkin Logo" class="h-10 w-auto group-hover:scale-105 transition duration-300">
                        <span class="font-brush text-3xl md:text-4xl text-primary font-bold group-hover:text-accent transition duration-300">
                            DamaraSkin
                        </span>
                    </a>
                </div>
                <!-- Navigation Links (Desktop) -->
                <div class="hidden sm:ml-10 sm:flex sm:space-x-8">
                    <a href="/index.html" class="nav-link-item inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium transition duration-300 text-gray-500 hover:text-primary hover:border-primary-light">
                        Home
                    </a>
                    <a href="/products.html" class="nav-link-item inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium transition duration-300 text-gray-500 hover:text-primary hover:border-primary-light">
                        Katalog Produk
                    </a>
                    <a href="/articles.html" class="nav-link-item inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium transition duration-300 text-gray-500 hover:text-primary hover:border-primary-light">
                        Tips & Artikel
                    </a>
                    <template x-if="currentUser && currentUser.role === 'user'">
                        <a href="/dashboard.html" class="nav-link-item inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium transition duration-300 text-gray-500 hover:text-primary hover:border-primary-light">
                            Skin Consultation
                        </a>
                    </template>
                </div>
            </div>

            <!-- Right side details -->
            <div class="hidden sm:flex sm:items-center sm:ml-6 space-x-4">
                <!-- Guest View -->
                <template x-if="!currentUser">
                    <div class="flex items-center space-x-4">
                        <a href="/login.html" class="text-sm font-medium text-gray-500 hover:text-primary transition duration-300">Login</a>
                        <a href="/register.html" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-accent rounded-full transition duration-300 shadow-md shadow-primary/20 hover:scale-105 transform">
                            Daftar
                        </a>
                    </div>
                </template>

                <!-- Authenticated View -->
                <template x-if="currentUser">
                    <div class="flex items-center space-x-4">
                        <!-- Cart Icon for Regular Users -->
                        <template x-if="currentUser.role === 'user'">
                            <a href="/cart.html" class="relative p-2 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-full transition duration-300">
                                <span class="sr-only">Keranjang</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <template x-if="cartCount > 0">
                                    <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary rounded-full animate-pulse" x-text="cartCount">
                                    </span>
                                </template>
                            </a>
                        </template>

                        <!-- User Profile Dropdown -->
                        <div class="relative">
                            <button @click="open = !open" @click.away="open = false" class="flex items-center text-sm font-medium text-gray-550 hover:text-primary focus:outline-none transition duration-300 space-x-2">
                                <span x-text="currentUser.name"></span>
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <div x-show="open" x-transition class="absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-white border border-primary/5 py-1 ring-1 ring-black ring-opacity-5 z-50">
                                <template x-if="currentUser.role === 'admin'">
                                    <a href="/admin/dashboard.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition duration-200">
                                        Admin Dashboard
                                    </a>
                                </template>
                                <template x-if="currentUser.role === 'user'">
                                    <div>
                                        <a href="/dashboard.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition duration-200">
                                            Dashboard
                                        </a>
                                        <a href="/profile.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition duration-200">
                                            Profil Saya
                                        </a>
                                        <a href="/orders.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition duration-200">
                                            Riwayat Transaksi
                                        </a>
                                    </div>
                                </template>
                                <hr class="border-gray-100 my-1">
                                <button @click="logout()" class="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition duration-200">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

            <!-- Hamburger (Mobile) -->
            <div class="-mr-2 flex items-center sm:hidden" x-data="{ mobileOpen: false }">
                <button @click="mobileOpen = !mobileOpen" class="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-primary hover:bg-primary/5 focus:outline-none transition duration-300">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path :class="{'hidden': mobileOpen, 'inline-flex': !mobileOpen }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path :class="{'hidden': !mobileOpen, 'inline-flex': mobileOpen }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <!-- Mobile Menu Dropdown -->
                <div x-show="mobileOpen" x-transition class="absolute top-16 left-0 w-full bg-white border-b border-primary/10 shadow-lg p-4 z-50 flex flex-col space-y-3 sm:hidden" @click.away="mobileOpen = false">
                    <a href="/index.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Home</a>
                    <a href="/products.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Katalog Produk</a>
                    <a href="/articles.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Tips & Artikel</a>
                    
                    <template x-if="currentUser && currentUser.role === 'user'">
                        <div>
                            <a href="/dashboard.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Skin Consultation</a>
                            <a href="/cart.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">
                                Keranjang (<span x-text="cartCount"></span>)
                            </a>
                            <a href="/profile.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Profil Saya</a>
                            <a href="/orders.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Riwayat Transaksi</a>
                        </div>
                    </template>

                    <template x-if="currentUser && currentUser.role === 'admin'">
                        <a href="/admin/dashboard.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Admin Dashboard</a>
                    </template>
                    
                    <template x-if="currentUser">
                        <div>
                            <hr class="border-gray-100 my-1">
                            <button @click="logout()" class="block w-full text-left px-3 py-2 rounded-xl text-base font-medium text-red-500 hover:bg-red-50 transition">
                                Logout
                            </button>
                        </div>
                    </template>

                    <template x-if="!currentUser">
                        <div>
                            <a href="/login.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Login</a>
                            <a href="/register.html" class="block text-center px-3 py-2 rounded-xl text-base font-medium text-white bg-primary hover:bg-accent transition shadow-md shadow-primary/20">Daftar</a>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</nav>
`,l=`
<footer class="bg-gray-50 border-t border-primary/10 py-12 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-2">
                <a href="/index.html" class="inline-flex items-center gap-3 group transition duration-300">
                    <img src="/images/logo.png" alt="DamaraSkin Logo" class="h-12 w-auto group-hover:scale-105 transition duration-300">
                    <span class="font-brush text-4xl text-primary font-bold group-hover:text-accent transition duration-300">
                        DamaraSkin
                    </span>
                </a>
                <p class="mt-4 text-sm text-gray-500 leading-relaxed max-w-sm">
                    DamaraSkin adalah platform konsultasi kulit pintar dan rekomendasi produk kecantikan yang dirancang khusus untuk memenuhi kebutuhan kulit unik Anda. Cantik alami dimulai dari perawatan yang tepat.
                </p>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full transition duration-300">
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                    </a>
                    <a href="#" class="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full transition duration-300">
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                    </a>
                </div>
            </div>
            <div>
                <h3 class="text-sm font-semibold text-gray-700 tracking-wider uppercase border-b border-primary/10 pb-2">
                    Navigasi
                </h3>
                <ul class="mt-4 space-y-2">
                    <li><a href="/index.html" class="text-sm text-gray-500 hover:text-primary transition duration-200">Home</a></li>
                    <li><a href="/products.html" class="text-sm text-gray-500 hover:text-primary transition duration-200">Katalog Produk</a></li>
                    <li><a href="/articles.html" class="text-sm text-gray-500 hover:text-primary transition duration-200">Tips & Artikel</a></li>
                    <template x-if="currentUser && currentUser.role === 'user'">
                        <li><a href="/dashboard.html" class="text-sm text-gray-500 hover:text-primary transition duration-200">Skin Consultation</a></li>
                    </template>
                </ul>
            </div>
            <div>
                <h3 class="text-sm font-semibold text-gray-700 tracking-wider uppercase border-b border-primary/10 pb-2">
                    Hubungi Kami
                </h3>
                <ul class="mt-4 space-y-2 text-sm text-gray-500">
                    <li class="flex items-center space-x-2">
                        <svg class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        <span>Gedung Damara, Lt. 3, Jakarta</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        <span>support@damaraskin.com</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        <span>+62 21-1234-5678</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mt-12 pt-8 border-t border-primary/5 text-center text-xs text-gray-400">
            &copy; 2026 DamaraSkin. Hak Cipta Dilindungi. Dibuat dengan &hearts; untuk UAS Workshop Desain UI.
        </div>
    </div>
</footer>
`,u=`
<!-- Mobile Sidebar Drawer (Off-canvas menu for mobile) -->
<div x-show="sidebarOpen" class="relative z-50 md:hidden" role="dialog" aria-modal="true" x-cloak>
    <!-- Overlay background -->
    <div x-show="sidebarOpen" 
         x-transition:enter="transition-opacity ease-linear duration-300" 
         x-transition:enter-start="opacity-0" 
         x-transition:enter-end="opacity-100" 
         x-transition:leave="transition-opacity ease-linear duration-300" 
         x-transition:leave-start="opacity-100" 
         x-transition:leave-end="opacity-0" 
         class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"></div>

    <div class="fixed inset-0 flex z-40">
        <!-- Off-canvas menu panel -->
        <div x-show="sidebarOpen" 
             x-transition:enter="transition ease-in-out duration-300 transform" 
             x-transition:enter-start="-translate-x-full" 
             x-transition:enter-end="translate-x-0" 
             x-transition:leave="transition ease-in-out duration-300 transform" 
             x-transition:leave-start="translate-x-0" 
             x-transition:leave-end="-translate-x-full" 
             class="relative flex-1 flex flex-col max-w-xs w-full bg-white pt-5 pb-4 shadow-2xl" 
             @click.away="sidebarOpen = false">
             
            <!-- Close Button -->
            <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button @click="sidebarOpen = false" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center px-6 border-b border-gray-100 pb-4">
                <a href="/index.html" class="flex items-center gap-2.5 group transition duration-300">
                    <img src="/images/logo.png" alt="DamaraSkin Logo" class="h-8 w-auto">
                    <span class="font-brush text-2xl text-primary font-bold">
                        DamaraSkin
                    </span>
                </a>
            </div>

            <!-- Mobile Menu Links -->
            <div class="mt-6 flex-grow flex flex-col" x-data="adminSidebarComponent">
                <nav class="flex-1 px-4 space-y-1.5 overflow-y-auto">
                    <a href="/admin/dashboard.html" class="nav-admin-dashboard group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"/>
                        </svg>
                        Dashboard
                    </a>
                    <a href="/admin/products.html" class="nav-admin-products group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                        </svg>
                        Kelola Produk
                    </a>
                    <a href="/admin/orders.html" class="nav-admin-orders group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                        Kelola Pesanan
                    </a>
                    <a href="/admin/articles.html" class="nav-admin-articles group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012 2h10a2 2 0 012 2v1m2 4a2 2 0 012 2v7a2 2 0 01-2 2H9a2 2 0 01-2-2v-1"/>
                        </svg>
                        Kelola Artikel
                    </a>
                    <a href="/admin/users.html" class="nav-admin-users group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                        Kelola User
                    </a>
                    <a href="/admin/profile.html" class="nav-admin-profile group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        Profil Admin
                    </a>
                </nav>
                <div class="p-4 border-t border-gray-100 bg-gray-50/50">
                    <button @click="logout()" class="w-full flex items-center px-4 py-2.5 text-sm font-semibold rounded-xl text-red-500 hover:bg-red-50 transition">
                        <svg class="mr-3 h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                        </svg>
                        Keluar
                    </button>
                </div>
            </div>
        </div>
        
        <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Force sidebar to shrink to fit close button -->
        </div>
    </div>
</div>

<!-- Desktop Sidebar -->
<div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r border-gray-200/80 shadow-[1px_0_10px_rgba(0,0,0,0.02)]">
    <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-6 border-b border-gray-100/60 pb-5">
            <a href="/index.html" class="flex items-center gap-2.5 group transition duration-300">
                <img src="/images/logo.png" alt="DamaraSkin Logo" class="h-9 w-auto group-hover:scale-105 transition duration-300">
                <span class="font-brush text-2xl text-primary font-bold group-hover:text-accent transition duration-300">
                    DamaraSkin Admin
                </span>
            </a>
        </div>
        <div class="mt-6 flex-grow flex flex-col" x-data="adminSidebarComponent">
            <nav class="flex-1 px-4 space-y-1.5">
                <a href="/admin/dashboard.html" class="nav-admin-dashboard group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"/>
                    </svg>
                    Dashboard
                </a>
                <a href="/admin/products.html" class="nav-admin-products group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                    </svg>
                    Kelola Produk
                </a>
                <a href="/admin/orders.html" class="nav-admin-orders group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Kelola Pesanan
                </a>
                <a href="/admin/articles.html" class="nav-admin-articles group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012 2h10a2 2 0 012 2v1m2 4a2 2 0 012 2v7a2 2 0 01-2 2H9a2 2 0 01-2-2v-1"/>
                    </svg>
                    Kelola Artikel
                </a>
                <a href="/admin/users.html" class="nav-admin-users group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                    Kelola User
                </a>
                <a href="/admin/profile.html" class="nav-admin-profile group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    Profil Admin
                </a>
            </nav>
            <div class="p-4 border-t border-gray-100">
                <button @click="logout()" class="w-full flex items-center px-4 py-2.5 text-sm font-semibold rounded-xl text-red-500 hover:bg-red-50 transition">
                    <svg class="mr-3 h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                    Keluar
                </button>
            </div>
        </div>
    </div>
</div>
`,d=document.getElementById(`navbar-container`);d&&(d.innerHTML=c);var f=document.getElementById(`footer-container`);f&&(f.innerHTML=l);var p=document.getElementById(`admin-sidebar-container`);p&&(p.innerHTML=u);var m=window.location.pathname;if(document.querySelectorAll(`.nav-link-item`).forEach(e=>{let t=e.getAttribute(`href`);(t===m||t!==`/`&&m.startsWith(t))&&(e.classList.remove(`border-transparent`,`text-gray-500`),e.classList.add(`border-primary`,`text-dark-text`))}),m.startsWith(`/admin/`)){let e=[`bg-primary`,`text-white`],t=[`text-gray-600`,`hover:bg-primary/5`,`hover:text-primary`];document.querySelectorAll(`[class^='nav-admin-']`).forEach(n=>{let r=n.classList.contains(`nav-admin-dashboard`)&&(m===`/admin/dashboard`||m===`/admin/dashboard.html`),i=n.classList.contains(`nav-admin-products`)&&m.startsWith(`/admin/product`),a=n.classList.contains(`nav-admin-orders`)&&m.startsWith(`/admin/order`),o=n.classList.contains(`nav-admin-articles`)&&m.startsWith(`/admin/article`),s=n.classList.contains(`nav-admin-users`)&&m.startsWith(`/admin/user`),c=n.classList.contains(`nav-admin-profile`)&&m.startsWith(`/admin/profile`);r||i||a||o||s||c?(n.classList.add(...e),n.classList.remove(...t),n.querySelector(`svg`)?.classList.add(`text-white`),n.querySelector(`svg`)?.classList.remove(`text-gray-400`)):(n.classList.add(...t),n.classList.remove(...e),n.querySelector(`svg`)?.classList.add(`text-gray-400`),n.querySelector(`svg`)?.classList.remove(`text-white`))})}var h=[`/login`,`/register`,`/login.html`,`/register.html`],g=[`/admin/dashboard`,`/admin/products`,`/admin/product-create`,`/admin/product-edit`,`/admin/orders`,`/admin/order-detail`,`/admin/users`,`/admin/dashboard.html`,`/admin/products.html`,`/admin/product-create.html`,`/admin/product-edit.html`,`/admin/orders.html`,`/admin/order-detail.html`,`/admin/users.html`,`/admin/articles`,`/admin/article-create`,`/admin/article-edit`,`/admin/articles.html`,`/admin/article-create.html`,`/admin/article-edit.html`,`/admin/profile`,`/admin/profile.html`],_=[`/dashboard`,`/cart`,`/checkout`,`/orders`,`/order-detail`,`/order-success`,`/profile`,`/dashboard.html`,`/cart.html`,`/checkout.html`,`/orders.html`,`/order-detail.html`,`/order-success.html`,`/profile.html`],v=s.getCurrentUser();m.startsWith(`/admin/`)||g.includes(m)?(!v||v.role!==`admin`)&&(window.location.href=`/login.html`):_.some(e=>m===e||m.startsWith(e))?(!v||v.role!==`user`)&&(window.location.href=`/login.html`):h.includes(m)&&v&&(v.role===`admin`?window.location.href=`/admin/dashboard.html`:window.location.href=`/dashboard.html`),e.data(`navbarComponent`,()=>({currentUser:null,cartCount:0,open:!1,mobileOpen:!1,init(){this.updateState(),window.addEventListener(`cart-updated`,()=>this.updateState()),window.addEventListener(`user-logged-in`,()=>this.updateState())},updateState(){this.currentUser=s.getCurrentUser();let e=s.getCart();this.cartCount=e.reduce((e,t)=>e+t.quantity,0)},logout(){s.logout(),window.dispatchEvent(new Event(`user-logged-in`)),window.location.href=`/login.html`}})),e.data(`adminSidebarComponent`,()=>({logout(){s.logout(),window.location.href=`/login.html`}})),window.renderStars=function(e){let t=``,n=Math.round(e);for(let e=1;e<=5;e++)e<=n?t+=`<svg class="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`:t+=`<svg class="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;return t},window.formatPrice=function(e){return`Rp `+new Intl.NumberFormat(`id-ID`).format(e)},e.start();