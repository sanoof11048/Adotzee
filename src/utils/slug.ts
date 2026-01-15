export const toSlug = (text: string) =>
  text.toLowerCase().replace(/\s+/g, "-");

export const fromSlug = (slug: string) =>
  slug.replace(/-/g, " ");
