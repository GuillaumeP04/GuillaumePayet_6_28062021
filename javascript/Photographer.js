class Photographer {

    constructor (data) {
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tags = data.tags;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait
    }

    render() { 
        let tags = " ";
        this.tags.forEach(tag => {
            tags += `<span class="photographe--selection" id="${tag}" aria-label="${tag} Tag">#${tag}</span>`
        });
        
        return ` 
        <div class="photographe--wrapper" id="${this.id}">
            <a class="wrapper--link" href="./html/profil.html?id=${this.id}" aria-label="${this.name}"">
            <img class="photographe--profil" src="./images/photoID/${this.portrait}" alt="">
            </a>
            <h2 class="photographe--nom">${this.name}</h2>
            <p class="photographe--ville">${this.city}, ${this.country}</p>
            <p class="photographe--texte">${this.tagline}</p>
            <p class="photographe--prix">${this.price}€/jour</p>
            <div id="selection--wrapper">${tags}</div>
        </div> `;
    }

    displayProfil() {
        let tags = " ";
        this.tags.forEach(tag => {
            tags += `<span class="profil--selection" id="${tag}" aria-label="${tag} Tag">#${tag}</span>`
        });

        document.getElementById("contact--wrapper").innerHTML = `
          <div>
            <h1 class="profil--nom">${this.name}</h1>
            <p class="profil--ville">${this.city}, ${this.country}</p>
            <p class="profil--texte">${this.tagline}</p>
            <div id="selection--wrapper">${tags}</div> 
          </div>
          <div>
            <button id="ouvir--form" class="contact--form__lien" onclick="ouvrirForm()" aria-label="Contactez-moi">Contactez-moi</button>
          </div>
          <div>
            <img class="profil--picture" src="../images/photoID/${this.portrait}" alt="" aria-label="${this.name}"">
          </div> `;
    }

    displayModalName() {
        document.getElementById("modal--contact").innerHTML = `
        <p>Contactez-moi</p>
        <p>${this.name}</p>`;
    }

    displayDailyPrice() {
        document.getElementById("like--wrapper").innerHTML = `
        <span id="total--like"></span>
        <i class="fas fa-heart"></i>
        <span id="daily-price">${this.price}€/jour</span>`;
    }
}