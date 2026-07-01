import { createMediaHandler } from 'next-tinacms-cloudinary/dist/handlers';

import { isAuthorized } from '@tinacms/auth';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false
  }
};

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

const isCloudinaryConfigured = Boolean(
  cloudName?.trim() && apiKey?.trim() && apiSecret?.trim()
);

const mediaHandler = isCloudinaryConfigured
  ? createMediaHandler({
      cloud_name: cloudName!,
      api_key: apiKey!,
      api_secret: apiSecret!,
      authorized: async (req, _res) => {
        try {
          if (process.env.NODE_ENV == 'development') {
            return true;
          }

          const user = await isAuthorized(req);
          return !!user && user.verified;
        } catch (e) {
          console.error(e);
          return false;
        }
      }
    })
  : null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!mediaHandler) {
    return res.status(503).json({
      error:
        'Cloudinary is not configured. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, NEXT_PUBLIC_CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in .env (see .env.example).'
    });
  }

  return mediaHandler(req, res);
}
