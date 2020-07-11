import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    value:{
        type: Number,
        required: true,
        validate(value){
            if (value < 0){
                throw new Error("Não é permitido valores negativos como nota");
            }
        }
    },
    lastModified: {
        type: Date,
        default: Date.now,
    }
});

const studentModels = mongoose.model("student", studentSchema);

export {studentModels};