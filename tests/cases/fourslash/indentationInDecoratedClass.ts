/// <reference path="fourslash.ts" />

/////*startFormat*/
////@decorator export class Foo {bar(): void {
////return;
////}
////}
////
////@decorator
////export class Foo {bar(): void {
////return;
////}
////}
////
////export class Foo {bar(): void {
////return;
////}
////}
/////*endFormat*/

// Verify that code formats correctly the first time and does not change when re-formatted.
// See bug #14531
for(let i = 0; i < 2; i++) {
    format.selection("startFormat", "endFormat");

    verify.currentFileContentIs(
        "\n" +
        "@decorator export class Foo {\n" +
        "    bar(): void {\n" +
        "        return;\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "@decorator\n" +
        "export class Foo {\n" +
        "    bar(): void {\n" +
        "        return;\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "export class Foo {\n" +
        "    bar(): void {\n" +
        "        return;\n" +
        "    }\n" +
        "}\n"
    );
}