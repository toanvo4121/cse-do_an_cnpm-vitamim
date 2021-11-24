const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mimSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Account',
    },
    user_name: {
      type: String,
    },
    avatar:String,
    mim_src: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: ''
    },
    hashtag:{
      type: String,
    },
    categ: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    reports: {
      type: Number,
      default: 0,
    },
    isAccept: {
      type: Number,
      default: 0,
    },
    comments: {
      numOfComments: {
        type: Number,
        default: 0,
      },
      cmts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          default: '',
          ref: 'Comment',
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Mim', mimSchema);
