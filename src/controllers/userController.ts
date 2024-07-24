import { Request, Response } from "express";
import User from '../models/user';

export const createUser = async (req: Request, res: Response) => {
    const {name, email} = req.body
    try {
        const newUser = User.create({name, email});
        return res.status(201).json(newUser)
    } catch (error) {
        console.error(error)
    }
}

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = User.find();
        return res.status(200).json(users)
    } catch (error) {
        console.error(error)
    }
}

