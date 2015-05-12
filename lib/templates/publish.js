/**
 * #{Collection} publications for elao:meteor-admin
 */

// list
Meteor.publish('#{collection}_list', function () {
    return [
        #{Collection}.find(),
    ];
});

// new
Meteor.publish('#{collection}_new', function () {
    return [];
});

// edit
Meteor.publish('#{collection}_edit', function (id) {
    return [
        #{Collection}.find({_id: id})
    ];
});
