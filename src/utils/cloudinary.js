import {v2 as cloudinary} from "cloudinary";
import { response } from "express";
import fs from "fs";

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localPath) => {
    try {
        if (!localPath) return null;
        cloudinary.uploader(localPath, {
            resource_type: "auto"
        })
        return response;
    } catch (error) {
        fs.unlinkSync(localPath)
        return null;
    }
}

export {uploadOnCloudinary}