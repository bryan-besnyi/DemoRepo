alert("Hello");
/*
    Simulated CMS Content
*/ const listItems = [
    {
        name: 'Item 1',
        target: '#'
    },
    'Item 2',
    'Item 3'
];
const list = listItems.map((item)=>{
    document.getElementById('list').innerHTML += '<li><a href="#">' + item.name + '</a></li>';
});

//# sourceMappingURL=index.017db2f2.js.map
