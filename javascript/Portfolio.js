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
                let image = e.target;
                console.log(image);
                image.classList.toggle("lightbox--image");
                document.getElementById("lightbox").style.display = "block";
                document.getElementById("close").addEventListener("click", () => {
                    document.getElementById("lightbox").style.display = "none";
                    image.classList.remove("lightbox--image");                    
                });
                document.getElementById("previous").addEventListener("click", () => {
                    console.log(123)
                })
                document.getElementById("next").addEventListener("click", () => {
                    console.log(456)
                })
            });
        })
    }
    
    listenForLike() {
        document.querySelectorAll(".like").forEach(heart => {
            heart.addEventListener("click", () => {
                this.all.forEach(media => {
                    this.totalLike.push(media.likes);
                    console.log(this.addLikes(media.likes));
                })
            })
        })
    }

    addLikes(likes) {
        let total = 0;
        for(let i = 0; i < likes.length;) { 
            total += likes[i];
        }
        return total;
    }

    listenForFilter() {
        document.querySelectorAll(".filter").forEach(filter => {
            filter.addEventListener("click", () => {
                let filtre = filter.getAttribute("data-filter");
                if (filtre == "date") {
                    let list = this.all.sort(function(a, b) {
                        let dateA = a.date;
                        let dateB = b.date;
                        if (dateA < dateB) {
                             return -1;
                        } 
                        if (dateA > dateB) {
                            return 1
                        }
                     })
                     this.display(list);
                } else if (filtre == "titre") {
                    let list = this.all.sort(function(a, b) {
                       let titleA = a.title;
                       let titleB = b.title;
                       if (titleA < titleB) {
                            return -1;
                       } 
                       if (titleA > titleB) {
                           return 1
                       }
                    })
                    this.display(list);
                } else if (filtre == "populaire") {
                    let list = this.all.sort((a, b) => {
                        return b.likes - a.likes;
                    })
                    this.display(list);
                }
            })
        })
    }
}