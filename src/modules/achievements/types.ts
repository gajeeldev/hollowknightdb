export type Achievement = {
	id: string
	name: string
	description: string
	images: string
}

export type ParsedAchievement = Omit<Achievement, 'images'> & {
	images: string[]
}
