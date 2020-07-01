import {UserModel} from "../../../dataAccess/user";

export const registerUser = async (user: any) => {
    return await UserModel.create(user)
};

export const loginUser = async (user: any) => {
    try {
        let {name, password} = user;
        const person = await UserModel.findOne({name, password});
        if (person === null) {
            throw new Error("неверные данные")
        }
        return person;
    } catch (e) {
        return e
    }
};
