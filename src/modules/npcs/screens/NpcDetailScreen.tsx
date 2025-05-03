import {Text, View} from 'react-native'
import {useQuery} from '@tanstack/react-query'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import LayoutDetailScreen from '@/src/shared/components/ui/LayoutDetailScreen'
import {Subtitle} from '@/src/shared/components/ui/Subtitle'
import {colors} from '@/src/infrastructure/config/theme/theme'
import {useSQLiteContext} from 'expo-sqlite'
import {Npc, ParsedNpc} from '../types'

const NpcDetailScreen = ({id}: {id: string}) => {
	const db = useSQLiteContext()

	const getNpcById = async (id: string) => {
		const result = await db.getFirstAsync<Npc>(
			'SELECT * FROM Npcs WHERE id = ?',
			[id],
		)

		if (!result) {
			throw new Error('Npc not found')
		}

		const parsed: ParsedNpc = {
			...result,
			images: JSON.parse(result.images),
			dream_nail_dialogue: result.dream_nail_dialogue
				? JSON.parse(result.dream_nail_dialogue)
				: null,
		}

		return parsed
	}
	const {data: npc} = useQuery({
		queryKey: ['npc', id],
		queryFn: () => getNpcById(id),
		staleTime: 1000 * 60 * 60, //1 hour
	})

	if (!npc) return <FullScreenLoader />

	return (
		<LayoutDetailScreen
			images={npc.images}
			title={npc.name}
			firstDescription={npc.description}
		>
			<Subtitle text='Type' />
			<Text style={{color: colors.textColor}}>{npc.type}</Text>

			{npc.lore && (
				<>
					<Subtitle text='Lore' />
					<Text style={{color: colors.textColor}}>{npc.lore}</Text>
				</>
			)}

			{npc.in_game_events && (
				<View>
					<Subtitle text='In-Game Events' />
					<Text style={{color: colors.textColor}}>{npc.in_game_events}</Text>
				</View>
			)}

			{npc.dream_nail_dialogue && (
				<View>
					<Subtitle text='Dream Nail Dialogue' />
					{npc.dream_nail_dialogue.map((dialogue) => (
						<Text style={{color: colors.textColor}} key={dialogue}>
							{dialogue}
						</Text>
					))}
				</View>
			)}

			<Subtitle text='Location' />
			<Text style={{color: colors.textColor}}>{npc.location}</Text>
		</LayoutDetailScreen>
	)
}

export default NpcDetailScreen
