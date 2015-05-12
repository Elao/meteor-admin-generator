Template.#{collection}_edit.inheritsHooksFrom('collections_edit');
Template.#{collection}_edit.inheritsHelpersFrom('collections_edit');
Template.#{collection}_edit.inheritsEventsFrom('collections_edit');

Template.#{collection}_edit.hooks({
    rendered: function(){
    }
});

Template.#{collection}_edit.helpers({
    doc: function(){
        return #{Collection}.findOne({_id: this.id}) || {};
    },
    breadcrumb: function(){
        var item = #{Collection}.findOne({_id: this.id}) || {};
        var collection_filters = Session.get(this.collection + '_filters');

        return [
            {title: 'Admin', href: Router.path('admin_dashboard')},
            {title: '#{Collection}', href: Router.path('admin_list', {collection: this.collection}) + collection_filters},
            {title: item, href: false}
        ];
    },
});
