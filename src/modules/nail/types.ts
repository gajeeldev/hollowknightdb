export type Nail = {
  id: string
  name: string
  description: string
  images: string
  upgrade_cost: string
  damage: number
}

export type ParsedNail = Omit<Nail, 'images'> & {images: string[]}