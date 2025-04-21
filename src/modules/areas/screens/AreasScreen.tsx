import {globalStyles} from '@/src/infrastructure/config/theme/theme'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import {useQuery} from '@tanstack/react-query'
import {FlatList, View} from 'react-native'
import {AreaCard} from '../components/AreaCard'
import {type Href} from 'expo-router'

export const AreasScreen = () => {
	const {data: areas} = useQuery({
		queryKey: ['areas'],
		// queryFn: getAreas,
		staleTime: 1000 * 60 * 60, // 1 hour
	})

	if (!areas) return <FullScreenLoader />

	return (
		<View style={globalStyles.container}>
			<FlatList
				data={areas}
				keyExtractor={(item) => item.id}
				renderItem={({item, index}) => (
					<AreaCard
						key={item.id}
						href={`(detail)/area/${item.id}` as Href}
						title={item.area}
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
