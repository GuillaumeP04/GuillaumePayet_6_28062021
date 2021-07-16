fetch('../data.json').then(response => {
return response.json();
  }).then(data => {
    data.photographers.forEach(photographer => 
    {
      document.getElementById("main--wrapper").innerHTML += `
      <div class="photographe--wrapper portrait events travel animals">
        <a class="wrapper--link" href="./html/photographers.html"><img class="photographe--profil" src="./images/photoID/${photographer.portrait}" alt=""></a>
        <a class="wrapper--link" href="./html/photographers.html"><h2 class="photographe--nom">${photographer.name}</h2></a>
        <p class="photographe--ville">${photographer.city}, ${photographer.country}</p>
        <p class="photographe--texte">${photographer.tagline}</p>
        <p class="photographe--prix">${photographer.price}€/jour</p>
        <div class="selection--wrapper">
          <span class="photographe--selection">#${photographer.tags[0]}</span>
          <span class="photographe--selection">#${photographer.tags[1]}</span>
          <span class="photographe--selection">#${photographer.tags[2]}</span>
          <span class="photographe--selection">#${photographer.tags[3]}</span>
        </div>
      </div> 
      `;
      // for (let i = 0; i < ; i++) {
      //   document.getElementById("selection--wrapper").innerHTML += `
      //   <span class="photographe--selection">#${photographer.tags[i]}</span>
      //   `
      // }
    });
    
  })
  // .then(data => {
  //   console.log(data.photographers);
  //   data.photographers.forEach(function(el)
  //   {
  //     document.getElementsByClassName("selection--wrapper").innerHTML += 
  //     `
  //     <span class="photographe--selection">#${photographer.tags.el}</span>
  //     `
  //   });
  // })

function showTags(el) {
  for (let i = 0; i < el.length; i++) {
    
  }
}

// document.getElementsByClassName("selection--wrapper").innerHTML += 
//     `
    // <span class="photographe--selection">#${photographer.tags}</span>
//     `