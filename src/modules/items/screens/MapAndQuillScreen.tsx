import {
	View,
	Text,
	ScrollView,
	Platform,
	useWindowDimensions,
	StyleSheet,
	FlatList,
} from 'react-native'
import {Stack} from 'expo-router'
import {Image, ImageSource} from 'expo-image'
import {useQuery} from '@tanstack/react-query'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {
	dreamerPins,
	iseldaPins,
	LifebloodMarkers,
	mappingTools,
	otherPins,
	vendorPins,
} from '../data/data'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import {colors, globalStyles} from '@/src/infrastructure/config/theme/theme'
import {GoBack} from '@/src/shared/components/GoBack'
import {blurhash} from '@/src/infrastructure/config/constants/constans'
import DialogueDescription from '@/src/shared/components/dividers/DialogueDescription'
import {Subtitle} from '@/src/shared/components/ui/Subtitle'
import {useSQLiteContext} from 'expo-sqlite'
import {Item, ParsedItem} from '../types'

export const MapAndQuillScreen = ({id}: {id: string}) => {
	const {top} = useSafeAreaInsets()
	const {width, height} = useWindowDimensions()

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
		<View style={globalStyles.container}>
			<Stack.Screen
				options={{
					title: item.name,
					headerLeft: () => <GoBack />,
				}}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingTop: Platform.OS === 'ios' ? top + 100 : 0,
				}}
			>
				<View style={styles.imageContainer}>
					<Image
						source={{uri: item.images[0]}}
						contentFit='contain'
						style={{width: width, height: height * 0.25, marginHorizontal: 7}}
						placeholder={blurhash}
						transition={1000}
					/>
				</View>

				<DialogueDescription firstDescription={item.description_1} />

				<View style={styles.imageContainer}>
					<Image
						source={require('../../../assets/images/Map_and_Quill/Prompt.webp')}
						contentFit='contain'
						style={{width: width, height: height * 0.25, marginHorizontal: 7}}
						placeholder={blurhash}
						transition={1000}
					/>
				</View>

				<DialogueDescription
					firstDescription='Hold QUICK MAP to view a map of the current area'
					secondDescription='View a detailed map of Hallownest in the MAP pane of the INVENTORY'
				/>

				<Subtitle text='Mapping Tools' />
				<FlatList
					scrollEnabled={false}
					data={mappingTools}
					renderItem={({item}) => (
						<Card
							name={item.name}
							image={item.image}
							description={item.description}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>

				<Text style={{...styles.text, marginBottom: 20}}>
					The 4 markers sold by Iselda can be placed on the map on the inventory
					screen. Each set contains 6 markers.
				</Text>
				<FlatList
					scrollEnabled={false}
					data={LifebloodMarkers}
					renderItem={({item}) => (
						<Card
							name={item.name}
							image={item.image}
							description={item.description}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>

				<Subtitle text="Iselda's Pins" />
				<FlatList
					scrollEnabled={false}
					data={iseldaPins}
					renderItem={({item}) => (
						<Card
							name={item.name}
							image={item.image}
							description={item.description}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>

				<Subtitle text='Other Pins' />
				<FlatList
					scrollEnabled={false}
					data={otherPins}
					renderItem={({item}) => (
						<Card
							name={item.name}
							image={item.image}
							description={item.description}
						/>
					)}
					keyExtractor={(item) => item.id}
				/>

				<Subtitle text='Vendor Pins' />
				<FlatList
					scrollEnabled={false}
					data={vendorPins}
					renderItem={({item}) => <Card name={item.name} image={item.image} />}
					keyExtractor={(item) => item.id}
				/>
				<Subtitle text='Dreamer Pins' />
				<FlatList
					scrollEnabled={false}
					data={dreamerPins}
					renderItem={({item}) => <Card name={item.name} image={item.image} />}
					keyExtractor={(item) => item.id}
				/>

				<View style={{height: 20}} />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20,
	},
	text: {
		color: colors.textColor,
		marginTop: 10,
	},
})

interface Props {
	name: string
	image: ImageSource
	description?: string
}
const Card = ({name, image, description}: Props) => {
	const {width, height} = useWindowDimensions()

	return (
		<View style={cardStyles.container}>
			<View style={{alignItems: 'center', justifyContent: 'center'}}>
				<Image
					source={image}
					style={{width: width / 5, height: height / 8}}
					contentFit='contain'
					placeholder={blurhash}
					priority='high'
				/>
			</View>
			<View
				style={{
					...cardStyles.textContainer,
					justifyContent: !description ? 'center' : 'flex-start',
				}}
			>
				<Text style={cardStyles.title}>{name}</Text>
				{description && (
					<Text adjustsFontSizeToFit style={cardStyles.description}>
						{description}
					</Text>
				)}
			</View>
		</View>
	)
}

const cardStyles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		gap: 10,
		borderBottomColor: 'rgba(245, 245, 245, 0.5)',
		borderBottomWidth: 1,
		marginBottom: 20,
		paddingBottom: 20,
	},
	textContainer: {
		gap: 10,
		flex: 1,
	},
	title: {
		color: colors.textColor,
		fontSize: 24,
		fontWeight: 'bold',
	},
	description: {
		color: colors.textColor,
		fontSize: 16,
	},
})
