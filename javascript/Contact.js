class Contact {
    constructor() {
        this.all = [];
        this.tags = new Set();
        this.allPhotos = [];
        this.allVideos = [];
    }

    hydrate(photographers) {
        photographers.forEach(item => {
            let photographer = new Photographer(item)
            this.all.push(photographer)
            item.tags.forEach(tag => {
                this.tags.add(tag)
            })
        });
    }

    hydratePhotos(medias) {
        medias.forEach(item => {
            let photos = new Photos(item)
            this.allPhotos.push(photos)
            item.tags.forEach(tag => {
                this.tags.add(tag)
            })
        });
    }

    displayProfil() {
        let html = " ";
        let url = window.location.search;
        url = url.replace("?id=", '');
        this.all.forEach(photographer => {
            if (photographer.id == url) {
                html += photographer.renderProfil()
            }
        })
        document.getElementById("contact--wrapper").innerHTML = html;
    }
    
    displayPhotos(medias) {
        let html = " ";
        let url = window.location.search;
        url = url.replace("?id=", '');
        medias.forEach(media => {
            if (media.video && media.photographerId == url) {
                let photos = new Photos(media);
                html += photos.renderVideos(media)
            } 
            if (media.photographerId == url && media.image) {
                let photos = new Photos(media);
                html += photos.renderPhotos(media);
            } 
            document.getElementById("div--wrapper").innerHTML = html;
        });
    }

    // displayVideos (medias) {
    //     let html = " ";
    //     let url = window.location.search;
    //     url = url.replace("?id=", '');
    //     medias.forEach(media => {
    //         let videos = media.video;
    //     })
    //     document.getElementById("div--wrapper").innerHTML = html;
    // }

    likeListener() {
        let hearts = document.querySelectorAll(".like");
        hearts.forEach(heart => {
            heart.addEventListener("click", this.addLike)
        })
    }

    addLike() {
        document.querySelectorAll(".photographer--like").forEach(likes => {
            let numLikes = likes.getAttribute("like");
            numLikes++;
            console.log(numLikes)
        })
    }

    displayModalName() {
        let html = " ";
        let url = window.location.search;
        url = url.replace("?id=", '');
        this.all.forEach(photographer => {
            if (photographer.id == url) {
                html += photographer.renderModalName();
            }
        })
        document.getElementById("modal--contact").innerHTML = html;
    }

    displayDailyPrice() {
        let html = " ";
        let url = window.location.search;
        url = url.replace("?id=", '');
        this.all.forEach(photographer => {
            if (photographer.id == url) {
                html += photographer.renderDailyPrice();
            }
        })
        document.getElementById("like--wrapper").innerHTML = html;
    }
    
}