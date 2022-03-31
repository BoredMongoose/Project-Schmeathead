export default {
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        }
        ,
        {
            name: 'about',
            title: 'About',
            type: 'string'
        },
        {
            name: 'Destination',
            title: 'Destination',
            type: 'url',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string',
            options: {
                hotspot: true
            }
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
        {
            name: 'userId',
            title: 'UserID',
            type: 'string'
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy'
        },
        {
            name: 'save',
            title: 'Save',
            type: 'array',
            of: [{type:'save'}]
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'array',
            of: [{type:'comment'}]
        },
    ]
}