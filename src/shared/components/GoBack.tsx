import {colors} from '@/src/infrastructure/config/theme/theme'
import {Ionicons} from '@expo/vector-icons'
import {useRouter} from 'expo-router'
import {Platform, Pressable, StyleSheet, View} from 'react-native'

export const GoBack = () => {
	const router = useRouter()

	return (
		<Pressable onPress={() => router.back()}>
			<View style={styles.container}>
				<Ionicons
					name={Platform.OS === 'ios' ? 'chevron-back-outline' : 'arrow-back'}
					size={26}
					color={colors.textColor}
					style={{left: Platform.OS === 'ios' ? -2 : 0}}
				/>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(245, 245, 245, 0.15)',
		borderRadius: 24,
		padding: 3,
	},
})
