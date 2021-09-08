
fetch('../data.json')
.then(response => response.json())
.then(data => {
  let photographerRaw = data.photographers.find(photographe => photographe.id == getId());
  let photographer = new Photographer(photographerRaw);
  photographer.displayProfil();
  photographer.displayModalName();
  photographer.displayDailyPrice();

  let portfolio = new Portfolio(photographerRaw);
  let medias = data.medias.filter(media => media.photographerId == getId());
  portfolio.hydrate(medias);
  portfolio.display();
  portfolio.listenForLike();
  portfolio.lightboxListener();
  portfolio.listenForFilter();
})

function getId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}