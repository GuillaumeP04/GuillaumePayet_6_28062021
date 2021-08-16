let tagList = new Set();
let list = new List();
let photographerList = new Set();
fetch('../data.json')
.then(response => response.json())
.then(data => {
  list.hydrate(data.photographers);
  list.displayPhotographer();
  list.displayTags();
  list.displayFilter();
  
})

