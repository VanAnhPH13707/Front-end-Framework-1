

export type TypeLogin = {
    email: string,
    password: string
};
export type TypeLoginResponse = {
    token: string,
    user:{
        _id: string,
        name: string,
        email: string,
        role: number

    }
}
export type User ={
    _id: string,
    name: string,
    email: string,
    role: number

}