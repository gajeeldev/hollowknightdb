export type Npc = {
	id: string
	name: string
	description: string
	images: string
	lore: string
	in_game_events: string
	location: string
	type: string
	dream_nail_dialogue: string
}

export type ParsedNpcCard = Omit<Npc, 'images'> & {
	images: string[]
}

export type ParsedNpc = Omit<Npc, 'images' | 'dream_nail_dialogue'> & {
	images: string[]
	dream_nail_dialogue: string[]
}
