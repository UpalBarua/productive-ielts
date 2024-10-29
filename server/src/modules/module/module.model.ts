import mongoose from "mongoose";

type TModule = {
  moduleTitle: string;
  videos: {
    title: string;
    videoId: string;
  }[];
  quiz: {
    question: string;
    options: string[];
    correctAnswer: string;
  };
};

// TODO: implement proper validations
const moduleSchema = new mongoose.Schema<TModule>({
  moduleTitle: {
    type: String,
    required: true,
  },
  videos: [
    {
      title: {
        type: String,
        required: true,
      },
      videoId: {
        type: String,
        required: true,
      },
    },
  ],
  quiz: [
    {
      question: {
        type: String,
        required: true,
      },
      options: [
        {
          type: String,
          required: true,
        },
      ],
      correctAnswer: {
        type: String,
      },
    },
  ],
});

export default mongoose.model<TModule>("Module", moduleSchema);
