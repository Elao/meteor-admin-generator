/**
 * #{Collection} SimpleSchema
 */
Schema = Schema || {};

Schema.#{collection} = new SimpleSchema({
    firstname: {
        type: String,
        label: "Firstname",
        max: 149
    },
    lastname: {
        type: String,
        label: "Lastname",
        max: 149
    },
});
