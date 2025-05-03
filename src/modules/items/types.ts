export type Item = {
  id: string
  name: string
  description_1: string
  description_2: string
  images: string
  effects: string
  type: string
  use: string
  how_to_acquire: string
}

export type ParsedItem = Omit<Item, 'images'> & { images: string[] }
