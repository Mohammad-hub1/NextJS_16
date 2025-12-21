export async function getLngDictionary(locale: string, fileName: string) {
  return import(`./${locale}/${fileName}.json`).then((m) => m.default);
}
