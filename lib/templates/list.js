Template.#{collection}_list.inheritsHooksFrom('collections_list');
Template.#{collection}_list.inheritsHelpersFrom('collections_list');
Template.#{collection}_list.inheritsEventsFrom('collections_list');

Template.#{collection}_list.helpers({
    items: function(){
        // filters
        var filters = [];
        var queryObject = Router.current().location.get().queryObject;

        if (queryObject.text !== undefined && queryObject.text !== '') {
            filters.push({$or: [
                {title: { $regex: queryObject.text, $options: 'i' }},
                {summary: { $regex: queryObject.text, $options: 'i' }}
            ]});
        }

        filters = filters.length ? {$and: filters} : {};

        return #{Collection}.find(filters);
    },
    breadcrumb: function(){
        return [
            {href: Router.path('admin_dashboard'), title: 'Admin'},
            {href: false, title: '#{Collection}'},
        ];
    },
});

Template.#{collection}_filters.inheritsHooksFrom('collections_filters');
Template.#{collection}_filters.inheritsHelpersFrom('collections_filters');
Template.#{collection}_filters.inheritsEventsFrom('collections_filters');

Template.#{collection}_filters.helpers({
    schema: function(){
        return new SimpleSchema({
            text: {
                type: String,
                label: "Title or summary",
                max: 149
            },
        });
    },
    doc: function(){
        return Router.current().location.get().queryObject;
    }
});
