import { Document } from 'mongoose'

export interface IUser extends Document {
    first_name: string
    last_name: string
    email: string
    created_at?: Date
}
