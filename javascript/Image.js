class Image extends MediaFactory{

    constructor(data) {
        super(data);
        this.image = data.image;
    }

    render() {
        return `
        <div class="image--wrapper" date="${this.date}" price="${this.price}" title="${this.title}">
            <img id="image--link" class="photos" src="../images/${this.photographerId}/${this.image}" alt="${this.title}" photoId="${this.id}">
            <div class="description--wrapper">
                <p class="description" title ="${this.title}">${this.title}</p>
                <span class="photographer--like" like="${this.likes}">${this.likes}<i class="fas fa-heart like" like="${this.likes}"></i></span>
            </div>
        </div>`
    }

    renderLightbox() {
        return `
        <div id="lightbox">
            <i class="fas fa-times" id="close"></i>
            <i class="fas fa-chevron-left" id="previous"></i>
            <i class="fas fa-chevron-right" id="next"></i>
            <img id="lightbox--image" class="photos" src="../images/${this.photographerId}/${this.image}" alt="${this.title}" photoId="${this.id}">
            <p id="lightbox--description">${this.title}</p>
        </div>
        `
    }
}