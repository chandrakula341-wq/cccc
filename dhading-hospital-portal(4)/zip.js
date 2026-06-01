import fs from 'fs';
import AdmZip from 'adm-zip';

try {
  const zip = new AdmZip();
  // Adds the contents of the dist/ folder to the ROOT of the zip file
  zip.addLocalFolder('dist/');
  
  // Create the ZIP in the workspace root
  const zipName = 'Render-Ready-Deploy.zip';
  zip.writeZip(zipName);
  console.log(`Successfully zipped dist/ contents to ${zipName}`);
} catch (e) {
  console.error('Error creating ZIP:', e);
}
