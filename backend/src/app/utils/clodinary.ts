import { v2 as cloudinary } from "cloudinary";
import config from "../../config";

cloudinary.config({
  cloud_name: config.CLOUDINARY_CLOUD_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (
  filePath: string,
  folder: string = "portfolio",
) => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder,
    transformation: [{ quality: "auto", fetch_format: "auto" }],
  });
  return { url: result.secure_url, public_id: result.public_id };
};

export const deleteImage = async (publicId: string) => {
  await cloudinary.uploader.destroy(publicId);
};

export default cloudinary;
