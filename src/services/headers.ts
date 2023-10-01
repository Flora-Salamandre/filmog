export const headers = new Headers({
    "Authorization": `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    "accept": "application/json"
});