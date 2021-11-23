const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
  imgSrc: {
    type: String,
    required: true,
  },
  hashtag: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model('Template', templateSchema);
