import {Ionicons} from '@expo/vector-icons'
import {useRouter} from 'expo-router'
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native'

export const GoHome = () => {
	const router = useRouter()

	return (
		<TouchableOpacity onPress={() => router.replace('/')}>
			<View style={styles.container}>
				<Ionicons
					name={Platform.OS === 'ios' ? 'chevron-back-outline' : 'arrow-back'}
					size={26}
					color='white'
					style={{left: Platform.OS === 'ios' ? -2 : 0}}
				/>
			</View>
		</TouchableOpacity>
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
