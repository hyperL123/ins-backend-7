import client from "../client";

export default {
  User: {
    totalFollowing: async ({ id }) => {
      const num = await client.user.count({
        where: {
          following: {
            some: {
              id,
            },
          },
        },
      });
      return num;
    },
    totalFollowers: async ({ id }) => {
      const num = await client.user.count({
        where: {
          followers: {
            some: {
              id,
            },
          },
        },
      });
      return num;
    },
    isMe: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return id === loggedInUser.id;
    },
    isFollowing: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      const exist = await client.user.count({
        where: {
          userName: loggedInUser.userName,
          following: {
            some: {
              id,
            },
          },
        },
      });
      console.log(exist, "exist");
      return exist !== 0;
    },
    photos: ({ id }) => client.user.findUnique({ where: { id } }).photos(),
  },
};
