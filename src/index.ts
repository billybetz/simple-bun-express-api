import express, { type Request, type Response, type NextFunction, type Express } from 'express';
const app: Express = express();

app.use(express.json());

const port = process.env.PORT || 8080;
const isVercel = process.env.DEPLOYMENT_ENV === "vercel";

app.get(
  '/',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json({
        message: 'Hello from /',
        success: true,
      });
    } catch (error: unknown) {
      next(new Error((error as Error).message));
    }
  },
);

app.get(
  '/api/v1',
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.status(200).json({
        message: 'Hello from /api/v1',
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

export default app
