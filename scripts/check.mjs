import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
for(const n of ['app','remodel','invoice-only','cost-sections','simple']){const r=spawnSync(process.execPath,['--check',root+'src/'+n+'.js'],{stdio:'inherit'});if(r.status!==0)process.exit(1)}console.log('JavaScript syntax checks passed');
