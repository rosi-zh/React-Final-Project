import { get } from "./api";

const endpoints = {
    all: '/data/articles'
}

export async function getAll() {
    const data = await get(endpoints.all)
    return Object.values(data);
}