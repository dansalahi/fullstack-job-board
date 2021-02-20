import { model } from 'mongoose';
import * as faker from 'faker'
import { IUser } from './../users/model/iuser.model'
import { User as UserModel } from './../users/model/user.model'

faker.setLocale('en')
export async function create(count: number = 1, params?: Partial<IUser>) {
    const users: IUser[] = []
    for (let i = 1; i <= count; i++) {
        const defaultParams = {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            email: faker.internet.email(),
        }
        const userParams = { ...defaultParams, ...params }
        const newUser = new UserModel(userParams)
        await newUser.save()
        users.push(newUser)
    }
    return users
}

