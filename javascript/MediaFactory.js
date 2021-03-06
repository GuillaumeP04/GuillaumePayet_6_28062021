import Image from "./Image.js";
import Video from "./Video.js";

class MediaFactory {
    
    build(media) {
        if (media.image) {
            media = new Image(media);
        } else {
            media = new Video(media);
        }
        return media;
    }
}
export default MediaFactory;