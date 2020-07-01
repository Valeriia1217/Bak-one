import {loginUser, registerUser} from "../repositories";

export const servicesRegister = async (user: any) => {
    let {name, password} = user;
    if (name.length !== 0 && password.length !== 0) {
        return await registerUser(user)
    } else throw new Error()
};

export const servicesLogin = async (user: any) => {
    try {
        return await loginUser(user)
    } catch (e) {
        return e
    }
};
