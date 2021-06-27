import "reflect-metadata";
import express, { json, Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";

import "./database";

const app = express();

app.use(json());
app.use(router);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    error: "Internal Server Error",
  });
});

app.listen(3000, () => console.log("🚀 Server is running"));
