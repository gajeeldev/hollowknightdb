import {colors, darkTheme} from '@/src/infrastructure/config/theme/theme'
import {ActivityIndicator, Platform, StyleSheet, Text, View} from 'react-native'

export const FullScreenLoader = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={'large'} color={colors.textColor} />

			{Platform.OS === 'ios' ? (
				<Text style={styles.text}>Loading...</Text>
			) : null}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: darkTheme.colors.background,
	},
	text: {
		color: colors.textColor,
		fontSize: 15,
		opacity: 0.5,
	},
})
