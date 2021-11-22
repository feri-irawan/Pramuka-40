import axios from 'axios'
import {makeSlug} from './string'
const host = process.env.NEXT_PUBLIC_SERVER_HOST

export function addContent(content) {
    return axios.post(`${host}/addContent`, content)
}

export function loadContents() {
    return axios.get(`${host}/loadContents`)
}

export function deleteAllContents() {
    return axios.delete(`${host}/deleteAllContents`)
}

export async function findContent(category, id = '', slug = '') {
    const contents = (await loadContents()).data.data

    let results
    if (category)
        results = contents.filter(
            (content) => makeSlug(content.category) === category
        )

    if (category && id !== '' && slug !== '')
        results = contents.find(
            (content) =>
                makeSlug(content.category) === category &&
                content.id == id &&
                makeSlug(content.title) === slug
        )

    return results ? results : {}
}
