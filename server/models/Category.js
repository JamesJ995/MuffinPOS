const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  options: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Option',
    },
  ],
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
