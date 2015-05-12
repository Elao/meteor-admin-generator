Template.#{collection}_new.inheritsHooksFrom('#{collection}_edit');
Template.#{collection}_new.inheritsHelpersFrom('#{collection}_edit');
Template.#{collection}_new.inheritsEventsFrom('#{collection}_edit');

Template.#{collection}_new.helpers({
    breadcrumb: function(){
        var collection_filters = Session.get(this.collection + '_filters');

        return [
            {title: 'Admin', href: Router.path('admin_dashboard')},
            {title: '#{Collection}', href: Router.path('admin_list', {collection: this.collection}) + collection_filters},
            {title: 'New #{collection}', href: false}
        ];
    },
});
