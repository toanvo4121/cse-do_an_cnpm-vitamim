import mongoose from 'mongoose';

const mimSchema = mongoose.Schema({
    user:{
        type= mongoose.Schema.Types.ObjectId,
        required: true,
    },
    mim_src:{
        type: String,
        required: true,
    },
    info:{
        caption:{
            type: String,
        },
        hastag:[{
            type: String,
        }],
        catag:{
            type: String,
            required: true,
        },
        likes:{
            type: Number,
            default: 0,
        },
        dislikes:{
            type: Number,
            default: 0,
        },
    }
},
{
    timestamps: true,
})