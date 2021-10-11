class Image extends Media {

    constructor(data) {
        super(data);
        this.image = data.image;
    }

    render() {
        return `
        <a href="#" class="image--wrapper" date="${this.date}" price="${this.price}" title="${this.title}" photoid="${this.id}" aria-label="${this.title} vue rapprochée">
            <img class="photos image--link " src="../images/${this.photographerId}/${this.image}" alt="${this.title}" photoid="${this.id}">
            <div class="description--wrapper">
                <p class="description" title ="${this.title}">${this.title}</p>
                <span aria-label="Likes">
                    <span class="photographer--like" data-id="${this.id}">${this.likes}</span>
                    <em class="fas fa-heart like" data-id="${this.id}"></em>
                </span>
            </div>
        </a>`
    }

    renderLightbox() {
        return `
        <div id="lightbox">
            <img id="lightbox--image" class="photos" src="../images/${this.photographerId}/${this.image}" alt="${this.title}" photoId="${this.id}" aria-label="${this.title}">
            <p id="lightbox--description">${this.title}</p>
        </div>
        `
    }
}