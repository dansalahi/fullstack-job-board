import { Document } from 'mongoose';
export interface ICompany extends Document {
    name: string
    description: string
    size: number
    type: string
    founded: number
    specialties: [string]
    location: string
    created_at: Date
}