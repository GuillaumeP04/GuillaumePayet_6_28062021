class Video extends MediaFactory{

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
                <span class="photographer--like" like="${this.likes}">${this.likes}<i class="fas fa-heart like"></i></span>
            </div>
        </div>`
    }

    renderLightbox() {
        return `
        <div id="lightbox">
            <i class="fas fa-times" id="close"></i>
            <i class="fas fa-chevron-left" id="previous"></i>
            <i class="fas fa-chevron-right" id="next"></i>
            <video width="80%" height="85%" controls>
                <source src="../images/${this.photographerId}/${this.video}" type="video/mp4">
            </video>
            <p id="lightbox--description">${this.title}</p>
        </div>
        `
    }


}