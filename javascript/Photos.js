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
        this.video = data.video;
    }

    renderPhotos() {
        return `
        <div class="image--wrapper" date="${this.date}" price="${this.price}" id="${this.id}">
            <img id="image--link" class="photos" src="../images/${this.photographerId}/${this.image}" alt="${this.title}">
            <div class="description--wrapper">
                <p class="description">${this.title}</p>
                <span class="photographer--like" like="${this.likes}">${this.likes}<i class="fas fa-heart like" like="${this.likes}"></i></span>
            </div>
        </div>`
    }

    renderVideos() {
        return `
        <div class="image--wrapper" date="${this.date}" price="${this.price}" photoId="${this.id}">
            <video width="350" height="250" controls>
                <source src="../images/${this.photographerId}/${this.video}" type="video/mp4">
            </video>
            <div class="description--wrapper">
                <p class="description">${this.title}</p>
                <span class="photographer--like" like="${this.likes}">${this.likes}<i class="fas fa-heart like" id=""></i></span>
            </div>
        </div>`
    }
}