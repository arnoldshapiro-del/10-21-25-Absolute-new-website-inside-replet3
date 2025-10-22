import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SLIDES_DIR = path.join(__dirname, '..', 'client', 'public', 'about-conditions');
const OUTPUT_FILE = path.join(SLIDES_DIR, 'manifest.json');

function generateManifest() {
  const manifest = {};
  
  // Read all folders in about-conditions directory
  const folders = fs.readdirSync(SLIDES_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  console.log(`\n📁 Scanning ${folders.length} condition folders...`);

  folders.forEach(folder => {
    const folderPath = path.join(SLIDES_DIR, folder);
    
    // Find all PNG slide files
    const slideFiles = fs.readdirSync(folderPath)
      .filter(file => file.match(/^Slide\d+\.PNG$/i))
      .sort((a, b) => {
        // Extract numbers and sort numerically
        const numA = parseInt(a.match(/\d+/)[0]);
        const numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
      });

    if (slideFiles.length > 0) {
      // Store the relative paths from /about-conditions/
      manifest[folder] = slideFiles.map(file => `/about-conditions/${encodeURIComponent(folder)}/${file}`);
      console.log(`✅ ${folder}: ${slideFiles.length} slides`);
    }
  });

  // Write manifest to JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2));
  
  const totalSlides = Object.values(manifest).reduce((sum, slides) => sum + slides.length, 0);
  console.log(`\n🎉 Generated manifest with ${Object.keys(manifest).length} conditions and ${totalSlides} total slides`);
  console.log(`📝 Manifest saved to: ${OUTPUT_FILE}\n`);
}

generateManifest();
