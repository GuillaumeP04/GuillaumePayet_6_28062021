class Video extends Media {

    constructor(data) {
        super(data);
        this.video = data.video;
    }

    render() {
        return `
        <div class="image--wrapper" date="${this.date}" price="${this.price}" photoId="${this.id}" title="${this.title}">
            <video width="350" height="250" controls>
                <source src="../images/${this.photographerId}/${this.video}" type="video/mp4">
            </video>
            <div class="description--wrapper">
                <p class="description">${this.title}</p>
                <span>
                    <span class="photographer--like" data-id="${this.id}">${this.likes}</span>
                    <i class="fas fa-heart like" data-id="${this.id}"></i>
                </span>
            </div>
        </div>`
    }

    renderLightbox() {
        return `
        <div id="lightbox">
            <video width="80%" height="85%" controls id="lightbox--video">
                <source src="../images/${this.photographerId}/${this.video}" type="video/mp4">
            </video>
            <p id="lightbox--description">${this.title}</p>
        </div>
        `
    }


}