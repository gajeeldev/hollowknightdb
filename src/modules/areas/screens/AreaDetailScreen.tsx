import {colors} from '@/src/infrastructure/config/theme/theme'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import LayoutDetailScreen from '@/src/shared/components/ui/LayoutDetailScreen'
import {Subtitle} from '@/src/shared/components/ui/Subtitle'
import {useQuery} from '@tanstack/react-query'
import {useSQLiteContext} from 'expo-sqlite'
import {StyleSheet, Text} from 'react-native'
import {Area, ParsedArea} from '../types'

export const AreaDetailScreen = ({id}: {id: string}) => {
	const db = useSQLiteContext()

	const getAreaById = async (id: string) => {
		const result = await db.getFirstAsync<Area>(
			'SELECT * FROM Areas WHERE id = ?',
			[id],
		)

		if (!result) {
			throw new Error('Area not found')
		}

		const parsed: ParsedArea = {
			...result,
			images: JSON.parse(result.images),
		}

		return parsed
	}

	const {data: area} = useQuery({
		queryKey: ['area', id],
		queryFn: () => getAreaById(id),
		staleTime: 1000 * 60 * 60, //1 hour
	})

	if (!area) return <FullScreenLoader />

	return (
		<LayoutDetailScreen
			images={area.images}
			title={area.name}
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
