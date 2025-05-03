import {View} from 'react-native'
import {useQuery} from '@tanstack/react-query'
import {FlashList} from '@shopify/flash-list'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import {globalStyles} from '@/src/infrastructure/config/theme/theme'
import {ColumnItem} from '../components/ColumnItem'
import {EnemyCard} from '../components/EnemyCard'
import {type Href} from 'expo-router'
import {useSQLiteContext} from 'expo-sqlite'
import {Enemy, ParsedEnemyCard} from '../types'

export const EnemiesScreen = () => {
	const db = useSQLiteContext()

	const getEnemies = async () => {
		const result = await db.getAllAsync<Enemy>('SELECT * FROM Enemies')
		const parsed: ParsedEnemyCard[] = result.map((enemy) => ({
			...enemy,
			images: JSON.parse(enemy.images),
		}))
		return parsed
	}
	const {data: enemies} = useQuery({
		queryKey: ['enemies'],
		queryFn: getEnemies,
		staleTime: 1000 * 60 * 60, // 1 hour
	})

	if (!enemies) return <FullScreenLoader />

	return (
		<View style={globalStyles.container}>
			<FlashList
				data={enemies}
				keyExtractor={(item) => item.id}
				numColumns={2}
				estimatedItemSize={182.85}
				renderItem={({item, index}) => (
					<ColumnItem index={index} numColumns={2}>
						<EnemyCard
							href={`(detail)/enemy/${item.id}` as Href}
							title={item.name}
							image={item.images[0]}
							index={index}
						/>
					</ColumnItem>
				)}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={() => <View style={{height: 20}} />}
				ListFooterComponent={() => <View style={{height: 20}} />}
			/>
		</View>
	)
}
