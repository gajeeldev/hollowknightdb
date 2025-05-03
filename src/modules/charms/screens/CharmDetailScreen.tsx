import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import LayoutDetailScreen from '@/src/shared/components/ui/LayoutDetailScreen'
import {Subtitle} from '@/src/shared/components/ui/Subtitle'
import {useQuery} from '@tanstack/react-query'
import {Image} from 'expo-image'
import {useSQLiteContext} from 'expo-sqlite'
import {Text, View} from 'react-native'
import {Charm, ParsedCharm} from '../types'

export const CharmDetailScreen = ({id}: {id: string}) => {
	const db = useSQLiteContext()

	const getCharmById = async (id: string) => {
		const result = await db.getFirstAsync<Charm>(
			'SELECT * FROM Charms WHERE id = ?',
			[id],
		)

		if (!result) {
			throw new Error('Charm not found')
		}

		const parsed: ParsedCharm = {
			...result,
			images: JSON.parse(result.images),
			effect: JSON.parse(result.effect),
		}

		return parsed
	}
	const {data: charm} = useQuery({
		queryKey: ['charm', id],
		queryFn: () => getCharmById(id),
		staleTime: 1000 * 60 * 60, //1 hour
	})

	if (!charm) return <FullScreenLoader />

	return (
		<LayoutDetailScreen
			images={charm.images}
			title={charm.name}
			firstDescription={charm.description_1}
			secondDescription={charm.description_2}
		>
			{charm.notches && (
				<View>
					<Subtitle text='Notches' />
					<View style={{flexDirection: 'row'}}>
						{Array.from({length: charm.notches}, (_, index) => (
							<Image
								key={`notch-${index}`}
								source={require('../../../assets/icons/Notch.webp')}
								style={{width: 50, height: 50}}
								transition={1000}
							/>
						))}
					</View>
				</View>
			)}

			<Subtitle text='Effect' />
			<Text style={{color: '#F5F5F5'}}>{charm.effect}</Text>

			<Subtitle text='Usefulness' />
			<Text style={{color: '#F5F5F5'}}>{charm.usefulness}</Text>

			<Subtitle text='How to acquire' />
			<Text style={{color: '#F5F5F5'}}>{charm.how_to_acquire}</Text>
		</LayoutDetailScreen>
	)
}
