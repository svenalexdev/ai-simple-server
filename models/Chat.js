import { Schema, model } from 'mongoose';

const chatSchema = new Schema({
  history: {
    type: [{}],
    default: []
  }
});

export default model('Chat', chatSchema);
