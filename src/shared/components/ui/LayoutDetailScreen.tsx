import {Stack} from 'expo-router'
import {
	FlatList,
	Platform,
	ScrollView,
	StyleSheet,
	useWindowDimensions,
	View,
} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {GoBack} from '../GoBack'
import {Image} from 'expo-image'
import {blurhash} from '@/src/infrastructure/config/constants/constans'
import DialogueDescription from '../dividers/DialogueDescription'

interface Props {
	images: string[]
	children: React.ReactNode
	title: string
	firstDescription: string
	secondDescription?: string | null
	dlc?: string
}

const LayoutDetailScreen = ({
	images,
	children,
	title,
	firstDescription,
	secondDescription,
	dlc,
}: Props) => {
	const {top} = useSafeAreaInsets()
	const {width, height} = useWindowDimensions()

	return (
		<View style={{flex: 1}}>
			<Stack.Screen
				options={{
					title: title,
					headerLeft: () => <GoBack />,
				}}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingTop: Platform.OS === 'ios' ? top + 100 : 0,
				}}
			>
				<FlatList
					scrollEnabled={images.length > 1}
					data={images}
					style={{marginBottom: 20}}
					keyExtractor={(item) => item}
					renderItem={({item}) => (
						<View style={styles.imageContainer}>
							<Image
								source={{uri: item}}
								contentFit='contain'
								style={{
									width: width,
									height: height * 0.35,
									marginHorizontal: 7,
								}}
								placeholder={blurhash}
								transition={1000}
							/>
						</View>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>

				<View style={{paddingHorizontal: 15}}>
					<DialogueDescription
						firstDescription={firstDescription}
						secondDescription={
							secondDescription ? secondDescription : undefined
						}
						dlc={dlc ? dlc : undefined}
					/>

					{children}
				</View>

				<View style={{height: 20}} />
			</ScrollView>
		</View>
	)
}

export default LayoutDetailScreen

const styles = StyleSheet.create({
	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
})
