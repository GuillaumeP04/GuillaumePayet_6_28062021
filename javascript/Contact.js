class Contact {
    constructor() {
        this.all = [];
        this.tags = new Set();
        this.allPhotos = [];
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
        let photos = new Photos(medias);
        url = url.replace("?id=", '');
        medias.forEach(media => {
            if (media.photographerId == url) {
                html += photos.renderPhotos(media);
                console.log(123)
            }  
            document.getElementById("div--wrapper").innerHTML = html;
        });
    }
}