import { createMediaHandler } from 'next-tinacms-cloudinary/dist/handlers';

import { isAuthorized } from '@tinacms/auth';

export default createMediaHandler({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  authorized: async (request, _res) => {
    if (process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT === '1') {
      return true;
    }
    try {
      const user = await isAuthorized(request);
      return user && user.verified;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
});
export { mediaHandlerConfig as config } from 'next-tinacms-cloudinary/dist/handlers';
