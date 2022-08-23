import { gql } from "apollo-server-express";

export default gql`
  type Photo {
    id: Int!
    user: User!
    file: String!
    caption: String
    hashTags: [HashTag]
    createdAt: String!
    updatedAt: String!
    likes: Int!
    isMine: Boolean!
    commentNumber: Int!
    comments: [Comment]
    isLiked: Boolean!
  }
  type HashTag {
    id: Int!
    name: String!
    photos(page: Int!): [Photo]
    totalPhotos: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Like {
    id: Int!
    createdAt: String!
    updatedAt: String!
    photo: Photo!
  }
`;
