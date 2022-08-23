"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

var _default = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  type Photo {\n    id: Int!\n    user: User!\n    file: String!\n    caption: String\n    hashTags: [HashTag]\n    createdAt: String!\n    updatedAt: String!\n    likes: Int!\n    isMine: Boolean!\n    commentNumber: Int!\n    comments: [Comment]\n    isLiked: Boolean!\n  }\n  type HashTag {\n    id: Int!\n    name: String!\n    photos(page: Int!): [Photo]\n    totalPhotos: Int!\n    createdAt: String!\n    updatedAt: String!\n  }\n\n  type Like {\n    id: Int!\n    createdAt: String!\n    updatedAt: String!\n    photo: Photo!\n  }\n"])));

exports["default"] = _default;