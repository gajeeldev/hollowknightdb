import {globalStyles} from '@/src/infrastructure/config/theme/theme'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import {useQuery} from '@tanstack/react-query'
import {FlatList, View} from 'react-native'
import {AchievementsCard} from '../components/AchievementCard'

export const AchievementsScreen = () => {
	const {data: achievements, isLoading} = useQuery({
		queryKey: ['achievements'],
		// queryFn: getAchievements,
		staleTime: 1000 * 60 * 60, // 1 hour
	})

	if (isLoading) return <FullScreenLoader />

	return (
		<View style={globalStyles.container}>
			<FlatList
				data={achievements}
				keyExtractor={(item) => item.id}
				renderItem={({item, index}) => (
					<AchievementsCard {...item} index={index} />
				)}
				showsVerticalScrollIndicator={false}
				ItemSeparatorComponent={() => <View style={{height: 10}} />}
				ListHeaderComponent={() => <View style={{height: 20}} />}
				ListFooterComponent={() => <View style={{height: 20}} />}
			/>
		</View>
	)
}
