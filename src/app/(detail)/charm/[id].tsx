import {useLocalSearchParams} from 'expo-router'
import {CharmDetailScreen} from '@/src/modules/charms'
import {NoIdScreen} from '@/src/shared/components/ui/NoIdScreen'

const CharmDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (!id) {
		return <NoIdScreen />
	}

	return <CharmDetailScreen id={id} />
}

export default CharmDetailPage
