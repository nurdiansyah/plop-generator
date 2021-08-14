export type SupportedLanguageCodes =
  'en'|
  'es'

export interface Languages {
  name: string
  code: SupportedLanguageCodes
}

export const languages: Readonly<Languages[]> = [
  {
    name: "English",
    code: "en"
  },
  {
    name: "Español",
    code: "es"
  },
]
