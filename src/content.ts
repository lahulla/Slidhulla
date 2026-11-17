

const allSlides = import.meta.glob('../slides/**/*.md', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export function slideNames(): string[] {
  return Object.keys(allSlides)
    .sort()
    .map(path => path.replace('../', '/'));
}
