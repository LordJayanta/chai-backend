import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from 'fs';


// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});


// upload
// cloudinary.v2.uploader.upload(
//     "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png",
//     { public_id: "Flag_of_India" },
//     function (error, result) { console.log(result); }
// )


// upload
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // upload the file on cloudinary
        const responce = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        // file has been uploaded successfully
        console.log("File is uploaded on cloudinary :", responce.url);
        return responce;
    } catch (error) {
        fs.linkSync(localFilePath) // remove the lcally save temprary files as the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary};