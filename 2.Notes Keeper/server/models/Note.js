import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content : {
        type: String,
        required: true,
    }



},{timestamps: true})

export default mongoose.model('Note', noteSchema)
