import {useLocalSearchParams} from 'expo-router'
import EnemyDetailScreen from '@/src/modules/enemies/screens/EnemyDetailScreen'
import {NoIdScreen} from '@/src/shared/components/ui/NoIdScreen'

const EnemyDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (!id) {
		return <NoIdScreen />
	}
	return <EnemyDetailScreen id={id} />
}

export default EnemyDetailPage
