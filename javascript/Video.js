class Video extends Media {

    constructor(data) {
        super(data);
        this.video = data.video;
    }

    render() {
        return `
        <div class="image--wrapper">
            <a class="image--link" href="#" date="${this.date}" price="${this.price}" photoid="${this.id}" title="${this.title}">
                <video width="350" height="250" poster class="image--link videos" alt="${this.alt}" photoid="${this.id}">
                    <source src="../images/${this.photographerId}/${this.video}" type="video/mp4">
                </video>
            </a>
            <div class="description--wrapper">
                <p class="description">${this.title}</p>
                <span aria-label="Likes">
                    <span class="photographer--like" data-id="${this.id}">${this.likes}</span>
                    <a href="#" class="fas fa-heart like" data-id="${this.id}"></a>
                </span>
            </div>
        </div>`
    }

    renderLightbox() {
        return `
        <div id="lightbox">
            <video width="80%" height="85%" controls id="lightbox--video" alt="${this.alt}">
                <source src="../images/${this.photographerId}/${this.video}" type="video/mp4">
            </video>
            <p id="lightbox--description">${this.title}</p>
        </div>
        `
    }


}