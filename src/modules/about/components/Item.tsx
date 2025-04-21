import {Ionicons} from '@expo/vector-icons'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import {Image} from 'expo-image'
import {blurhash} from '@/src/infrastructure/config/constants/constans'
import {colors} from '@/src/infrastructure/config/theme/theme'

interface Props {
	text: string
	icon?: keyof typeof Ionicons.glyphMap
	image?: string
	onPress?: () => void
}

export const Item = ({text, icon, image, onPress}: Props) => {
	return (
		<Pressable
			onPress={onPress}
			style={({pressed}) => ({...styles.container, opacity: pressed ? 0.7 : 1})}
		>
			<View style={styles.imageContainer}>
				{image ? (
					<Image
						priority='high'
						source={image}
						style={styles.image}
						contentFit='contain'
						placeholder={blurhash}
					/>
				) : (
					<Ionicons name={icon} size={24} color={colors.textColor} />
				)}

				<Text style={styles.text}>{text}</Text>
			</View>
			<Ionicons name='chevron-forward' size={24} color={colors.textColor} />
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 10,
	},
	imageContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		width: 24,
		height: 24,
	},
	text: {
		color: colors.textColor,
		fontSize: 16,
		marginLeft: 10,
	},
})
