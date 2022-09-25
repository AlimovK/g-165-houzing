export function UseReplace(name, value) {
  const url = new URL(window.location.href);
  url.searchParams.set(name, value);
  if (!value) {
    url.searchParams.delete(name);
  }
  return url.search;
}
