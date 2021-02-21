import { IUser } from './IUser'
import { Schema, model } from 'mongoose'

const userSchema: Schema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String, required: true, unique: true },
    created_at: { type: Date, default: Date.now },
})

const User = model<IUser>('User', userSchema)
export { User }
