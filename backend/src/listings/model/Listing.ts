import { Schema, model } from 'mongoose';
import { IListing } from './IListing'

const listingSchema: Schema = new Schema({
    title: { type: String, required: true, },
    location: { type: String, required: true },
    salary: { type: String, required: true },
    apply_link: { type: String, required: true },
    description: { type: String, required: true },
    is_active: { type: Boolean, required: true },
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    created_at: { type: Date, default: Date.now },
})

const Listing = model<IListing>('Listing', listingSchema)
export { Listing }