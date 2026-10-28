import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const read=n=>fs.readFileSync(root+'src/'+n,'utf8');
let html=read('index.html').replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+read('style.css').replace(/@import url\('[^']+'\);/,'')+'</style>');
for(const n of ['app','remodel','invoice-only','cost-sections','simple'])html=html.replace('<script src="'+n+'.js"></script>',()=>'<script>'+read(n+'.js')+'</script>');
fs.writeFileSync(root+'index.html',html);console.log('Built index.html');
