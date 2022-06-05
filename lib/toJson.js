//read a file into into memory, and get each line to perform an operation on it
//input comes from a file, output goes to a file
import fs from 'fs';
import readline from 'readline';



class Data {
/**
	*
	* @constructor
	* @param {String} title
	* @param {String} date
	* @param {String} description
	* @param {String} content
	* @param {String} socials
	* @return {Object} Data
	*
*/
  constructor(title, date, description, content, socials) {
    this.title = title;
    this.date = date;
    this.description = description;
    this.content = content;
    this.socials = socials;
  }
}

/**
	*
	* @param {String} title
	* @param {String} date
	* @param {String} description
	* @param {String} content
	* @param {String} socials
	*
*/
function createNewMember(title, date, description, content, socials) {
	let newMemer = new Data(title, date, description, content, socials);
	let result = {};
	return result = {
		"title": newMemer.title,
		"date": newMemer.date,
		"description": newMemer.description,
		"content": newMemer.content,
		"socials": newMemer.socials
	}
}

/**
	*
	* @param {String} inFile - should be an existing json file 
	* @param {String} title
	* @param {String} date
	* @param {String} description
	* @param {String} content
	* @param {String} socials
	* @doc takes in a json file, create a new post object and appends it to the end of the file
*/
export async function toJson(inFile, title, data, description, content, socials) {
  const rl = readline.createInterface({
    input: fs.createReadStream(inFile),
    crlfDelay: Infinity,
  });
  const lines = [];
  for await (const line of rl) {
    lines.push(line);
  }
  let object = createNewMember(title, data, description, content, socials);
  lines.push(JSON.stringify(object));
  let string = lines.join('') + ',';
  writeFile(inFile, string);
}

/**
	* 
  output.push(createNewMember(title, data, description, content, socials));
  writeFile(inFile, string);
  writeFile(inFile, JSON.stringify(lines));
	* @param {String} inFile
	* @param {String} data - a stringified json object
	* @doc - helper function to write a json object to a file, called from toJson
*/
async function writeFile(inFile, data) {
	  fs.writeFile(inFile, data, { flag: "a+" }, (err) => {
		  	    if (err) throw err;
		  	    console.log("The file has been saved!");
		  	  }
		  	  );
}




