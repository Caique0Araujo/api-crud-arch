export type HttpResponse<T = any> = {
    status: number,
    body: T,
    file: any,
}

export const login = (body: any, token: string, expires_date_UTC: any): HttpResponse => ({
    status: 200,
    body: {token, expires_date_UTC},
    file: null,
})

export const serverError = (error: Error): HttpResponse => ({
    status: 500,
    body: error.message,
    file: null,

})

export const created = (body: any): HttpResponse => ({
    status: 201,
    body: {result: true},
    file: null,

})

export const ok = (body: any): HttpResponse => ({
    status: 200,
    body: body,
    file: null,

})

export const getAll_with_file = (data: any): HttpResponse => ({
    status: 200,
    body: data.body,
    file: data.file
})

export const updated = (): HttpResponse => ({
    status: 200,
    body: [],
    file: null,

})

export const deleted = (value: any): HttpResponse => ({
    status: 204,
    body: {result: value},
    file: null,

})

export const badRequest = (error: Error): HttpResponse => ({
    status: 400,
    body: error.message,
    file: null,

})

export const notFound = (error: Error): HttpResponse => ({
    status: 404,
    body: error.message,
    file: null,

})
export const notAuthorized = (error: Error): HttpResponse => ({
    status: 401,
    body: error.message,
    file: null,

})

export const defaultError = (error: any): HttpResponse => ({
    status: error.status,
    body: error.message,
    file: null,

})