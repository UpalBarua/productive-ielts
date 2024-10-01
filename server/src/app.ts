import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";

// routes
import moduleRoute from "./modules/module/module.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.use("", moduleRoute);

app.all("*", (_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "There is no such route",
  });
});

export default app;
