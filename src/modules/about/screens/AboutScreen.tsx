import {colors, globalStyles} from '@/src/infrastructure/config/theme/theme'
import * as MailComposer from 'expo-mail-composer'
import {Stack} from 'expo-router'
import * as WebBrowser from 'expo-web-browser'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {Header} from '../components/Header'
import {Item} from '../components/Item'
import {GoHome} from '@/src/shared/components/GoHome'
import {Subtitle} from '@/src/shared/components/ui/Subtitle'

export const AboutScreen = () => {
	const sendEmail = async () => {
		await MailComposer.composeAsync({
			recipients: ['gajeeldev@gmail.com'],
			subject: 'HKDB - Report an issue',
		})
	}

	const openBrowser = async (url: string) => {
		await WebBrowser.openBrowserAsync(url)
	}

	return (
		<ScrollView style={globalStyles.container}>
			<Stack.Screen
				options={{headerLeft: () => <GoHome />, animation: 'slide_from_bottom'}}
			/>
			<Header />

			{/* Report an Issue */}
			<Subtitle text='Report an Issue' />
			<Item text='Send an Email' icon='mail' onPress={sendEmail} />

			{/* Links */}
			{/* <Subtitle text="Links" />
      <Item
        text="Github"
        icon="logo-github"
        onPress={() => openBrowser('https://github.com/gajeeldev/hkdb')}
      /> */}

			{/* Resources */}
			<Subtitle text='Resources' />
			<Item
				text='Hollow Knight Wiki'
				image={require('../../../assets/icon.png')}
				onPress={() =>
					openBrowser('https://hollowknight.wiki/w/Hollow_Knight_Wiki')
				}
			/>
			<Item
				text='Hollow Knight Wiki By fextralife'
				image={require('../../../assets/icon.png')}
				onPress={() =>
					openBrowser(
						'https://hollowknight.wiki.fextralife.com/Hollow+Knight+Wiki',
					)
				}
			/>
			<Item
				text='SplashScreen Image By Pedro Silva'
				icon='logo-pinterest'
				onPress={() =>
					openBrowser(
						'https://www.pinterest.com/pedrolucassilvacorra/?invite_code=171af81c1c3b438f89fac72db572661a&sender=811633301503638107',
					)
				}
			/>

			{/* Support me */}
			<Subtitle text='Support Me' />
			<Text style={styles.textMuted}>
				If you like the app, please consider supporting me. I appreciate it!
			</Text>
			<Item
				text='Paypal'
				icon='logo-paypal'
				onPress={() =>
					openBrowser('https://www.paypal.com/paypalme/GilbertAcosta95')
				}
			/>
			<Item
				text='Patreon'
				image={require('../../../assets/patreon.png')}
				onPress={() => openBrowser('https://patreon.com/gajeeldev')}
			/>

			<View style={{height: 20}} />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
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
