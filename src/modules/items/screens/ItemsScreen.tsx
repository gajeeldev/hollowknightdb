import {FlatList, View} from 'react-native'
import {useQuery} from '@tanstack/react-query'
import {ItemCard} from '../components/ItemCard'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import {globalStyles} from '@/src/infrastructure/config/theme/theme'
import {type Href} from 'expo-router'
import {useSQLiteContext} from 'expo-sqlite'
import {Item, ParsedItem} from '../types'

export const ItemsScreen = () => {
	const db = useSQLiteContext()

	const getItems = async () => {
		const result = await db.getAllAsync<Item>('SELECT * FROM Items')
		const parsed: ParsedItem[] = result.map((item) => ({
			...item,
			images: JSON.parse(item.images),
		}))

		return parsed
	}
	const {data: items} = useQuery({
		queryKey: ['items'],
		queryFn: getItems,
		staleTime: 1000 * 60 * 60, // 1 hour
	})

	if (!items) return <FullScreenLoader />

	return (
		<View style={globalStyles.container}>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				numColumns={2}
				columnWrapperStyle={{justifyContent: 'space-between'}}
				renderItem={({item, index}) => (
					<ItemCard
						href={`(detail)/item/${item.id}` as Href}
						title={item.name}
						image={item.images[0]}
						index={index}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => <View style={{height: 20}} />}
				ListFooterComponent={() => <View style={{height: 20}} />}
			/>
		</View>
	)
}
