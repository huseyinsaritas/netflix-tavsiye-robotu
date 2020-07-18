export function GenerateQueryString(queries: any): string {
  if (queries) {
    return Object.keys(queries)
      .filter(key => queries[key] !== undefined && queries[key] !== null)
      .map(key => key + "=" + queries[key])
      .join("&");
  } else {
    return "";
  }
}
