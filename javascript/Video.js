// class Video extends MediaFactory{

//     constructor(data) {
//         super(data);
//         this.video = data.video;
//     }

//     render() {
//         return `
//         <div class="image--wrapper" date="${this.date}" price="${this.price}" photoId="${this.id}">
//             <video width="350" height="250" controls>
//                 <source src="../images/${this.photographerId}/${this.video}" type="video/mp4">
//             </video>
//             <div class="description--wrapper">
//                 <p class="description">${this.title}</p>
//                 <span class="photographer--like" like="${this.likes}">${this.likes}<i class="fas fa-heart like" id=""></i></span>
//             </div>
//         </div>`
//     }
// }