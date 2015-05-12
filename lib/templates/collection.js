/**
 * #{Collection} Collection
 */

#{Collection} = new Meteor.Collection('#{collection}');
#{Collection}.attachSchema(Schema.#{collection});

#{Collection}.helpers({
    toString: function(){
        return this.firstname + " " + this.lastname;
    },
});
