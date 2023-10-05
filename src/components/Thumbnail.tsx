import { MovieThumbnail } from "../types";
import "./Thumbnail.scss";

export function Thumbnail({ thumbnail }: { thumbnail: MovieThumbnail }) {
    function onClick() {
        console.log(thumbnail.title)
    }
    
    return (
        <article 
            onClick={onClick}
            className="thumbnail"
            style={{ backgroundImage: `url(${thumbnail.imageUrl})` }}
        >
            <div className="dark-shade">
                { thumbnail.title.toUpperCase() }
            </div>
        </article>
        
    )
}