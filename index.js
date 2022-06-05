import path from 'path';
import fs from 'fs';
import {transform} from './lib/transform.js';

const postDir = path.join(process.cwd(), 'posts');
const destDir = path.join(process.cwd(), '_data');
const jsonFile = 'post.json';

	//writeFile(destPath, JSON.stringify(posts, null, 2));

async function generatePosts(postDir) {
  const fileNames = fs.readdirSync(postDir);
  console.log(fileNames);

  let posts = [];

    for await (const file of fileNames) {
    const fullPath = path.join(postDir, file);
    transform(fullPath).then((json) => {
	   posts.push(json); 
    });
    }
	const destPath = path.join(destDir, jsonFile);

	writeFile(destPath, JSON.stringify(posts, null, 2));
}

function writeFile(inFile, data) {
  fs.writeFile(inFile, data, (err) => {
    if (err) throw err;
      console.log("The file has been saved!");
    }
  );
}
generatePosts(postDir)
