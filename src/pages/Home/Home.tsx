import { useLoaderData } from "react-router-dom";
import { MovieThumbnail } from "../../types";
import { Thumbnail } from "../../components";
import "./Home.scss"

export function Home() {
    const thumbnails = useLoaderData() as MovieThumbnail[];

    return (
        <main className="home">
            { thumbnails.map(thumbnail => <Thumbnail key={thumbnail.id} thumbnail={thumbnail} />) }
        </main>
    );
}
