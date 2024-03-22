import * as esbuild from 'esbuild';
import process from 'node:process'
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pkg = JSON.parse(fs.readFileSync('./package.json'));

await esbuild.build({
        entryPoints: [path.resolve(__dirname, './src/videojs-vjsdownload.js')],
        outdir: "dist",
        bundle: true,
        platform: "browser",
        minify: true,
        banner: {
                js: `/*!
* ${pkg.name}
* @author ${pkg.author}
* @version ${pkg.version}
* @url ${pkg.repository.url}
* Copyright ${new Date().getFullYear()} ${pkg.license} licensed.
*/`,
                css: `/**
* ${pkg.name}
* @author ${pkg.author}
* @version ${pkg.version}
* @url ${pkg.repository.url}
* Copyright ${new Date().getFullYear()} ${pkg.license} licensed.
*/`,
              }
}).catch(() => process.exit(1));