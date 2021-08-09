class List {
    constructor () {
        this.all = [];
        this.tags = new Set();
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

    
    displayFilter(photographers) {
        let navbarButtons = document.querySelectorAll(".nav--bar");
        let navbarActive = document.getElementById("nav--active");
        let htmlFilter = " ";
        let htmlList = new Set();
        photographers.forEach(item => {
            let photographer = new Photographer(item);
            item.tags.forEach(tag => {
                navbarButtons.forEach(button => {
                    button.addEventListener("click", function() {
                        item
                        if (button.textContent === "#" + tag) {
                            navbarActive.style.display = "block";
                            button.classList.add("nav--bar__active");
                            console.log(photographer); 
                        } else {
                            htmlFilter += photographer.render();
                        }
                    })
                })
            })
        })
        document.querySelectorAll("#photographe--wrapper").innerHTML = htmlFilter;
    }
}