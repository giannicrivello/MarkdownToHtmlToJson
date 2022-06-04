import {unified} from 'unified';
import {transform} from './transform.js';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import {toVFile} from 'to-vfile';
import matter from 'gray-matter';
import fs from 'fs';

const file = matter.read('test.md');
console.log(file.content)

unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)
  .process(file.content)
  .then(
	      (result) => {
		fs.writeFile("test.html", result.value, (err) => {
			if (err) throw err;
			console.log("The file has been saved!");
		}
		);
      },
	      (err) => {
		      throw err;
		      	      }
	      );



















