# MarkdownToHtmlToJson
A workflow plugin for writing blog posts in markdown and transforming those posts to html then to json.
---

# trasnform.js:
- copies json file to memory, takes in output from unified() and greymatter(), creates json object from data then writes to json file.

# fromMdtoHtmltoJson.js
- takes in .md file and pushes through unified() pipline to transform to html then calls transform.js

TODO:
- take in multiple files from a directory adn add to 11ty build process as a build step
