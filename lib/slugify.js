const slugify = string => {
  // Turn the string into a slug
  return string
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};

export { slugify };
