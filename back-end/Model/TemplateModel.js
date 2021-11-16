import mongoose from 'mongoose';

const templateSchema = mongoose.Schema({
    imgSrc:{
        type: String,
        required: true,
    },
    hastag:[{ 
        type: String,
    }],
})

const Template = mongoose.model('Template', templateSchema);

export default Template