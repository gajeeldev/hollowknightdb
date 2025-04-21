import {blurhash} from '@/src/infrastructure/config/constants/constans'
import {colors, globalStyles} from '@/src/infrastructure/config/theme/theme'
import DialogueDescription from '@/src/shared/components/dividers/DialogueDescription'
import {Subtitle} from '@/src/shared/components/ui/Subtitle'
import {Image} from 'expo-image'
import {
	ScrollView,
	StyleSheet,
	Text,
	useWindowDimensions,
	View,
} from 'react-native'

export const KnightScreen = () => {
	const {width, height} = useWindowDimensions()


	return (
		<View style={globalStyles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{alignItems: 'center', marginTop: 20}}>
					<Image
						source={require('../../../assets/description-image.webp')}
						style={{
							marginTop: 20,
							width: width * 0.5,
							height: height * 0.35,
						}}
						placeholder={blurhash}
						contentFit='cover'
						transition={1000}
						priority='high'
					/>
				</View>

				<DialogueDescription firstDescription='An enigmatic wanderer who descends into Hallownest carrying only a broken nail to fend off foes.' />

				{/* Lore */}
				<View>
					<Subtitle text='Lore' />
					<View>
						<Text
							style={{
								color: colors.textColor,
								fontSize: 16,
							}}
						>
							The Knight is a discarded Vessel. They are the child of the Pale
							King and the White Lady, born in the Abyss with Void inside their
							shell. Hornet is the Knight's sister through their shared father.
							Like the rest of their Vessel siblings, the Knight is genderless.
						</Text>

						<Text style={styles.text}>
							After climbing out of their birthplace in the Abyss, the Knight
							witnessed their sibling, the Hollow Knight, being taken out of the
							Abyss by the Pale King. The entrance to the Abyss was sealed,
							causing the Knight to fall back down. Sometime after this, despite
							the entrance being sealed, the Knight and some of their siblings
							managed to escape the Abyss.
						</Text>

						<Text style={styles.text}>
							Eventually, the Knight ended up wandering outside of Hallownest
							for unknown reasons. Spending time in this area caused the Knight
							to lose their memories, but being there did give them a certain
							resilience. They returned to Hallownest after a call went out from
							either the Radiance or the Hollow Knight.
						</Text>
					</View>
				</View>

				{/* In-Game Events */}
				<View>
					<Subtitle text='In-game events' />
					<View>
						<Text
							style={{
								color: colors.textColor,
								fontSize: 16,
							}}
						>
							At the beginning of the game, the Knight is equipped with only
							their Old Nail and the ability to heal themself using SOUL.
							Throughout the game, the Knight gains access to new powers, Items,
							and Charms to help them through their journey.
						</Text>
						<Text style={styles.text}>
							After encountering the Dreamers in the Resting Grounds, the Knight
							acquires the Dream Nail. With this weapon, they can break the
							Seals in the Temple of the Black Egg by killing each of the three
							Dreamers. This allows them to enter the Black Egg, where they can
							fight the Hollow Knight. If the Hollow Knight is faced before
							obtaining Void Heart Charm, the Knight kills their sibling and
							takes their place in sealing the Radiance.
						</Text>
						<Text style={styles.text}>
							If the Knight has fought Hornet twice and has the King's Brand and
							the Shade Cloak, they have access to both halves of the Kingsoul.
							When the complete Kingsoul is equipped, the Knight can transform
							this Charm into Void Heart by going to their birthplace at the
							bottom of the Abyss and remembering their past. Void Heart allows
							the Knight to unify the Void under their will.
						</Text>
						<Text style={styles.text}>
							With Void Heart, the Knight can use the Dream Nail on the Hollow
							Knight after Hornet holds them down. If the Dream Nail is not
							used, the Knight has to kill the Hollow Knight. This gives a
							similar ending as the ending without having Void Heart, but
							instead, Hornet becomes a Dreamer, her face appearing on the
							entrance to Black Egg.
						</Text>
						<Text style={styles.text}>
							Using the Dream Nail initiates the fight with the Radiance. At the
							end of this fight, the Knight breaks their own shell and lands the
							finishing blows on the Radiance in their Shade form, with the help
							of the Shade of the Hollow Knight. Both siblings and all the other
							Shades in the Abyss then return to the Void.
						</Text>
					</View>
				</View>

				<View style={{height: 20}} />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		color: colors.textColor,
		fontSize: 16,
		marginTop: 15,
	},
})
