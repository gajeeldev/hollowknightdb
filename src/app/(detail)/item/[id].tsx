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

	if (!id) {
		return <NoIdScreen />
	}

	//TODO: change ids

	if (id === '66259913-6967-46db-b751-941376e6961a') {
		return <DelicateFlowerScreen id={id} />
	}

	if (id === 'd5efe0da-7631-4a9f-a5aa-5ddd0883a508') {
		return <HunterMarkScreen id={id} />
	}

	if (id === 'f49f0bbe-2568-450e-be27-eb39ad994214') {
		return <MapAndQuillScreen id={id} />
	}

	return <ItemDetailScreen id={id} />
}

export default ItemDetailPage
