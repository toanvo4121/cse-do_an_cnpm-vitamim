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
});

module.exports = mongoose.model('Account', Member);