class Photographer {

    constructor (data) {
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tags = data.tags;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
        this.alt = data.alt;
    }

    render() { 
        let tags = " ";
        this.tags.forEach(tag => {
            tags += `<a class="photographe--selection" id="${tag}" aria-label="${tag} tag">#${tag}</a>`;
        });
        
        return ` 
        <div class="photographe--wrapper" id="${this.id}">
            <a class="wrapper--link" href="./html/profil.html?id=${this.id}" aria-label="${this.name}">
            <img class="photographe--profil" src="./images/photoID/${this.portrait}" alt="${this.alt}">
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
            tags += `<a href="/index.html?tag=${tag}" class="profil--selection" id="${tag}" aria-label="${tag} Tag">#${tag}</a>`;
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
            <img class="profil--picture" src="../images/photoID/${this.portrait}" alt="" aria-label="${this.name}" alt="${this.alt}">
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
        <em class="fas fa-heart"></em>
        <span id="daily-price">${this.price}€/jour</span>`;
    }
}
export default Photographer;