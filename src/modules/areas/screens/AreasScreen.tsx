import {globalStyles} from '@/src/infrastructure/config/theme/theme'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import {useQuery} from '@tanstack/react-query'
import {FlatList, View} from 'react-native'
import {AreaCard} from '../components/AreaCard'
import {type Href} from 'expo-router'
import { useSQLiteContext } from 'expo-sqlite'
import { Area, ParsedArea } from '../types'



export const AreasScreen = () => {

	const db = useSQLiteContext()

	const getAreas = async () => {
		const result = await db.getAllAsync<Area>('SELECT * FROM Areas')
		const parsed: ParsedArea[] = result.map((area) => ({
			...area,
			images: JSON.parse(area.images),
		}))
		return parsed
	}


	const {data: areas} = useQuery({
		queryKey: ['areas'],
		queryFn: getAreas,
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
