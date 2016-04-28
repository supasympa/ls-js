
var assert = require('chai').assert;

console.log(process.cwd());

describe('testing listAsJSON', function(){
    'use strict';
    var listAsJSON = require(process.cwd() + '/src/ls2json.js');

    describe('executing with no params [listAsJSON()]', function(){
      it('should be okay', function(){
          assert.isOk(listAsJSON());
      });

      it('should return an object', function(){
          assert.isObject(listAsJSON());
      });

      it('should  have an error property', function(){
          assert.isDefined(listAsJSON().error, 'no error returned');
      });
    });

    describe('executing listAsJSON with an invalid directory [listAsJSON(some/invalid/path/)]', function(){
      it('should return a json block with an error node', function(){
        assert.isDefined(listAsJSON('/no/such/path').error);
      });
    });

    describe('executing listAsJSON with a valid directory [listAsJSON(some/valid/path/)] with one file', function(){
      var validPath = process.cwd() + '/tests/stubs/one/';

      it('should return a files array with a matching files length', function(){
        assert.equal(listAsJSON(validPath).files.length, 1);
      });

      it('the first file should have a name = test.md', function(){
        assert.equal(listAsJSON(validPath).files[0].name, 'test.md');
      });

    });

    describe('executing listAsJSON with a valid directory [listAsJSON(some/valid/path/)] with two files', function(){
      var validPath = process.cwd() + '/tests/stubs/two/';

      it('should return a files array with a matching files length', function(){
        assert.equal(listAsJSON(validPath).files.length, 2);
      });
    });

    describe('executing listAsJSON with a valid directory [listAsJSON(some/valid/path/)] with two files and a directory', function(){
      var validPath = process.cwd() + '/tests/stubs/three/';

      it('should return a files array with a matching files length', function(){
        assert.equal(listAsJSON(validPath).files.length, 2);
      });

      it('should not return the directory', function(){
        assert.equal(listAsJSON(validPath).files.length, 2);
      });
    });

});
