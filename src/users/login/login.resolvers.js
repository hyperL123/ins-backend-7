import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config();
export default {
  Mutation: {
    login: async (_, { userName, password }) => {
      //find user
      const user = await client.user.findFirst({ where: { userName } });
      //not user
      if (!user) {
        return {
          ok: false,
          error: "User not found.",
        };
      }
      //check password
      const passwordOk = await bcrypt.compare(password, user.password);
      //if not password
      if (!passwordOk) {
        return {
          ok: false,
          error: "Incorrect password",
        };
      }

      const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
      //issue a token and send it to the user
    },
  },
};
