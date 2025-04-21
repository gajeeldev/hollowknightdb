import {colors} from '@/src/infrastructure/config/theme/theme'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import LayoutDetailScreen from '@/src/shared/components/ui/LayoutDetailScreen'
import {Subtitle} from '@/src/shared/components/ui/Subtitle'
import {useQuery} from '@tanstack/react-query'
import {StyleSheet, Text} from 'react-native'

export const AreaDetailScreen = ({id}: {id: string | string[]}) => {
	const {data: area} = useQuery({
		queryKey: ['area', id],
		// queryFn: () => getAreaById(id),
		staleTime: 1000 * 60 * 60, //1 hour
	})

	if (!area) return <FullScreenLoader />

	return (
		<LayoutDetailScreen
			images={area.images}
			title={area.area}
			firstDescription={area.game_description}
		>
			<Subtitle text='Description' />
			<Text style={styles.text}>{area.description}</Text>

			<Subtitle text='Lore' />
			<Text style={styles.text}>{area.lore}</Text>

			<Subtitle text='How to Access' />
			<Text style={styles.text}>{area.how_to_access}</Text>
		</LayoutDetailScreen>
	)
}

const styles = StyleSheet.create({
	text: {
		color: colors.textColor,
		marginTop: 20,
	},
})
