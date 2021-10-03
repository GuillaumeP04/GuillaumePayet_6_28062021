
fetch('../data.json')
.then(response => response.json())
.then(data => {
  let list = new List();

  list.hydrate(data.photographers);
  list.displayPhotographers(list.all);
  list.displayTags();
  list.listenForFiltering();
  list.build();
  list.profilTagsFilter();
})

// function getTag() {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get('tag');
// }

