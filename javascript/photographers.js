fetch('../data.json').then(response => {
return response.json();
  }).then(data => {
    data.photographers.forEach(photographer => 
    {
      document.getElementById("contact--wrapper").innerHTML += `
      <div id="${photographer.id}">
          <h2 class="photographe--nom">${photographer.name}</h2>
          <p class="photographe--ville">${photographer.city}, ${photographer.country}</p>
          <p class="photographe--texte">${photographer.tagline}</p>
          <div class="selection--wrapper">
              <span class="photographe--selection">#${photographer.tags}</span> 
          </div> 
      </div>
      <div>
          <button id="ouvrir--form" class="contact--form__lien">Contactez-moi</button>
      </div>
      <div>
          <img class="photographe--profil" src="../images/photoID/${photographer.portrait}" alt="">
      </div>
      `;
    });
    console.log(data.medias);
    for (let i = 0; i< data.medias.length; i++) {
      data.medias.forEach(media =>
      {
        document.getElementById("div--wrapper").innerHTML += `
        <div class="image--wrapper" id="${media[i].id}" date="${media[i].date}" price="${media[i].price}">
          <a href=""><img class="photos" src="../images/${photographer.name}/${media[i].image}" alt="${media[i].title}"></a>
          <div class="description--wrapper">
            <p class="description">${media[i].title}</p>
            <a href="">${media[i].likes}<i class="fas fa-heart like"></i></a>
          </div>
        </div>
        `
      })
    } 
  })