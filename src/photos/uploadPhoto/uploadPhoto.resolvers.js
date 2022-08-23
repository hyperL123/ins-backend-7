import client from "../../client";
import { AWS_updatePhoto } from "../../shared/share.utils";
import { protectedResolver } from "../../users/users.utils";
import { processHashTags } from "../photos.utils";
import {
  GraphQLUpload,
  graphqlUploadExpress, // A Koa implementation is also exported.
} from "graphql-upload";
export default {
  Upload: GraphQLUpload,
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        try {
          let hashTagObj = [];
          if (caption) {
            hashTagObj = caption.match(/#[\w]+/g);
          }
          const fileUrl = await AWS_updatePhoto(file, loggedInUser.id, "photo");

          const photoCreation = await client.photo.create({
            include: {
              hashTags: true,
            },
            data: {
              file: fileUrl,
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
              caption,
              hashTags: {
                connectOrCreate: processHashTags(caption),
              },
            },
          });
          return photoCreation;
        } catch (error) {
          console.log(error);
        }
      }
    ),
  },
};
