export type Quiz = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Module = {
  _id: string;
  moduleTitle: string;
  videos: {
    title: string;
    videoId: string;
  }[];
  quiz: Quiz[];
};
