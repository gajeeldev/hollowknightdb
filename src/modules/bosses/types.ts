export type Boss = {
	id: string
	name: string
	description_1: string
	description_2: string
	images: string
	dlc: string
	lore: string
	in_game_events: string
	dream_nail_dialogue: string
	location: string
	health: string
	has_nail_upgrades: number
}

export type ParsedBossCard = Omit<Boss, 'images'> & {
	images: string[]
}
export type ParsedBoss = Omit<
	Boss,
	'images' | 'dream_nail_dialogue' | 'health' | 'has_nail_upgrades'
> & {
	images: string[]
	dream_nail_dialogue: string[]
	health: string[]
	has_nail_upgrades: boolean
}
