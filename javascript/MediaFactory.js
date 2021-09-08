class MediaFactory {
    
    build(media) {
        if (media.image) {
            media = new Image(media);
        } else {
            media = new Video(media);
        }
        return media;
    };
}