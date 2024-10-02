import mongoose from "mongoose";

type TModule = {
  moduleTitle: string;
  videos: {
    title: string;
    vidoeId: string;
  }[];
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
});

export default mongoose.model<TModule>("Module", moduleSchema);
