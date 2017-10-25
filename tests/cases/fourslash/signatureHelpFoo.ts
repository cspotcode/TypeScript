/// <reference path='fourslash.ts'/>

// @checkJs: true
// @allowJs: true

// @Filename: main.js
////function someOptional(x, y) { arguments; }
////someOptional(/*2*/);

goTo.marker('2');
verify.currentSignatureHelpIs('someOptional(x: any, y: any, ...args: any[]): void');

