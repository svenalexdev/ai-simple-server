import { Schema, model } from 'mongoose';

const chatSchema = new Schema(
  {
    history: {
      // sets to an array of mixed objects - Mongoose won't enforce their shape
      type: [{}],
      default: []
    }
  },
  { timestamps: true }
);

export default model('Chat', chatSchema);
