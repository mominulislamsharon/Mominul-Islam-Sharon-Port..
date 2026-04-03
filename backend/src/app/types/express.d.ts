import { File } from 'multer';

declare global {
  namespace Express {
    interface Request {
      file?: Express.Multer.File; // The `file` property from multer
    }
  }
}

export { };
