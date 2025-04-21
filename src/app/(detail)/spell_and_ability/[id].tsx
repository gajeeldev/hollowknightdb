import {useLocalSearchParams} from 'expo-router'
import {
	DreamNailScreen,
	SpellAndAbilityDetailScreen,
} from '@/src/modules/spells_and_abilities'
import {NoIdScreen} from '@/src/shared/components/ui/NoIdScreen'

const SpellAndAbilityDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (!id) {
		return <NoIdScreen />
	}

	// TODO: change ids
	if (id === '40393504-1884-4717-a3b7-b50d6394be7e') {
		return <DreamNailScreen id={id} />
	}

	return <SpellAndAbilityDetailScreen id={id} />
}

export default SpellAndAbilityDetailPage
