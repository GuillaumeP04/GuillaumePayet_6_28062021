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
            tags += `<span class="photographe--selection" id="${tag}">#${tag}</span>`
        });
        
        return ` 
        <div class="photographe--wrapper" id="${this.id}">
            <a class="wrapper--link" href="./html/photographers.html"><img class="photographe--profil" src="./images/photoID/${this.portrait}" alt=""></a>
            <a class="wrapper--link" href="./html/photographers.html"><h2 class="photographe--nom">${this.name}</h2></a>
            <p class="photographe--ville">${this.city}, ${this.country}</p>
            <p class="photographe--texte">${this.tagline}</p>
            <p class="photographe--prix">${this.price}€/jour</p>
            <div id="selection--wrapper">
             ${tags}
            </div>
        </div> `;
    }
}