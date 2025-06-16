import { Schema, model } from 'mongoose';

const chatSchema = new Schema(
  {
    history: {
      type: [{}],
      default: []
    }
  },
  { timestamps: true }
);

export default model('Chat', chatSchema);
