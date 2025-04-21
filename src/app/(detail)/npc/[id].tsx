import {useLocalSearchParams} from 'expo-router'
import NpcDetailScreen from '@/src/modules/npcs/screens/NpcDetailScreen'
import {NoIdScreen} from '@/src/shared/components/ui/NoIdScreen'

const NpcDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (!id) {
		return <NoIdScreen />
	}
	return <NpcDetailScreen id={id} />
}

export default NpcDetailPage
