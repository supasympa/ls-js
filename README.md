ls-js
=====

List files in a directory to a JSON object or JSON string.

From Node
---------

    var listAsJSON = require('ls-js.js');

    console.log(listAsJSON(/some/valid/path));


    /* returns


    { path: '/Users/Foo/ls-js',
      files:
       [ { name: '.gitignore',
           fullPath: '/Users/Foo/ls-js/.gitignore' },
         { name: '.jshintrc',
           fullPath: '/Users/Foo/ls-js/.jshintrc' },
         { name: 'LICENSE',
           fullPath: '/Users/Foo/ls-js/LICENSE' },
         { name: 'README.md',
           fullPath: '/Users/Foo/ls-js/README.md' },
         { name: 'package.json',
           fullPath: '/Users/Foo/ls-js/package.json' } ] }

    */


Command line usage
------------------

    Usage: ls-js [options]

    Options:

    -h, --help        output usage information
    -V, --version     output the version number
    -d, --dir <path>  specify the directory you want to list
    -j, --json        return a pretty json object rather than a string

  Examples:

As a string:

    $ src/ls-js .
    '{"path":"/Users/Foo/ls-js","files":[{"name":".gitignore","fullPath":"/Users/Foo/ls-js/.gitignore"},{"name":".jshintrc","fullPath":"/Users/Foo/ls-js/.jshintrc"},{"name":"LICENSE","fullPath":"/Users/Foo/ls-js/LICENSE"},{"name":"README.md","fullPath":"/Users/Foo/ls-js/README.md"},{"name":"package.json","fullPath":"/Users/Foo/ls-js/package.json"}]}'

As an object:

    $ src/ls-js . -j

    { path: '/Users/Foo/ls-js',
      files:
       [ { name: '.gitignore',
           fullPath: '/Users/Foo/ls-js/.gitignore' },
         { name: '.jshintrc',
           fullPath: '/Users/Foo/ls-js/.jshintrc' },
         { name: 'LICENSE',
           fullPath: '/Users/Foo/ls-js/LICENSE' },
         { name: 'README.md',
           fullPath: '/Users/Foo/ls-js/README.md' },
         { name: 'package.json',
           fullPath: '/Users/Foo/ls-js/package.json' } ] }

<!-- -->
