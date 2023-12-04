import { get, post, put, del } from "./api";

const endpoints = {
    all: '/data/articles',
    create: '/data/articles',
    byId: '/data/articles/'
}

export async function getAll() {
    return get(endpoints.all);
}

export async function getById(id) {
    return get(endpoints.byId + id);
}

export async function create(articleData) {
    return post(endpoints.create, articleData);
}

export async function edit(id, articleData) {
    return put(endpoints.byId + id, articleData);
}

export async function remove(id) {
    return del(endpoints.byId + id);
}
