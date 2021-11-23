const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mimSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Account',
    },
    mim_src: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: ''
    },
    hashtag: [
      {
        type: String,
      },
    ],
    catag: {
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
    isAccept:{
      type: Num,
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
          required: true,
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
