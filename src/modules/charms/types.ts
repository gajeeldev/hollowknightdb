export type Charm = {
	id: string
	name: string
	description_1: string
	description_2: string
	images: string
	effect: string
	notches: number
	usefulness: string
	how_to_acquire: string
	dlc: string
}

export type ParsedCharmCard = Omit<Charm, 'images'> & {images: string[]}

export type ParsedCharm = Omit<Charm, 'images' | 'effect'> & {
	images: string[]
	effect: string[]
}
