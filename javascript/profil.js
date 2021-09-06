
fetch('../data.json')
.then(response => response.json())
.then(data => {
  let photographerRaw = data.photographers.find(photographe => photographe.id == getId());
  let photographer = new Photographer(photographerRaw);
  photographer.displayProfil();
  photographer.displayModalName();
  photographer.displayDailyPrice();
  
  let portfolio = new Portfolio(photographerRaw);
  portfolio.hydrate(data.medias);
  portfolio.display();
  portfolio.lightboxListener();
  portfolio.listenForLike();
  // portfolio.listenForFilter();
  // portfolio.listenForPopulaire();
  // portfolio.listenForDate();
})

function getId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}