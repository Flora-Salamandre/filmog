import { MovieThumbnail } from "../types";
import { headers } from "./headers";

type Json = {
    results: {
        id: number;
        title: string;
        poster_path: string;
    }[]
};

export async function fetchMovieThumbnails() {
    const url = `${import.meta.env.VITE_TMDB_API_URL}/movie/popular?language=en-US&page=1`;
    const res = await fetch(url, { method: "GET", headers });
    if (! res.ok) { throw new Error("Couldn't fetch movies"); }

    const json: Json = await res.json();
    return buildMovieThumbnails(json);
}

function buildMovieThumbnails(json: Json): MovieThumbnail[] {
    return json.results.map(result => ({
        id: result.id,
        imageUrl: `https://image.tmdb.org/t/p/w200${result.poster_path}`,
        title: result.title
    }));
}