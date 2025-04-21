import { Theme } from "@react-navigation/native"
import { StyleSheet } from "react-native"

export const colors = {
	textColor: '#f5f5f5',
	cardBackground: '#3A3A3A',
}

export const darkTheme: Theme = {
	dark: true,
  fonts: {
    heavy: {
      fontFamily: 'Poppins-ExtraBold',
      fontWeight: '800',
    },
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: '600',
    },
    bold: {
      fontFamily: 'Poppins-Bold',
      fontWeight: 'bold',
    },
  },
	colors: {
		primary: 'blue',
		background: '#252525',
		card: '#000000',
		text: '#f5f5f5',
		border: '#ffffff',
		notification: '#ffffff',
	},
}

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
	},
})
