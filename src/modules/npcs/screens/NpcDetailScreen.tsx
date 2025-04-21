import {Text, View} from 'react-native'
import {useQuery} from '@tanstack/react-query'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import LayoutDetailScreen from '@/src/shared/components/ui/LayoutDetailScreen'
import {Subtitle} from '@/src/shared/components/ui/Subtitle'
import {colors} from '@/src/infrastructure/config/theme/theme'

const NpcDetailScreen = ({id}: {id: string | string[]}) => {
	const {data: npc} = useQuery({
		queryKey: ['npc', id],
		// queryFn: () => getNpcById(id),
		staleTime: 1000 * 60 * 60, //1 hour
	})

	if (!npc) return <FullScreenLoader />

	return (
		<LayoutDetailScreen
			images={npc.images}
			title={npc.npc}
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
