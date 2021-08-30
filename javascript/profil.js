
fetch('../data.json')
.then(response => response.json())
.then(data => {
  let portfolio = new Portfolio();
  // data.photographers.forEach(photographer => {
  //   let photographerId = photographer.find(({id}) => id === findUrl);
  //   console.log(photographerId)
  // });
  // console.log(data.photographers.find(findUrl(data.photographers)));

  portfolio.hydrate(data.photographers);
  // portfolio.hydratePhotos(data.medias);
  portfolio.displayProfil();
  portfolio.displayPhotos(data.medias);
  portfolio.listenForLike();
  portfolio.displayModalName();
  portfolio.displayDailyPrice();
  portfolio.lightboxListener();
  portfolio.trieListener();
})

function findUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const element = urlParams.get('id');
  return element;
}