import path from 'path';
import fs from 'fs';
import {transformMdtoHtmltoJson} from './lib/transform.js';

const postDir = path.join(process.cwd(), 'posts');
const destDir = path.join(process.cwd(), '_data');
const jsonFile = 'post.json';

const fileNames = fs.readdirSync(postDir);

async function generatePosts(fileNames, postDir, destDir, jsonFile) {
	  fileNames.forEach( (fileName) => {
			const fullPath = path.join(postDir, fileName);
			const destPath = path.join(destDir, jsonFile)
			transformMdtoHtmltoJson(destPath, fullPath);
		});
}


generatePosts(fileNames, postDir, destDir, jsonFile);

