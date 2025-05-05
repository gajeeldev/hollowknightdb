import {useLocalSearchParams} from 'expo-router'
import {CharmDetailScreen} from '@/src/modules/charms'
import {NoIdScreen} from '@/src/shared/components/ui/NoIdScreen'

const CharmDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (typeof id !== 'string') {
		return <NoIdScreen />
	}

	return <CharmDetailScreen id={id} />
}

export default CharmDetailPage
