export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'organisation',
            title:'Organisation',
            type:'string'
        },
        {
            name:'logo',
            title:'Logo',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'roles',
            title:'Roles',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ]
}