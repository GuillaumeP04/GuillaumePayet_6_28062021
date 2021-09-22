class Portfolio {

    constructor() {
        this.all = [];
        this.totalLike = [];
        this.currentSlideIndex;
    }
    
    hydrate(medias) {
        medias.forEach(media => {
            let factory = new MediaFactory(media);
            let medias = factory.build(media);
            this.all.push(medias);
        })
        this.listenForClose();
        this.listenForNext();
        this.listenForPrevious();
    }
    
    display() {
        let html = " ";
        this.all.forEach(media => {
            html += media.render();
            document.getElementById("div--wrapper").innerHTML = html;
        });
    } 

    lightboxListener() {
        document.querySelectorAll("#image--link").forEach(images => {
            images.addEventListener("click", (e) => {
                let id = e.target.getAttribute("photoid");
                this.currentSlideIndex = this.all.findIndex(media => media.id == id);
                this.showLightbox();
            });
        })
    }

    showLightbox() {
        console.log(123);
        console.log(this.all);
        console.log(this.all[this.currentSlideIndex]);
        document.getElementById("lightbox--wrapper").style.display = "block";
        document.getElementById("lightbox--body").innerHTML = this.all[this.currentSlideIndex].renderLightbox();
    }

    listenForClose() {
        document.getElementById("close").addEventListener("click", (e) => {
            document.getElementById("lightbox--wrapper").style.display = "none";

        });
    }

    listenForNext() {
        document.getElementById("next").addEventListener("click", () => {
            this.currentSlideIndex++;
            if (this.currentSlideIndex == this.all.length) {
                this.currentSlideIndex = 0;
            }
            let id = this.all[this.currentSlideIndex].id;
            this.showLightbox(id)

        })
    }

    listenForPrevious() {
        document.getElementById("previous").addEventListener("click", () => {
            this.currentSlideIndex--;
            if (this.currentSlideIndex == -1) {
                this.currentSlideIndex = this.all.length - 1;
            }
            let id = this.all[this.currentSlideIndex].id;
            this.showLightbox(id)
        })
    }

    listenForFilter() {
        document.querySelectorAll(".filter").forEach(filter => {
            filter.addEventListener("click", () => {
                let filtre = filter.getAttribute("data-filter");
                if (filtre == "date") {
                   this.filterForDate();
                } else if (filtre == "titre") {
                    this.filterForTitre();
                } else if (filtre == "populaire") {
                    this.filterForPopularity();
                }
                this.build()
            })
        })
    }

    build() {
        this.display();
        this.lightboxListener();
        this.listenForFilter();
        this.listenForLike();
        this.listenForMainFilter();
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

    filterForPopularity() {
        this.all = this.all.sort((a, b) => {
            return b.likes - a.likes;
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

    resetLikes() {
        let total = 0;
        this.all.forEach(media => {
            total += media.likes;
        })
        document.getElementById("total--like").innerHTML = total;
    }

    displayTotal() {
        this.resetLikes();
    }

    listenForMainFilter() {
        document.querySelectorAll(".photographe--selection").forEach(item => {
            item.addEventListener("click", (e) => {
                // location.href = "/index.html";
                let button = e.target.getAttribute("id");
            })
        })
    }
}