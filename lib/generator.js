var
    fs = require('fs-extra'),
    changeCase = require('change-case'),
    prompt = require('sync-prompt').prompt
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

/**
 * Generate file (on path) based on tpl and collection
 * But ask to overwrite if file already exists
 */
var generateButAskToOverwrite = function(path, tpl, collection){
    if (fs.existsSync(path)) {
        var answer = prompt('\nOverwrite ' + path +' ? [yes]/no:');
        if(answer === "" || answer === "yes") {
            generate(path, tpl, collection);
        }
    } else {
        // default behavior
        generate(path, tpl, collection);
    }
};

// publish
generateButAskToOverwrite('server/admin/publish/' + collection + '.js', __dirname + '/templates/publish.js', collection);
// list
generateButAskToOverwrite('client/admin/collections/' + collection + '/list.html', __dirname + '/templates/list.html', collection);
generateButAskToOverwrite('client/admin/collections/' + collection + '/list.js', __dirname + '/templates/list.js', collection);
// edit
generateButAskToOverwrite('client/admin/collections/' + collection + '/edit.html', __dirname + '/templates/edit.html', collection);
generateButAskToOverwrite('client/admin/collections/' + collection + '/edit.js', __dirname + '/templates/edit.js', collection);
// new
generateButAskToOverwrite('client/admin/collections/' + collection + '/new.html', __dirname + '/templates/new.html', collection);
generateButAskToOverwrite('client/admin/collections/' + collection + '/new.js', __dirname + '/templates/new.js', collection);
// schema + collection
generateButAskToOverwrite('packages/collections/collections/schemas/' + collection + '.js', __dirname + '/templates/collection_schema.js', collection);
generateButAskToOverwrite('packages/collections/collections/' + collection + '.js', __dirname + '/templates/collection.js', collection);

console.log('... done !');
