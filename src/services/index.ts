export * from 'axios';
import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_IMDB_ENDPOINT,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_IMDB_BEARER_TOKEN}`,
    },
});
