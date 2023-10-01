import { fetchMovieThumbnails } from "../../services";

export async function loader() {
    return fetchMovieThumbnails();
}