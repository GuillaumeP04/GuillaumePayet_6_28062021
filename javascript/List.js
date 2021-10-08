class List {
    constructor () {
        this.all = [];
        this.tags = new Set();
        this.tagSelected = new Set();
    }

    addFilter(button) {
        let tag = button.getAttribute("id");
        button.classList.add("nav--bar__active");
        this.tagSelected.add(tag);
    }

    build() {
        this.filterTags();
        this.listenForButton();
    }
    
    displayPhotographers(list) {
        let html = " ";
        list.forEach(photographer => {
            html += photographer.render();
        })
        document.getElementById("main--wrapper").innerHTML = html;
    }

    displayTags() {
        let htmlNavBar = " ";
        this.tags.forEach(tags => {
            htmlNavBar += `<a class="nav--bar" id="${tags}" aria-label="${tags} Tag">#${tags}</a>`
        })
        document.getElementById("tags").innerHTML = htmlNavBar;
    }

    filter() {
        let list = this.all;
        if (this.tagSelected.size == 0) {
            this.displayPhotographers(list)
            return true;
        }
        list = this.all.filter(photographe => {
            let keep = false; 
            this.tagSelected.forEach(tag => {
                if (photographe.tags.includes(tag)) {
                    keep =  true;
                } else {
                    keep = false;
                }
            })
            return keep;
        })
        this.displayPhotographers(list)
        this.build();
    }

    filterProfilTags() {
        const urlParams = new URLSearchParams(window.location.search);
        let tag = urlParams.get('tag');
        let buttonNav = document.querySelector(`.nav--bar[id="${tag}"]`)
        if (tag) {
            this.addFilter(buttonNav);
        }
        this.filter();
        this.build();
    }

    filterTags() {
        document.querySelectorAll(".photographe--selection").forEach(button => {
            button.addEventListener("click", () => {
                console.log(123)
                let tag = button.getAttribute("id");
                let buttonNav = document.querySelector(`.nav--bar[id="${tag}"]`)
                if (this.tagSelected.has(tag)) {
                    this.removeFilter(buttonNav);
                } else { 
                    this.addFilter(buttonNav);
                }
                this.filter();
            })
        })
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

    listenForButton() {
        window.onscroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.getElementById("nav--content").style.display = "block";
                
            } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
                document.getElementById("nav--content").style.display = "none";
            }
        }
    }

    listenForFiltering() {
        document.querySelectorAll(".nav--bar").forEach(button => {
            button.addEventListener("click", () => {
                let tag = button.getAttribute("id");
                if (this.tagSelected.has(tag)) {
                    this.removeFilter(button);
                } else { 
                    this.addFilter(button);
                }
                this.filter();
            });
        });
    }

    removeFilter(button) {
        let tag = button.getAttribute("id");
        button.classList.toggle("nav--bar__active")
        this.tagSelected.delete(tag)
    }
}