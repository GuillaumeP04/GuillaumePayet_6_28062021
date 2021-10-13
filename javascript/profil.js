import Photographer from "./Photographer.js";
import Portfolio from "./Portfolio.js";

fetch("../data.json")
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
  portfolio.build();
  portfolio.lightboxNavListener();
});

function getId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}