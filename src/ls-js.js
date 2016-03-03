var fs = require('fs');

function listAsJSON(path) {
  'use strict';
  var result, isDir, files, fullPath, onlyFiles;

  isDir = true;

  try {
    isDir = fs.statSync(path).isDirectory();
  } catch (e) {
    isDir = false;
  }

  if (!path || !isDir) {
    result = {
      "path": path,
      "error": "Path doesn't seem to be valid."
    };
  } else {
    files = [];
    files = fs.readdirSync(path);


    //TODO: this is probably a slow multiple iteration ... look at a better way of doing this / test & time it!
    files.forEach((file, i, arr) => {
      fullPath = path +'/'+ file;
      arr[i] = {
        name: file,
        fullPath : fullPath,
        isDir: fs.statSync(fullPath).isDirectory()
      };
    });

    onlyFiles = [];

    files.forEach((file) => {
      if(!file.isDir){
        onlyFiles.push(file);
        delete file.isDir;
      }
    });

    result = {
      "path": path,
      "files": onlyFiles
    };
  }

  return result;
}

module.exports = listAsJSON;
