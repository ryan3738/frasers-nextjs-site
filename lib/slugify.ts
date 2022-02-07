function slugify(text: string): string {
  // Turn the string into a slug
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export { slugify };
