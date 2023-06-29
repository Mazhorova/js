var model = [
    { type: 'tittle', value: 'hello js' },
    { type: 'text', value: 'here is go' },
    { type: 'columns', value: [
            '111111',
            '222222',
            '333333',
        ] }
];
var site = document.querySelector(selectors, '#site');
model.forEach(function (block) {
    var html = '';
    if (block.type === 'tittle') {
        html = "\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <h1>" + block.value + "</h1>\n      </div>\n    </div>";
    }
    else if (block.type === 'text') {
        html = "\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        <p>" + block.value + "</p>\n  </div>\n </div>";
    }
    else if (block.type === 'columns') {
    }
    site.insertAdjacentHTML(where, 'beforeend', html);
});
