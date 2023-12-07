import { get, post, put, del } from "./api";

const endpoints = {
    all: '/data/articles',
    create: '/data/articles',
    byId: '/data/articles/',
    last: '/data/articles?sortBy=_createdOn%20desc&'
}

export async function getAll() {
    return get(endpoints.all);
}

export async function getById(id) {
    return get(endpoints.byId + id);
}

export async function getLast() {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3}
    );
    
    return get(endpoints.last + query);
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
