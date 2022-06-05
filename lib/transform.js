import {unified} from 'unified';
import {toJson} from './toJson.js';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import {toVFile} from 'to-vfile';
import matter from 'gray-matter';
import fs from 'fs';



/**
	* @param {String} dest - path to json file to write to
	* @param {String} post - path to markdown file to read from
*/
export function transformMdtoHtmltoJson(dest, post) {
	
	const file = matter.read(post);
	
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
				toJson(dest, title, date, description, result.value, socials);
			},
			(err) => {
				throw err;
			}
	      );
}


















