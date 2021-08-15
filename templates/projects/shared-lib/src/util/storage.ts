export const save = (key: string, value: any) => {
  typeof window !== "undefined" &&
    sessionStorage.setItem(key, JSON.stringify(value))
}

export const load = (key: string) => {
  const item = typeof window !== "undefined" && sessionStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

export const remove = (key: string) => {
  sessionStorage.removeItem(key)
}

export default {
  save,
  load,
  remove
}
