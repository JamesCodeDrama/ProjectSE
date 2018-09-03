const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
  name_f: String,
  name_l: String,
  telephone: { type: String, default: '0871139047' }
});

mongoose.model('users', userSchema);
