import {unified} from 'unified';
import {transform} from './transform.js';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import {toVFile} from 'to-vfile';
import matter from 'gray-matter';
import fs from 'fs';

const file = matter.read('index.md');
console.log(file.content)

const inFile = ('test.json')

const title = file.data.title;
const date = file.data.date;
const description = file.data.description;
const socials = file.data.socials;

unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)
  .process(file.content)
  .then(
	      (result) => {
		transform(inFile, title, date, description, result.value, socials);
      },
	      (err) => {
		      throw err;
		      	      }
	      );



















