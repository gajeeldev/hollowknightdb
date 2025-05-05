import {useLocalSearchParams} from 'expo-router'
import {
	DelicateFlowerScreen,
	HunterMarkScreen,
	MapAndQuillScreen,
} from '@/src/modules/items'
import ItemDetailScreen from '@/src/modules/items/screens/ItemDetailScreen'
import {NoIdScreen} from '@/src/shared/components/ui/NoIdScreen'

const ItemDetailPage = () => {
	const {id} = useLocalSearchParams()

	if (typeof id !== 'string') {
		return <NoIdScreen />
	}

	if (id === 'a5ec4500-a2e0-47c3-af14-108da2d1244e') {
		return <DelicateFlowerScreen id={id} />
	}

	if (id === 'fcd64741-41b2-4179-a1b7-a21cb956588f') {
		return <HunterMarkScreen id={id} />
	}

	if (id === '76e9460b-0cfa-474f-b1a1-1ef1f1ed9f09') {
		return <MapAndQuillScreen id={id} />
	}

	return <ItemDetailScreen id={id} />
}

export default ItemDetailPage
