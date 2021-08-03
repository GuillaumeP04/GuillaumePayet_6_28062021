let tagList = new Set();
let list = new List();

fetch('../data.json')
.then(response => response.json())
.then(data => {
  list.hydrate(data.photographers);
  list.displayPhotographer(data.photographers);
  list.displayTags();
})

