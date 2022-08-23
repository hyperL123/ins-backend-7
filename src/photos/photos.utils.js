export const processHashTags = (caption) => {
  if (!caption) return [];
  const hashTagObj = caption.match(/#[\w]+/g);
  if (!hashTagObj) return;
  return hashTagObj.map((tag) => ({
    where: { name: tag },
    create: { name: tag },
  }));
};
