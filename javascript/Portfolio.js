class Portfolio {

    constructor() {
        this.all = [];
        this.totalLike = [];

    }
    
    hydrate(medias) {
        medias.forEach(media => {
            let factory = new MediaFactory(media);
            let medias = factory.build(media);
            this.all.push(medias);
        })
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
                this.all.push(" ");
                let id = e.target.getAttribute("photoid");
                this.currentSlideIndex = this.all.findIndex(media => media.id == id);
                this.showLightbox();
                this.listenForClose();
                this.listenForNext();
                this.listenForPrevious();
            });
        })
    }

    showLightbox() {
        document.getElementById("lightbox--wrapper").style.display = "block";
        console.log(document.getElementById("lightbox--wrapper"));
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
            if (this.currentSlideIndex == this.all.length - 1) {
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
                this.currentSlideIndex = this.all.length - 2;
            }
            let id = this.all[this.currentSlideIndex].id;
            this.showLightbox(id)
        })
    }

    listenForFilter() {
        document.querySelectorAll(".filter").forEach(filter => {
            filter.addEventListener("click", () => {
                let filtre = filter.getAttribute("data-filter");
                let list = [];
                if (filtre == "date") {
                   this.filterForDate();
                   this.swapButton("date");
                } else if (filtre == "titre") {
                    this.filterForTitre();
                } else if (filtre == "populaire") {
                    this.filterForPopularity();
                }
                this.display(list);
            })
        })
    }

    swapButton() {
        
    }

    filterForDate() {
        return this.all.sort(function(a, b) {
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
        return this.all.sort(function(a, b) {
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
        return this.all.sort((a, b) => {
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
}