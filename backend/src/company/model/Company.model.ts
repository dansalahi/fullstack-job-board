import { Schema, model } from 'mongoose';
import { ICompany } from './icompany.model'


const companySchema: Schema = new Schema({
    name: { type: String, requried: true },
    logo: { type: String, required: true },
    description: { type: String, required: true },
    size: { type: Number, required: true },
    type: { type: String, required: true },
    founded: { type: Number, required: true },
    specialties: { type: [String], required: true },
    location: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
})

const Company = model<ICompany>('Company', companySchema)
export { Company }