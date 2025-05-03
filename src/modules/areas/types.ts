export type Area = {
  id: string
  name : string
  description: string
  images: string
  lore: string
  game_description: string
  how_to_access: string
}

export type ParsedArea = Omit<Area, 'images'> & {images: string[]}