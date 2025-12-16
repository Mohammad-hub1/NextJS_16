

export async function getCommonDictionary(locale: string) {
  return import(`./${locale}/common.json`).then(m => m.default);
}

export async function getHomeDictionary(locale: string) {
  return import(`./${locale}/home.json`).then(m => m.default);
}

export async function getCoursesDictionary(locale: string) {
  return import(`./${locale}/courses.json`).then(m => m.default);
}