class List {
    constructor () {
        this.all = [];
        this.tags = new Set();
        this.tagSelected =  [];
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

    displayPhotographer() {
        let html = " ";
        this.all.forEach(photographer => {
            html += photographer.render();
        })
        document.getElementById("main--wrapper").innerHTML = html;
    }

    displayTags() {
        let htmlNavBar = " ";
        this.tags.forEach(tags => {
            htmlNavBar += `<span class="nav--bar" id="${tags}">#${tags}</span>`
        })
        document.getElementById("tags").innerHTML = htmlNavBar;
    }
    
    displayFilter() {
        let navbarButtons = document.querySelectorAll(".nav--bar");
        navbarButtons.forEach(button => {
            button.addEventListener("click", () => {
                this.tagSelected.push(button.getAttribute("id"));
                if (this.all !== this.tagSelected) {
                    this.activateFilter(button);
                    console.log(this.tagSelected);
                } else { 
                    this.desactivateFilter(button)
                    // console.log(this.all)
                }
                this.filter();
            });
        });
    }

    activateFilter(button) {
        button.classList.add("nav--bar__active");
    }
    
    desactivateFilter(button) {
        button.classList.remove("nav--bar__active")
    }
    
    filter() {
        let list = this.all.filter(photographe => {
            let keep = false; 
            this.tagSelected.forEach(tag => {
                if (photographe.tags.includes(tag)) {
                    keep =  true;
                }
            })
        })
        this.displayPhotographer(list)
    }
}