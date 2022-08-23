import client from "../client";

export default {
  Photo: {
    user: ({ userId }) => {
      return client.user.findUnique({ where: { id: userId } });
    },
    hashTags: ({ id }) => {
      return client.hashTag.findMany({
        where: {
          photos: {
            some: {
              id,
            },
          },
        },
      });
    },
    likes: ({ id }) => {
      return client.like.count({ where: { photoId: id } });
    },
    commentNumber: ({ id }) => client.comment.count({ where: { photoId: id } }),

    comments: ({ id }) => {
      return client.comment.findMany({
        where: { photoId: id },
        include: {
          user: true,
        },
      });
    },
    isMine: ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return id === loggedInUser.id;
    },
    isLiked: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      const ok = await client.like.findUnique({
        where: {
          photoId_userId: {
            photoId: id,
            userId: loggedInUser.id,
          },
        },
        select: {
          id: true,
        },
      });
      if (ok) {
        return true;
      }
      return false;
    },
  },
  HashTag: {
    photos: async ({ id }, { page }) => {
      const result = await client.hashTag
        .findUnique({ where: { id } })
        .photos();
      return result;
    },
    totalPhotos: ({ id }) => {
      client.photo.count({
        where: {
          hashTags: {
            some: {
              id,
            },
          },
        },
      });
    },
  },
};
