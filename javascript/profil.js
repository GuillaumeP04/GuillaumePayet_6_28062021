
fetch('../data.json')
.then(response => response.json())
.then(data => {
  let contact = new Contact();

  contact.hydrate(data.photographers);
  contact.hydratePhotos(data.medias);
  contact.displayProfil();
  contact.displayPhotos(data.medias);
})


