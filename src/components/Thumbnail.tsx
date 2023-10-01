import { MovieThumbnail } from "../types";

export function Thumbnail({ thumbnail }: { thumbnail: MovieThumbnail }) {
    return (
        <article>{ thumbnail.title }</article>
    )
}