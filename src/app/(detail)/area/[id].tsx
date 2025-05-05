import {useLocalSearchParams} from 'expo-router'
import {AreaDetailScreen} from '@/src/modules/areas'
import {NoIdScreen} from '@/src/shared/components/ui/NoIdScreen'

const AreaDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (typeof id !== 'string') {
		return <NoIdScreen />
	}

	return (
		<>
			<AreaDetailScreen id={id} />
		</>
	)
}

export default AreaDetailPage
