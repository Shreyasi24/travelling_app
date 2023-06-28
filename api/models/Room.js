import mongoose from "mongoose";

const RoomSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxpeople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    roomNumbers: [{ number: Number, unavailabledates: [{ type: Date }] }],
},
    {
        timestamps: true
    }
);

// [
//     { number: 101, unavailabledates: [] },
//     { number: 102, unavailabledates: [] },
//     { number: 103, unavailabledates: [] },
//     { number: 104, unavailabledates: [] },
//     { number: 105, unavailabledates: [] }
// ]

export default mongoose.model("Room", RoomSchema)