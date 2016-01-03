'use strict';

var extract = require( 'extract-zip' );


extract( __dirname + '/electron-v0.36.2-darwin-x64.zip', { dir : __dirname + '/dist' }, function( error ) {
  console.log( 'Calling with error :' + error );
} );
