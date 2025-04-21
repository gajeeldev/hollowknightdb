import {globalStyles} from '@/src/infrastructure/config/theme/theme'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import {useQuery} from '@tanstack/react-query'
import {FlatList, View} from 'react-native'
import {CharmCard} from '../components/CharmCard'
import {type Href} from 'expo-router'

export const CharmsScreen = () => {
	const {data: charms} = useQuery({
		queryKey: ['charms'],
		// queryFn: getCharms,
		staleTime: 1000 * 60 * 60, // 1 hour
	})

	if (!charms) return <FullScreenLoader />

	return (
		<View style={globalStyles.container}>
			<FlatList
				data={charms}
				keyExtractor={(item) => item.id}
				numColumns={2}
				columnWrapperStyle={{justifyContent: 'space-between'}}
				renderItem={({item, index}) => (
					<CharmCard
						href={`(detail)/charm/${item.id}` as Href}
						title={item.charm}
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
