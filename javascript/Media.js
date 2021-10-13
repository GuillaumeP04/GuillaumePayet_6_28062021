class Media {

    constructor (data) {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.tags = data.tags;
        this.date = data.date;
        this.price = data.price;
        this.likes = data.likes;
        this.alt = data.alt;
        this.liked = false;
    }

    toggle() {
        let count = document.querySelector(`.photographer--like[data-id="${this.id}"]`);
        let heart = document.querySelector(`.like[data-id="${this.id}"]`);
        this.liked = !this.liked; 
        if (this.liked) {
            this.likes++;
            heart.style.color = "#901C1C";
        } else {
            this.likes--;
            heart.style.color = "#bbb";
        }
        count.innerHTML = this.likes;
    }
}
export default Media;
