import {useLocalSearchParams} from 'expo-router'
import {
	DreamNailScreen,
	SpellAndAbilityDetailScreen,
} from '@/src/modules/spells_and_abilities'
import {NoIdScreen} from '@/src/shared/components/ui/NoIdScreen'

const SpellAndAbilityDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (typeof id !== 'string') {
		return <NoIdScreen />
	}

	if (id === '71fe0163-3067-43ac-94da-8a9765f3f23f') {
		return <DreamNailScreen id={id} />
	}

	return <SpellAndAbilityDetailScreen id={id} />
}

export default SpellAndAbilityDetailPage
