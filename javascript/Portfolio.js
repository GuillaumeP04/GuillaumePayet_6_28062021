class Portfolio {

    constructor() {
        this.all = [];
        this.totalLike = [];
        this.currentSlideIndex;
    }

    build() {
        this.display();
        this.lightboxListener();
        this.listenForFilter();
        this.listenForLike();
    }

    changeForDate() {
        document.getElementById("populaire").style.display = "none";
        document.getElementById("titre").style.display = "none";
        document.getElementById("date").style.display = "block";
    }

    changeForPopulaire() {
        document.getElementById("populaire").style.display = "block";
        document.getElementById("titre").style.display = "none";
        document.getElementById("date").style.display = "none";
    }

    changeForTitre() {
        document.getElementById("populaire").style.display = "none";
        document.getElementById("titre").style.display = "block";
        document.getElementById("date").style.display = "none";
    }

    display() {
        let html = " ";
        this.all.forEach(media => {
            html += media.render();
            document.getElementById("div--wrapper").innerHTML = html;
        });
    }

    displayTotal() {
        this.resetLikes();
    }

    filterForDate() {
        this.all = this.all.sort(function(a, b) {
            let dateA = a.date;
            let dateB = b.date;
            if (dateA < dateB) {
                 return -1;
            } 
            if (dateA > dateB) {
                return 1
            }
        })
    }

    filterForPopularity() {
        this.all = this.all.sort((a, b) => {
            return b.likes - a.likes;
        })
    }

    filterForTitre() {
        this.all = this.all.sort(function(a, b) {
            let titleA = a.title;
            let titleB = b.title;
            if (titleA < titleB) {
                 return -1;
            } 
            if (titleA > titleB) {
                return 1
            }
        })
    }
    
    hydrate(medias) {
        medias.forEach(media => {
            let factory = new MediaFactory(media);
            let medias = factory.build(media);
            this.all.push(medias);
        })
        // this.lightboxNext();
        // this.lightboxPrevious();
        // this.closeLightbox();
    } 

    lightboxListener() {
        this.listenForKey();
        document.getElementById("close").addEventListener("click", () => {
            this.closeLightbox();
        });
        document.getElementById("next").addEventListener("click", () => {
            this.lightboxNext();
        })
        document.getElementById("previous").addEventListener("click", () => {
            this.lightboxPrevious();
        })
        document.querySelectorAll("#image--link").forEach(images => {
            images.addEventListener("click", (e) => {
                let id = e.target.getAttribute("photoid");
                this.currentSlideIndex = this.all.findIndex(media => media.id == id);
                this.showLightbox();
            });
        })
    }

    listenForKey() {
        document.addEventListener("keydown", (e) => {
           let key = e.which;
           if (key == "27") {
               this.closeLightbox();
           }
           if (key == "39") {
               this.lightboxNext();
           }
           if (key == "37") {
               this.lightboxPrevious();
           }
       })
    }

    closeLightbox() {
        document.getElementById("lightbox--wrapper").style.display = "none";
        document.getElementById("lightbox--wrapper").setAttribute('aria-hidden', 'true')
        document.querySelector("body").setAttribute('aria-hidden', 'false')
    }

    listenForFilter() {
        document.querySelectorAll(".filter").forEach(filter => {
            filter.addEventListener("click", () => {
                let filtre = filter.getAttribute("data-filter");
                if (filtre == "date") {
                    this.filterForDate();
                    this.changeForDate();
                } else if (filtre == "titre") {
                    this.filterForTitre();
                    this.changeForTitre();
                } else if (filtre == "populaire") {
                    this.filterForPopularity();
                    this.changeForPopulaire();
                }
                this.build()
            })
        })
    }

    listenForLike() {
        document.querySelectorAll(".like").forEach(heart => {
            heart.addEventListener("click", () => {
                let id = heart.getAttribute("data-id");
                let media = this.all.find(media => media.id == id);
                media.toggle();

                this.displayTotal();
            })
        })
        this.resetLikes()
    }

    lightboxNext() {
        this.currentSlideIndex++;
        if (this.currentSlideIndex == this.all.length) {
            this.currentSlideIndex = 0;
        }
        let id = this.all[this.currentSlideIndex].id;
        this.showLightbox(id)
    }

    lightboxPrevious() {
        this.currentSlideIndex--;
        if (this.currentSlideIndex == -1) {
            this.currentSlideIndex = this.all.length - 1;
        }
        let id = this.all[this.currentSlideIndex].id;
        this.showLightbox(id)
    }

    resetLikes() {
        let total = 0;
        this.all.forEach(media => {
            total += media.likes;
        })
        document.getElementById("total--like").innerHTML = total;
    }

    showLightbox() {
        document.getElementById("lightbox--wrapper").style.display = "block";
        document.getElementById("lightbox--wrapper").setAttribute('aria-hidden', 'false');
        document.querySelector("body").setAttribute('aria-hidden', 'true')
        document.getElementById("lightbox--body").innerHTML = this.all[this.currentSlideIndex].renderLightbox();
    }
}