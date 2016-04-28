[![Build Status](https://travis-ci.org/supasympa/ls-js.svg?branch=master)](https://travis-ci.org/supasympa/ls-js)

[![Codacy Badge](https://api.codacy.com/project/badge/grade/1ae9c2038ca7427bbacc03f457b77ec2)](https://www.codacy.com/app/lewis-barclay/ls2json)

ls2json
=====

List files in a directory to JSON string or as a JS object.

From Node
---------

    var listAsJSON = require('ls2json');

    console.log(listAsJSON(/some/valid/path));


    /* returns


    { path: '/Users/Foo/ls2json',
      files:
       [ { name: '.gitignore',
           fullPath: '/Users/Foo/ls2json/.gitignore' },
         { name: '.jshintrc',
           fullPath: '/Users/Foo/ls2json/.jshintrc' },
         { name: 'LICENSE',
           fullPath: '/Users/Foo/ls2json/LICENSE' },
         { name: 'README.md',
           fullPath: '/Users/Foo/ls2json/README.md' },
         { name: 'package.json',
           fullPath: '/Users/Foo/ls2json/package.json' } ] }

    */


Command line usage
------------------

    Usage: ls2json [options]

    Options:

    -h, --help        output usage information
    -V, --version     output the version number
    -d, --dir <path>  specify the directory you want to list
    -j, --json        return a pretty js object rather than a string

  Examples:

As a string:

    $ ls2json .
    '{"path":"/Users/Foo/ls2json","files":[{"name":".gitignore","fullPath":"/Users/Foo/ls2json/.gitignore"},{"name":".jshintrc","fullPath":"/Users/Foo/ls2json/.jshintrc"},{"name":"LICENSE","fullPath":"/Users/Foo/ls2json/LICENSE"},{"name":"README.md","fullPath":"/Users/Foo/ls2json/README.md"},{"name":"package.json","fullPath":"/Users/Foo/ls2json/package.json"}]}'

As an object:

    $ ls2json . -j

    { path: '/Users/Foo/ls2json',
      files:
       [ { name: '.gitignore',
           fullPath: '/Users/Foo/ls2json/.gitignore' },
         { name: '.jshintrc',
           fullPath: '/Users/Foo/ls2json/.jshintrc' },
         { name: 'LICENSE',
           fullPath: '/Users/Foo/ls2json/LICENSE' },
         { name: 'README.md',
           fullPath: '/Users/Foo/ls2json/README.md' },
         { name: 'package.json',
           fullPath: '/Users/Foo/ls2json/package.json' } ] }

<!-- -->
