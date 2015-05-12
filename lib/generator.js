var
    fs = require('fs-extra'),
    changeCase = require('change-case')
;

var collection = changeCase.snakeCase(process.argv.slice(2)[0]);

console.log('Generate scaffolding for : ' + collection);

/**
 * Generate file (on path) based on tpl and collection
 */
var generate = function(path, tpl, collection){
    try {
        tpl = fs.readFileSync(tpl, {encoding: 'utf8'});
        tpl = tpl
            .replace(/\#{collection}/g, collection)
            .replace(/\#{Collection}/g, changeCase.pascalCase(collection));

        var ws = fs.createOutputStream(path);
        ws.write(tpl);

        console.log('+ ' + path);
    } catch(e) {
        console.log('Error : ' + e);
    }
};


// publish
generate('server/admin/publish/' + collection + '.js', __dirname + '/templates/publish.js', collection);
// list
generate('client/admin/collections/' + collection + '/list.html', __dirname + '/templates/list.html', collection);
generate('client/admin/collections/' + collection + '/list.js', __dirname + '/templates/list.js', collection);
// edit
generate('client/admin/collections/' + collection + '/edit.html', __dirname + '/templates/edit.html', collection);
generate('client/admin/collections/' + collection + '/edit.js', __dirname + '/templates/edit.js', collection);
// new
generate('client/admin/collections/' + collection + '/new.html', __dirname + '/templates/new.html', collection);
generate('client/admin/collections/' + collection + '/new.js', __dirname + '/templates/new.js', collection);

console.log('... done !');
