import {Response, Request} from "express";
import {servicesLogin, servicesRegister} from "../services";

export const registerUser = (req: Request, res: Response) => {
    servicesRegister(req.body)
        .then((user: any) => res.json(user))
        .catch((err: any) => res.json(err))
};

export const loginUser = (req: Request, res: Response) => {
    servicesLogin(req.body)
        .then((user: any) => res.json(user))
        .catch((err: any) => res.json(err))
};

