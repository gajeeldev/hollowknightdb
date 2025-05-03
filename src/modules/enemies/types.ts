export type Enemy = {
	id: string
	name: string
	description_1: string
	description_2: string
	images: string
	dlc: string
	health: number
	dream_nail_dialogue: string
	location: string
}

export type ParsedEnemyCard = Omit<Enemy, 'images'> & {
	images: string[]
}
export type ParsedEnemy = Omit<Enemy, 'images' | 'dream_nail_dialogue'> & {
	images: string[]
	dream_nail_dialogue: string[]
}
