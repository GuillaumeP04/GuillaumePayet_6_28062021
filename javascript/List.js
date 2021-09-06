class List {
    constructor () {
        this.all = [];
        this.tags = new Set();
        this.tagSelected = new Set();
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
            htmlNavBar += `<span class="nav--bar" id="${tags}">#${tags}</span>`
        })
        document.getElementById("tags").innerHTML = htmlNavBar;
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
    
    addFilter(button) {
        let tag = button.getAttribute("id");
        button.classList.add("nav--bar__active");
        this.tagSelected.add(tag);
    }
    
    removeFilter(button) {
        let tag = button.getAttribute("id");
        button.classList.toggle("nav--bar__active")
        this.tagSelected.delete(tag)
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
    }
}