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
            htmlNavBar += `<span class="nav--bar">#${tags}</span>`
        })
        document.getElementById("tags").innerHTML = htmlNavBar;
    }
}