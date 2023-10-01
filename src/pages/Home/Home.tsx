import { useLoaderData } from "react-router-dom";
import { MovieThumbnail } from "../../types";
import { Thumbnail } from "../../components";

export function Home() {
    const thumbnails = useLoaderData() as MovieThumbnail[];

    return (
        <>
            { thumbnails.map(thumbnail => <Thumbnail thumbnail={thumbnail} />) }
        </>
    );
}
