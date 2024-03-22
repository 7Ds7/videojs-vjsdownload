import * as esbuild from 'esbuild';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let buildEndPlugin = {
  name: 'buildEndPlugin',
  setup(build) {
    build.onEnd(result => {
      console.log(`Build ended with \x1b[31m${result.errors.length} errors\x1b[0m and \x1b[33m${result.warnings.length} warnings\x1b[0m`);
      result.errors.forEach((e) => {
        console.log(`\n`);
        console.log(`\x1b[41m-- ERROR --\x1b[0m `);
        console.log(` ${e.text}`);
        console.log(` ${e.location.file} ${e.location.line}:${e.location.column}`);
      });
      
      // if (result.errors.length > 0) {
      //   process.exit(1);
      // }
    })
  },
}


let ctx = await esbuild.context({
  entryPoints: [path.resolve(__dirname, './src/videojs-vjsdownload.js')],
  outdir: "dist",
  bundle: true,
  metafile: true,
  platform: "browser",
  plugins: [buildEndPlugin]
})

await ctx.watch();
console.log('watching...')