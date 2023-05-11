export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'githubLink',
            title:'GitHub Link',
            type:'string'
        },
        {
            name:'linkedinLink',
            title:'Linkedin Link',
            type:'string'
        },
        {
            name:'instagramLink',
            title:'Instagram Link',
            type:'string'
        },
        {
            name:'mail',
            title:'Mail',
            type:'string'
        },
        {
            name:'resumeLink',
            title:'Resume Link',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}