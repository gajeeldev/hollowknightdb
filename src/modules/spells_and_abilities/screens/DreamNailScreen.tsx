import {
	View,
	Text,
	useWindowDimensions,
	ScrollView,
	Platform,
	FlatList,
	StyleSheet,
} from 'react-native'
import {Stack} from 'expo-router'
import {Image} from 'expo-image'
import {useQuery} from '@tanstack/react-query'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {
	DreamBoss,
	EssenceRewards,
	RegularEnemies,
	WarriorDream,
} from '../data/data'
import {FullScreenLoader} from '@/src/shared/components/ui/FullScreenLoader'
import {colors, globalStyles} from '@/src/infrastructure/config/theme/theme'
import {GoBack} from '@/src/shared/components/GoBack'
import {blurhash} from '@/src/infrastructure/config/constants/constans'
import DialogueDescription from '@/src/shared/components/dividers/DialogueDescription'
import {Subtitle} from '@/src/shared/components/ui/Subtitle'

export const DreamNailScreen = ({id}: {id: string | string[]}) => {
	const {top} = useSafeAreaInsets()
	const {width, height} = useWindowDimensions()

	const {data: spellAndAbility} = useQuery({
		queryKey: ['spellAndAbility', id],
		// queryFn: () => getSpellAndAbilityById(id),
		staleTime: 1000 * 60 * 60, //1 hour
	})

	if (!spellAndAbility) return <FullScreenLoader />

	return (
		<View style={globalStyles.container}>
			<Stack.Screen
				options={{
					title: spellAndAbility.name,
					headerLeft: () => <GoBack />,
				}}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingTop: Platform.OS === 'ios' ? top + 100 : 0,
				}}
			>
				<View style={styles.imageContainer}>
					<Image
						source={{uri: spellAndAbility.images[0]}}
						contentFit='contain'
						style={{width: width, height: height * 0.25, marginHorizontal: 7}}
						placeholder={blurhash}
						transition={1000}
					/>
				</View>

				<DialogueDescription
					firstDescription={spellAndAbility.inventory_description_1}
					secondDescription={spellAndAbility.inventory_description_2}
				/>

				<View style={styles.imageContainer}>
					<Image
						source={{uri: spellAndAbility.images[1]}}
						contentFit='contain'
						style={{width: width, height: height * 0.25, marginHorizontal: 7}}
						placeholder={blurhash}
						transition={1000}
					/>
				</View>

				<DialogueDescription
					firstDescription={spellAndAbility.prompt_description_1}
					secondDescription={spellAndAbility.prompt_description_2}
				/>

				<Subtitle text='Type' />
				<Text style={{color: colors.textColor}}>{spellAndAbility.type}</Text>

				<Subtitle text='Function' />
				<Text style={{color: colors.textColor}}>
					{spellAndAbility.function}
				</Text>

				<Subtitle text='How to acquire' />
				<Text style={{color: colors.textColor}}>
					{spellAndAbility.how_to_acquire}
				</Text>

				<Subtitle text='Awoken Dream Nail' />
				<Text style={{color: colors.textColor}}>
					After collecting 1800 Essence, the Dream Nail can be awoken. This
					allows access to dreams and memories that were previously hidden. The
					Awoken Dream Nail can be used on the corpse of the Kingsmould in the
					Palace Grounds, which grants entry to the White Palace. It can now
					also be used to view the Dream Nail dialogue of the Shade Cloak
					creature in the Abyss. This creature has different Dream Nail dialogue
					depending on whether or not Void Heart has been obtained.
				</Text>

				<View style={styles.imageContainer}>
					<Image
						source={{uri: spellAndAbility.images[2]}}
						contentFit='contain'
						style={{
							width: width,
							height: height * 0.25,
							marginHorizontal: 7,
							marginBottom: 10,
						}}
						placeholder={blurhash}
						transition={1000}
					/>
				</View>

				<DialogueDescription
					firstDescription='Allows the wielder to cut through the veil between dreams and waking. Can be used to reveal hidden dreams or open gateways.'
					secondDescription='The power of the Dream Nail has fully awoken, allowing entry into certain protected memories.'
				/>

				<View style={styles.imageContainer}>
					<Image
						source={{uri: spellAndAbility.images[3]}}
						contentFit='contain'
						style={{width: width, height: height * 0.25, marginHorizontal: 7}}
						placeholder={blurhash}
						transition={1000}
					/>
				</View>

				<DialogueDescription
					firstDescription='Hold DREAM NAIL to charge and slash with the nail.'
					secondDescription='The Dream Nail is upgraded. It can break into even the most protected mind.'
				/>
				<Subtitle text='Essence' />
				<View style={{flexDirection: 'row'}}>
					<Image
						source={require('../../../assets/images/Essence.webp')}
						contentFit='cover'
						style={{width: 50, height: 50}}
						placeholder={blurhash}
						transition={1000}
					/>

					<View style={{width: width * 0.8}}>
						<Text style={{color: colors.textColor}}>
							Essence is the energy gained from multiple sources after obtaining
							the Dream Nail. After obtaining certain amounts of Essence, the
							Knight can return to the Seer for rewards. A total of 2400 is
							needed for all in-game rewards and achievements, though up to 3208
							essence is obtainable from one-time sources.
						</Text>
						<Text style={styles.text}>
							Warping using the Dreamgate uses 1 Essence per warp.
						</Text>
					</View>
				</View>

				<Subtitle text='Essence Sources' />
				<Text style={{color: colors.textColor}}>
					Using Dream Nail on a Spirit (26 total)
				</Text>
				<Text style={{color: colors.textColor}}>
					Collecting Essence spawned by a Whispering Root (482 total)
				</Text>
				<Text style={styles.text}>Defeating a Warrior Dream (1100 total)</Text>
				<FlatList
					style={styles.list}
					data={WarriorDream}
					renderItem={({item}) => (
						<Text style={{color: colors.textColor}}>• {item}</Text>
					)}
					keyExtractor={(item) => item}
					scrollEnabled={false}
				/>
				<Text style={styles.text}>Defeating a Dream Boss (1600 total)</Text>
				<FlatList
					style={styles.list}
					data={DreamBoss}
					renderItem={({item}) => (
						<Text style={{color: colors.textColor}}>• {item}</Text>
					)}
					keyExtractor={(item) => item}
					scrollEnabled={false}
				/>
				<Text style={styles.text}>
					Regular enemies have a chance to drop Essence:
				</Text>
				<FlatList
					style={styles.list}
					data={RegularEnemies}
					renderItem={({item}) => (
						<Text style={{color: colors.textColor}}>• {item}</Text>
					)}
					keyExtractor={(item) => item}
					scrollEnabled={false}
				/>
				<Subtitle text='Essence rewards from the Seer' />
				<FlatList
					style={styles.list}
					data={EssenceRewards}
					renderItem={({item}) => (
						<Text style={{color: colors.textColor}}>• {item}</Text>
					)}
					keyExtractor={(item) => item}
					scrollEnabled={false}
				/>
				<Subtitle text='Lore' />
				<Text style={{color: colors.textColor}}>
					The Dream Nail is a sacred weapon and talisman, which can cut the veil
					that separates the waking world from dreams. It appears to have been
					made by the Moth Tribe. The Dream Nail allows its user to not only
					read the thoughts of an entity, or even inanimate objects, but also
					enter specific sections of the Dream Realm.
				</Text>
				<Text style={styles.text}>
					Before the Knight acquires it, the Dream Nail has been dulled over
					time, requiring a significant amount of Essence to awaken it.
				</Text>
				<Text style={styles.text}>
					Essence is the fragments of light that form dreams, which can take the
					shape of those who have passed away. Dreams and memories cling onto
					the Dream Nail once the Essence is collected.
				</Text>
				<Text style={styles.text}>
					When sufficiently charged with Essence, the Dream Nail also allows the
					wielder to teleport from one place to another through the Dream Realm.
					The user warps by imagining a great gate to a location connected to
					them, provided the location has a strong connection to dreams.
				</Text>
				<Text style={styles.text}>
					The user of the Dream Nail is referred to as the "Wielder", an entity
					whose arrival the Moth Tribe had awaited. The Wielder's purpose is to
					collect Essence and hunt memories all across Hallownest. Once 2400 or
					more Essence has been acquired, the Seer declares the Knight to be the
					Wielder her tribe had long dreamed of.
				</Text>

				<View style={{height: 20}} />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20,
	},
	text: {
		color: colors.textColor,
		marginTop: 10,
	},
	list: {
		marginTop: 10,
		marginLeft: 10,
	},
})
