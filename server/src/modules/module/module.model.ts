import mongoose from "mongoose";

type TModule = {
  title: string;
  videos: {
    title: string;
    vidoeId: string;
  }[];
};

const moduleSchema = new mongoose.Schema<TModule>({
  title: {
    type: String,
    required: true,
  },
});

export default mongoose.model<TModule>("Module", moduleSchema);
