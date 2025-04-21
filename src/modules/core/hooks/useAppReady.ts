import {darkTheme} from '@/src/infrastructure/config/theme/theme'
import * as SystemUI from 'expo-system-ui'
import {useEffect, useState} from 'react'
import * as Font from 'expo-font'
import {Ionicons} from '@expo/vector-icons'
import {customFonts} from '@/src/infrastructure/config/constants/constans'

SystemUI.setBackgroundColorAsync(darkTheme.colors.background)

export const useAppReady = () => {
	const [appIsReady, setAppIsReady] = useState(false)

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync(Ionicons.font)
				await Font.loadAsync(customFonts)
			} catch (e) {
				console.warn(e)
			} finally {
				setAppIsReady(true)
			}
		}

		prepare()
	}, [])

	return {
		appIsReady,
	}
}
