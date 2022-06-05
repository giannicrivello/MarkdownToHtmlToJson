import { unified } from "unified";
import { toJson } from "./toJson.js";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { toVFile } from "to-vfile";
import matter from "gray-matter";
import fs from "fs";

/**
 * @param {String} dest - path to json file to write to
 * @param {String} post - path to markdown file to read from
 */
const pathToPost = 'post.md';
let posts = [];

export function transform(pathToPost) {
	const file = matter.read(pathToPost);
	const { title, date, description, socials } = file.data;
   
return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(file.content)
    .then(
      (result) => {
        // I used the fields you added in your exemple
        // but if you want ALL from file.data, i suggest
        // you remove the declaration of all those variables
        // and use object destructuration in this return
        // object instead:
        // return {
        //   ...file.data,
        //   content: result.value,
        // }
	let json = {
			  title,
			  date,
			  description,
			  socials,
			  content: result.value,
			}
	      return json;
      },
      (err) => {
        throw err;
      }
    )
}

