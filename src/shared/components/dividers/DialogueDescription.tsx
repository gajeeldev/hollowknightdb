import {blurhash} from '@/src/infrastructure/config/constants/constans'
import {colors} from '@/src/infrastructure/config/theme/theme'
import {dlcTypes} from '@/src/infrastructure/domain/entities'
import {Image} from 'expo-image'
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native'

interface Props {
	firstDescription: string
	secondDescription?: string | null
	dlc?: string
}

const DialogueDescription = ({
	firstDescription,
	secondDescription,
	dlc,
}: Props) => {
	const {width, height, fontScale} = useWindowDimensions()

	let image = require('../../../../src/assets/images/divider/Dialogue_Top.webp')

	if (dlc === dlcTypes.Bestiary || dlc === dlcTypes.Godmaster) {
		image = require('../../../../src/assets/images/divider/Bestiary.webp')
	}
	if (dlc === dlcTypes.HiddenDreams) {
		image = require('../../../../src/assets/images/divider/Dreamjournal.webp')
	}
	if (dlc === dlcTypes.TheGrimmTroupe) {
		image = require('../../../../src/assets/images/divider/Troupejournal.webp')
	}

	return (
		<View style={styles.container}>
			{/* Dialogue Top */}
			<Image
				source={image}
				placeholder={blurhash}
				style={{
					...styles.shadowImage,
					marginBottom: height * 0.01,
					width: width * 0.8,
					height: height * 0.06,
				}}
				contentFit='contain'
				transition={1000}
				priority={'high'}
			/>

			<Text
				style={{
					...styles.description,
					fontSize: fontScale * 18,
				}}
			>
				{firstDescription}
			</Text>

			{/* Second Description */}
			{secondDescription && (
				<SecondDescription
					width={width}
					height={height}
					fontScale={fontScale}
					description={secondDescription}
				/>
			)}

			{/* Dialogue Bottom */}
			<Image
				source={require('../../../../src/assets/images/divider/Dialogue_Bottom.webp')}
				placeholder={blurhash}
				priority={'high'}
				style={[
					{
						marginTop: height * 0.01,
						width: width * 0.8,
						height: height * 0.04,
					},
					styles.shadowImage,
				]}
				contentFit='contain'
				transition={500}
			/>
		</View>
	)
}

export default DialogueDescription

interface SecondDescriptionProps {
	width: number
	height: number
	fontScale: number
	description: string
}
const SecondDescription = ({
	width,
	height,
	fontScale,
	description,
}: SecondDescriptionProps) => {
	return (
		<>
			{/** divider */}
			<View
				style={[
					{
						width: width * 0.7,
						height: height * 0.001,
						marginVertical: height * 0.01,
						opacity: 0.5,
						backgroundColor: colors.textColor,
					},
					styles.shadowImage,
				]}
			/>

			<Text
				style={{
					...styles.description,
					fontSize: fontScale * 18,
				}}
			>
				{description}
			</Text>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	shadowImage: {
		shadowColor: '#000',
		shadowOffset: {
			height: 2,
			width: 0,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	description: {
		color: colors.textColor,
		fontStyle: 'italic',
		textAlign: 'center',
	},
})
