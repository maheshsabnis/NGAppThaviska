// the jest testing enviroment configuration
// import jest-preset-angular
// configure the headless JSDOM env. to run tests inside
// the global window object by mocking it

import 'jest-preset-angular';

Object.defineProperty(window, 'CSS', {value: null});

// the doctype for html document to be loaded in memory while testing
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});
// iterate over the DOM with all dynamic changes
Object.defineProperty(document.body.style, 'trasform' , {
   value: () => {
     return {
       enumerable: true,
       configurable: true
     };
   }
});
