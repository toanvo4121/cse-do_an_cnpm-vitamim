const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Member = new Schema({
    ho:String,
    ten: String,
    ten_tai_khoan: String,
    mat_khau: String,
    email: String,
    ngay_sinh: Number,
    thang_sinh: Number,
    nam_sinh: Number,
    gioi_tinh: String,
    avatar:{
        type: String,
        default: 'https://res.cloudinary.com/vitamim/image/upload/v1637764238/avatar/rqcorrhg6zeavfxozpko.png'
    },
    so_bai_viet:{
        type:Number,
        default:0
    },
    slogan:{
        type:String,
        default:"Slogan:"
    }

});

module.exports = mongoose.model('Account', Member);