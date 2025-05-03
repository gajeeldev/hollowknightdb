import {globalStyles} from '@/src/infrastructure/config/theme/theme'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import {useQuery} from '@tanstack/react-query'
import {FlatList, View} from 'react-native'
import {BossCard} from '../components/BossCard'
import {type Href} from 'expo-router'
import {useSQLiteContext} from 'expo-sqlite'
import {Boss, ParsedBossCard} from '../types'

export const BossesScreen = () => {
	const db = useSQLiteContext()

	const getBosses = async () => {
		const result = await db.getAllAsync<Boss>('SELECT * FROM Bosses')
		const parsed: ParsedBossCard[] = result.map((boss) => ({
			...boss,
			images: JSON.parse(boss.images),
		}))
		return parsed
	}

	const {data: bosses} = useQuery({
		queryKey: ['bosses'],
		queryFn: getBosses,
		staleTime: 1000 * 60 * 60, // 1 hour
	})

	if (!bosses) return <FullScreenLoader />

	return (
		<View style={globalStyles.container}>
			<FlatList
				data={bosses}
				keyExtractor={(item) => item.id}
				numColumns={2}
				columnWrapperStyle={{justifyContent: 'space-between'}}
				renderItem={({item, index}) => (
					<BossCard
						key={item.id}
						href={`(detail)/boss/${item.id}` as Href}
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
