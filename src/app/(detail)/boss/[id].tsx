import {useLocalSearchParams} from 'expo-router'
import {BossDetailScreen} from '@/src/modules/bosses'
import {NoIdScreen} from '@/src/shared/components/ui/NoIdScreen'

const BossDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (typeof id !== 'string') {
		return <NoIdScreen />
	}

	return <BossDetailScreen id={id} />
}

export default BossDetailPage
