import {FlatList, Text} from 'react-native'
import {useQuery} from '@tanstack/react-query'
import {PossibleRecipients, WaysToDestroyTheFlower} from '../data/data'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import LayoutDetailScreen from '@/src/shared/components/ui/LayoutDetailScreen'
import {Subtitle} from '@/src/shared/components/ui/Subtitle'
import {colors} from '@/src/infrastructure/config/theme/theme'

export const DelicateFlowerScreen = ({id}: {id: string | string[]}) => {
	const {data: item} = useQuery({
		queryKey: ['item', id],
		// queryFn: () => getItemById(id),
		staleTime: 1000 * 60 * 60, //1 hour
	})

	if (!item) return <FullScreenLoader />

	return (
		<LayoutDetailScreen
			images={item.images}
			title={item.item}
			firstDescription={item.description_1}
			secondDescription={item.description_2}
		>
			<Subtitle text='Effects' />
			<Text style={{color: colors.textColor}}>{item.effects}</Text>
			<Subtitle text='Type' />
			<Text style={{color: colors.textColor}}>{item.type}</Text>

			<Subtitle text='Lore' />
			<Text style={{color: colors.textColor}}>
				The flowers originate from outside of Hallownest from a place known as
				"lands serene". They were brought to the kingdom by the great knight
				Ze'mer, who is now the Grey Mourner. The delicate flowers are rare,
				sacred objects which have a pure aura. They glow faintly with pale
				light.
			</Text>

			<Text style={{color: colors.textColor, marginTop: 10}}>
				There is a rare power hidden in their fragile petals. When a flower
				comes in contact with Void, it causes both the bug holding the flower
				and the Void to disappear. The flower remains behind, only slightly
				tinged by Void. Godmaster content Godseeker wonders if the flowers are
				splinters of something greater, but is unable to figure out whether this
				is true, as she cannot detect a resonance from it.
			</Text>

			<Subtitle text='How to acquire' />
			{item.how_to_acquire.map((howToAcquire, index) => (
				<Text style={{color: colors.textColor}} key={index}>
					{howToAcquire}
				</Text>
			))}

			<Subtitle text='Use' />
			<Text style={{color: colors.textColor}}>{item.use}</Text>

			<Subtitle text='Ways to Destroy the Flower' />
			<FlatList
				data={WaysToDestroyTheFlower}
				renderItem={({item}) => (
					<Text style={{color: colors.textColor}}>• {item}</Text>
				)}
				keyExtractor={(item) => item}
				scrollEnabled={false}
			/>

			<Subtitle text='Possible Recipients' />
			<FlatList
				data={PossibleRecipients}
				renderItem={({item}) => (
					<Text style={{color: colors.textColor}}>• {item}</Text>
				)}
				keyExtractor={(item) => item}
				scrollEnabled={false}
			/>
		</LayoutDetailScreen>
	)
}
