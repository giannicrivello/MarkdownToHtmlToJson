//read a file into into memory, and get each line to perform an operation on it
//input comes from a file, output goes to a file
import fs from 'fs';
import readline from 'readline';


let result = {};

class Data {
  constructor(title, date, description, content, socials) {
    this.title = title;
    this.date = date;
    this.description = description;
    this.content = content;
    this.socials = socials;
  }
}

function createNewMember(title, data, description, content, socials) {
	let newMemer = new Data();
	newMemer.title = title;
	newMemer.date = data;
	newMemer.description = description;
	newMemer.content = content;
	newMemer.socials = socials;
	return result = {
		"title": newMemer.title,
		"date": newMemer.date,
		"description": newMemer.description,
		"content": newMemer.content,
		"socials": newMemer.socials
	}
}

export async function transform(fileName, title, data, description, content, socials) {
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    crlfDelay: Infinity,
  });

  const lines = [];
  for await (const line of rl) {
    lines.push(line);
  }
  let output = lines.slice(1, lines.length - 1);
  output.push(createNewMember(title, data, description, content, socials));
  writeFile(fileName, JSON.stringify(output));

}

async function writeFile(fileName, data) {
	  fs.writeFile(fileName, data, (err) => {
		  	    if (err) throw err;
		  	    console.log("The file has been saved!");
		  	  }
		  	  );
}




