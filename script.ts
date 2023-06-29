const model = [
  {type: 'tittle', value: 'hello js'},

  {type: 'text', value: 'here is go'},
  {type: 'columns', value: [
 '111111',
 '222222',
 '333333',
  ]}
]
const site = document.querySelector(selectors: '#site') 
model.forEach(block => {
  let html = ''
  if (block.type === 'tittle') {
    html = `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>`
  } else if (block.type === 'text') 
  {
    html = `
    <div class="row">
      <div class="col-sm">
        <p>${block.value}</p>
  </div>
 </div>`
  } else if (block.type === 'columns') {

  }
  
  site.insertAdjacentHTML(where: 'beforeend',html) 
})