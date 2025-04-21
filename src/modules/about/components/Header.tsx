import {blurhash} from '@/src/infrastructure/config/constants/constans'
import {colors} from '@/src/infrastructure/config/theme/theme'
import {Image} from 'expo-image'
import {Platform, StyleSheet, Text, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

export const Header = () => {
	const {top} = useSafeAreaInsets()

	return (
		<View
			style={{
				...styles.header,
				marginTop: Platform.OS === 'ios' ? top + 100 : 20,
			}}
		>
			<Image
				source={require('../../../assets/icon.png')}
				style={styles.headerImage}
				contentFit='contain'
				placeholder={blurhash}
			/>
			<View>
				<Text style={styles.text}>HKDB</Text>
				<Text style={styles.textMuted}>1.0.0</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	headerImage: {
		width: 50,
		height: 50,
	},
	text: {
		color: colors.textColor,
		fontSize: 18,
		fontWeight: 'bold',
	},
	textMuted: {
		color: colors.textColor,
		opacity: 0.5,
	},
})
