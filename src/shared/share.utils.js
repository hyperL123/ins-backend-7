import AWS from "aws-sdk";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

export const AWS_updatePhoto = async (file, userId, folderName) => {
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const objName = `${folderName}/${userId}/${userId}-${Date.now()}-${filename}`;
  const uploadObj = await new AWS.S3()
    .upload({
      Bucket: "ins-uploader",
      Key: objName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  return uploadObj.Location;
};
