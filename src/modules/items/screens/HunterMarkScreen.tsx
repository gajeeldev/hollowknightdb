import {FlatList, Text} from 'react-native'
import {useQuery} from '@tanstack/react-query'
import {entries} from '../data/data'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import LayoutDetailScreen from '@/src/shared/components/ui/LayoutDetailScreen'
import {Subtitle} from '@/src/shared/components/ui/Subtitle'
import {colors} from '@/src/infrastructure/config/theme/theme'
import {useSQLiteContext} from 'expo-sqlite'
import {Item, ParsedItem} from '../types'

export const HunterMarkScreen = ({id}: {id: string}) => {
	const db = useSQLiteContext()

	const getItemById = async (id: string) => {
		const result = await db.getFirstAsync<Item>(
			'SELECT * FROM Items WHERE id = ?',
			[id],
		)

		if (!result) {
			throw new Error('Item not found')
		}

		const parsed: ParsedItem = {
			...result,
			images: JSON.parse(result.images),
		}

		return parsed
	}

	const {data: item} = useQuery({
		queryKey: ['item', id],
		queryFn: () => getItemById(id),
		staleTime: 1000 * 60 * 60, //1 hour
	})

	if (!item) return <FullScreenLoader />
	return (
		<LayoutDetailScreen
			images={item.images}
			title={item.name}
			firstDescription={item.description_1}
			secondDescription={item.description_2}
		>
			<Subtitle text='How to acquire' />
			<Text style={{color: colors.textColor}}>{item.how_to_acquire}</Text>

			<Text style={{color: colors.textColor, marginTop: 10}}>
				The following entries are not required in order to acquire the Hunter's
				Mark:
			</Text>

			<FlatList
				style={{marginTop: 10}}
				data={entries}
				renderItem={({item}) => (
					<Text style={{color: colors.textColor}}>{item}</Text>
				)}
				keyExtractor={(item) => item}
				scrollEnabled={false}
			/>
		</LayoutDetailScreen>
	)
}
