"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processHashTags = void 0;

var processHashTags = function processHashTags(caption) {
  if (!caption) return [];
  var hashTagObj = caption.match(/#[\w]+/g);
  if (!hashTagObj) return;
  return hashTagObj.map(function (tag) {
    return {
      where: {
        name: tag
      },
      create: {
        name: tag
      }
    };
  });
};

exports.processHashTags = processHashTags;