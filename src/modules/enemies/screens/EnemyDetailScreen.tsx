import {View, Text} from 'react-native'
import {useQuery} from '@tanstack/react-query'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import LayoutDetailScreen from '@/src/shared/components/ui/LayoutDetailScreen'
import {colors} from '@/src/infrastructure/config/theme/theme'
import {Subtitle} from '@/src/shared/components/ui/Subtitle'
import {dlcTypes} from '@/src/infrastructure/domain/entities'
import {useSQLiteContext} from 'expo-sqlite'
import {Enemy, ParsedEnemy} from '../types'

const EnemyDetailScreen = ({id}: {id: string}) => {
	const db = useSQLiteContext()

	const getEnemyById = async (id: string) => {
		const result = await db.getFirstAsync<Enemy>(
			'SELECT * FROM Enemies WHERE id = ?',
			[id],
		)

		if (!result) {
			throw new Error('Enemy not found')
		}

		const parsed: ParsedEnemy = {
			...result,
			images: JSON.parse(result.images),
			dream_nail_dialogue: result.dream_nail_dialogue
				? JSON.parse(result.dream_nail_dialogue)
				: null,
		}

		return parsed
	}
	const {data: enemy} = useQuery({
		queryKey: ['enemy', id],
		queryFn: () => getEnemyById(id),
		staleTime: 1000 * 60 * 60, //1 hour
	})

	if (!enemy) return <FullScreenLoader />

	return (
		<LayoutDetailScreen
			images={enemy.images}
			title={enemy.name}
			firstDescription={enemy.description_1}
			secondDescription={enemy.description_2}
			dlc={enemy.dlc}
		>
			{enemy.health > 0 && (
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						flex: 1,
						marginTop: 20,
					}}
				>
					<Text
						style={{
							color: colors.textColor,
							fontSize: 20,
							fontFamily: 'TrajanPro-Bold',
						}}
					>
						Health
					</Text>

					<Text style={{color: colors.textColor}}>{enemy.health}</Text>
				</View>
			)}

			{enemy.dlc !== dlcTypes.Bestiary ? (
				<>
					<Subtitle text='DLC' />
					<Text style={{color: colors.textColor}}>{enemy.dlc}</Text>
				</>
			) : null}

			{enemy.dream_nail_dialogue && (
				<View>
					<Subtitle text='Dream Nail Dialogue' />
					{enemy.dream_nail_dialogue.map((dialogue, index) => (
						<Text key={index} style={{color: colors.textColor}}>
							{dialogue}
						</Text>
					))}
				</View>
			)}

			<Subtitle text='Location' />
			<Text style={{color: colors.textColor}}>{enemy.location}</Text>
		</LayoutDetailScreen>
	)
}

export default EnemyDetailScreen
