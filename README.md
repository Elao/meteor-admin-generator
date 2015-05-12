# elao-meteor-admin-generator

This is a NodeJs tool package for `elao:meteor-admin` MeteorJs package.

It generate scaffolding for :
- server admin **Publication**
- client admin **Template** *(list, edit, new)*

## Installation
```sh
$ git clone https://**
$ cd **
$ npm install -g
```
You can now use `elao-mag` *(for elao-meteor-admin-generator)* command line tool.

## Usage :
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
... done !

```
This command generate **Publications** and **Templates** for **things**.

**You can now edit this files at your convenience.**
