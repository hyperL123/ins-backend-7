import fs from "fs";
import client from "../../client";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";
import { AWS_updatePhoto } from "../../shared/share.utils";
import {
  GraphQLUpload,
  graphqlUploadExpress, // A Koa implementation is also exported.
} from "graphql-upload";
export default {
  Upload: GraphQLUpload,
  Mutation: {
    editProfile: protectedResolver(
      async (
        _,
        {
          firstName,
          lastName,
          userName,
          email,
          password: newPassword,
          bio,
          avatar,
        },
        { loggedInUser }
      ) => {
        try {
          let avatarUrl = null;
          if (avatar) {
            avatarUrl = await AWS_updatePhoto(
              avatar,
              loggedInUser.id,
              "avatar"
            );
            // const {filename, createReadStream} = await avatar
            // const newFileName =  `${loggedInUser.id}-${Date.now()}-${filename}}`
            // const readStream = createReadStream()
            // const writeStream = fs.createWriteStream(process.cwd()+"/uploads/"+ newFileName)
            // readStream.pipe(writeStream)
            // avatarUrl = `http://localhos:4000//static/${newFileName}`
          }

          let uglyPassword = null;

          if (newPassword) uglyPassword = await bcrypt.hash(newPassword, 10);
          const updatedUser = await client.user.update({
            //found the user with this id
            where: { id: loggedInUser.id },
            //update these info
            data: {
              firstName,
              lastName,
              userName,
              email,
              //if uglyPassword is true, then ... is password:uglyPassword
              ...(uglyPassword && { password: uglyPassword }),
              ...(avatarUrl && { avatar: avatarUrl }),
              bio,
            },
          });
          if (updatedUser.id) {
            return {
              ok: true,
            };
          } else {
            return {
              ok: false,
              error: "Couldnt update profile",
            };
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    ),
  },
};
