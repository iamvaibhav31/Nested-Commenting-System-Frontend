import { makeRequest } from './makeRequest'


export function getPost() {
     const res = makeRequest("/posts")
     console.log(res)
     return res
}

export function getPostdetails(id) {
     const res = makeRequest("/posts/" + id)
     console.log(res)
     return res
}