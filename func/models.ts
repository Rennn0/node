import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Enter product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        },
        ingredients: {
            type: Array,
            required: false
        }
    },
    {
        timestamps: true,
        versionKey: false,

    }
)

const sample = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

export const Product = model("Product", productSchema);
export const Sample = model("Sample", sample);

