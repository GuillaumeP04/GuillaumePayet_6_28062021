class Portfolio {

    constructor() {
        this.all = [];
        this.likes = new Set();
        this.photoId = new Set();
        this.imageLightbox = new Set();
    }

    hydrate(medias) {
        medias.forEach(media => {
            this.all.push(media);
        });
    }
    
    display() {
        let html = " ";
        this.all.forEach(media => {
            if (media.image && media.photographerId == getId()) {
                let image = new Image(media);
                html += image.render(media);
            } 
            if (media.video && media.photographerId == getId()) {
                let video = new Video(media);
                html += video.render(media);
            } 
            document.getElementById("div--wrapper").innerHTML = html;
        });
    }

    // displayLightbox() {
    //     document.getElementById("lightbox--wrapper").style.display = "block";
    // }
    
    
    lightboxListener() {
        let html = " ";
        document.querySelectorAll("#image--link").forEach(images => {
            images.addEventListener("click", (e) => {
                let image = e.target;
                console.log(image);
                image.classList.toggle("lightbox--image");
                document.getElementById("lightbox").style.display = "block";
            });
        })
    }

    disableLightbox() {
        document.getElementById("close").addEventListener("click", () => {
            document.getElementById("lightbox").style.display = "none";
        });
    }
    
    listenForLike() {
        document.querySelectorAll(".like").forEach(heart => {
            heart.addEventListener("click", () => {
                let parent = heart.closest(".photographer--like");
                let like = parent.getAttribute("like");
                if (this.likes.size % 2 == 0) {
                    like++;
                } else {
                    like--;
                }
                this.likes.add(like);
                console.log(this.likes.size);
                parent.innerHTML = like + `<i class="fas fa-heart like"></i>`;
            })
        })
    }

    listenForFilter() {
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

    listenForPopulaire() {
        let pop = document.getElementById("pop");
        let images = document.querySelectorAll(".image--wrapper");
    }
    
    listenForDate() {
        document.getElementById("date").addEventListener('click', () => {
            document.querySelectorAll(".image--wrapper").forEach(image => {
                let date = image.getAttribute("date");
                console.log(date);
            }) 
        })
    }

    listenForTitle() {
        document.getElementById("titre").addEventListener('click', () => {
            document.querySelectorAll(".image--wrapper").forEach(image => {
                let title = image.getAttribute("title");
                console.log(title)
            })
        })
    }
}