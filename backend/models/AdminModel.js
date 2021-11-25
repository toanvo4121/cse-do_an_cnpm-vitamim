const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    ten_tai_khoan:{
        type: String,
        required: true,
    },
    mat_khau:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    ngay_sinh: {
        type: Number,
        default: 1,
    },
    thang_sinh:{
        type: Number,
        default: 1,
    },
    nam_sinh:{
        type: Number,
        default: 1996,
    },
    gioi_tinh:{
        type: String,
        default: 'Nữ'
    },
    avatar:{
        type: String,
        default: 'https://res.cloudinary.com/vitamim/image/upload/v1637819459/avatar/admin_ava_lrbsxm.jpg'
    },
});

module.exports = mongoose.model('Admin', AdminSchema);