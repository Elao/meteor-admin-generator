# elao-meteor-admin-generator

This is a NodeJs tool package for `elao:meteor-admin` MeteorJs package.

It generate scaffolding for :
- server admin **Publications**
- client admin **Templates** *(list, edit, new)*
- package **Collection** *(SimpleSchema + Collection)*

## Installation
```sh
$ git clone https://github.com/Elao/meteor-admin-generator.git
$ cd meteor-admin-generator
$ npm install -g
```
You can now use `elao-mag` *(for elao-meteor-admin-generator)* command line tool.

## Usage
In your MeteorJs project *(`$ cd my-meteor-project`)* :
```sh
$ elao-mag things
Generate scaffolding for : things
+ server/admin/publish/things.js
+ client/admin/collections/things/list.html
+ client/admin/collections/things/list.js
+ client/admin/collections/things/edit.html
+ client/admin/collections/things/edit.js
+ client/admin/collections/things/new.html
+ client/admin/collections/things/new.js
+ packages/collections/collections/schemas/things.js
+ packages/collections/collections/things.js
... done !
```
This command generate **Schema**, **Collection**, **Publications** and **Templates** for **things**.

**You can now edit this files at your convenience.**
