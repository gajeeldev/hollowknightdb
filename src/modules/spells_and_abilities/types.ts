export type SpellAndAbility = {
	id: string
	name: string
	inventory_description_1: string
	inventory_description_2: string
	prompt_description_1: string
	prompt_description_2: string
	images: string
	function: string
	how_to_acquire: string
	type: string
	modifiers: string
}

export type ParsedSpellAndAbilityCard = Omit<SpellAndAbility, 'images'> & {
	images: string[]
}

export type ParsedSpellAndAbility = Omit<
	SpellAndAbility,
	'images' | 'modifiers'
> & {images: string[]; modifiers: string[]}
