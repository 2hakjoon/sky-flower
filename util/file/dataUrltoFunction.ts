export async function url2File(url: string, fileName: string) {
  const blob = await (await fetch(url)).blob();
  return new File([blob], fileName, { type: blob.type });
}
