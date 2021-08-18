class Photos {

    constructor (data) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.image = data.image;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
    }

    renderPhotos() {
        return `
        <div class="image--wrapper" date="${this.date}" price="${this.price}" id="${this.id}">
            <a href=""><img class="photos" src="../images/${this.photographerId}/${this.image}" alt="${this.title}"></a>
            <div class="description--wrapper">
                <p class="description">${this.title}</p>
                ${this.likes}<i class="fas fa-heart like"></i>
            </div>
        </div>`
    }
}