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

    displayLightbox() {
        let lightbox = document.getElementById("lightbox");
        lightbox.style.display = "block";
    }
    
    disableLightbox() {
        document.getElementById("lightbox").style.display = "none";
    }
    
    lightboxListener() {
        document.getElementById("close").addEventListener("click", this.disableLightbox)
        document.querySelectorAll("#image--link").forEach(image => {
            image.addEventListener("click", this.displayLightbox)
        })
    }
    
    likeListener() {
        let hearts = document.querySelectorAll(".like");
        let numLikes = document.querySelectorAll(".photographer--like")
        hearts.forEach(heart => {
            heart.addEventListener("click", function () {
                numLikes.forEach(num => {
                    num = num.getAttribute("like");
                    num++; 
                    console.log(num)
                })
            })
        })
    }

    trieListener() {
        let pop = document.getElementById("pop");
        let date = document.getElementById("date");
        let titre = document.getElementById("titre");
        let up = document.getElementById("select--up");
        let down = document.getElementById("select--down");
        pop.onclick = function() {
            pop.style.display = "block"
            date.style.display = "block"
            titre.style.display = "block"
            down.style.display = "none"
            up.style.display = "block"
        }
        down.onclick = function() {
            pop.style.display = "block"
            date.style.display = "block"
            titre.style.display = "block"
            down.style.display = "none"
            up.style.display = "block"
        }
        date.onclick = function() {
            titre.style.display = "none"
            pop.style.display = "none"
            up.style.display = "none"
            down.style.display = "block"
        }
        titre.onclick = function() {
            pop.style.display = "none"
            date.style.display = "none"
            up.style.display = "none"
            down.style.display = "block"
        }
    }
}