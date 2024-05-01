import express, { type Request, type Response, type NextFunction, type Express } from 'express';
export const app: Express = express();

app.use(express.json());

const port = process.env.PORT || 8080;
const isVercel = process.env.DEPLOYMENT_ENV === "vercel";

app.get(
  '/api',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json({
        message: 'Hurray!! we create our first server on bun js',
        success: true,
      });
    } catch (error: unknown) {
      next(new Error((error as Error).message));
    }
  },
);

if (!isVercel) {
  app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
  });
}

module.exports = app;
