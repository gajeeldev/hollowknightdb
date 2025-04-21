import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import * as SplashScreen from 'expo-splash-screen'
import {useAppReady} from '../modules/core/hooks/useAppReady'
import {useCallback} from 'react'
import {FullScreenLoader} from '../shared/components/ui/FullScreenLoader'
import {darkTheme} from '../infrastructure/config/theme/theme'
import {ThemeProvider} from '@react-navigation/native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {Stack} from 'expo-router'
import {Platform} from 'react-native'

SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient()

export const unstable_settings = {
	initialRouteName: '(drawer)',
}

export default function RootLayout() {
	const {appIsReady} = useAppReady()

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync()
		}
	}, [appIsReady])

	if (!appIsReady) {
		return <FullScreenLoader />
	}

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider value={darkTheme}>
				<GestureHandlerRootView style={{flex: 1}} onLayout={onLayoutRootView}>
					<Stack
						screenOptions={{
							headerBlurEffect: 'regular',
							headerTransparent: Platform.OS === 'ios',
							headerLargeTitle: true,
							headerLargeTitleStyle: {
								fontFamily: 'TrajanPro-Bold',
								fontSize: 25,
							},
							headerTitleStyle: {
								fontFamily: 'TrajanPro-Bold',
							},
							headerTitleAlign: 'center',
							animation: 'slide_from_right',
						}}
					>
						{/* Drawer */}
						<Stack.Screen name='(drawer)' options={{headerShown: false}} />

						<Stack.Screen name='about' />

						{/* Detail */}
						<Stack.Screen name='(detail)/area/[id]' options={{title: 'Area'}} />
						<Stack.Screen name='(detail)/boss/[id]' options={{title: 'Boss'}} />

						<Stack.Screen
							name='(detail)/charm/[id]'
							options={{title: 'Charm'}}
						/>

						<Stack.Screen
							name='(detail)/enemy/[id]'
							options={{title: 'Enemy'}}
						/>
						<Stack.Screen name='(detail)/item/[id]' options={{title: 'Item'}} />

						<Stack.Screen name='(detail)/npc/[id]' options={{title: 'NPC'}} />
						<Stack.Screen
							name='(detail)/spell_and_ability/[id]'
							options={{title: 'Spell & Ability'}}
						/>
					</Stack>
				</GestureHandlerRootView>
			</ThemeProvider>
		</QueryClientProvider>
	)
}
