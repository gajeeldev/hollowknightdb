import CustomDrawerContent from '@/src/shared/components/router/CustomDrawerContent'
import HeaderLeftButton from '@/src/shared/components/router/HeaderLeftButton'
import {Ionicons} from '@expo/vector-icons'
import {Drawer} from 'expo-router/drawer'

const DrawerLayout = () => (
	<Drawer
		drawerContent={CustomDrawerContent}
		screenOptions={{
			drawerAllowFontScaling: true,
			drawerActiveTintColor: '#f5f5f5',
			drawerContentStyle: {backgroundColor: '#252525'},
			drawerStatusBarAnimation: 'fade',
			drawerLabelStyle: {marginLeft: -20},
			drawerType: 'front',
			headerStyle: {backgroundColor: '#252525'},
			headerTitleAlign: 'center',
			headerTitleStyle: {fontFamily: 'TrajanPro-Bold'},
			headerShadowVisible: false,
			headerLeft: () => <HeaderLeftButton />,
		}}
	>
		<Drawer.Screen
			name='index'
			options={{
				headerTitle: 'The Knight',
				drawerLabel: 'The Knight',
				drawerIcon: ({size, color, focused}) => (
					<>
						{focused ? (
							<Ionicons name='home' size={size} color={color} />
						) : (
							<Ionicons name='home-outline' size={size} color={color} />
						)}
					</>
				),
			}}
		/>

		<Drawer.Screen
			name='achievements/index'
			options={{
				headerTitle: 'Achievements',
				drawerLabel: 'Achievements',
				drawerIcon: ({size, color, focused}) => (
					<>
						{focused ? (
							<Ionicons name='trophy' size={size} color={color} />
						) : (
							<Ionicons name='trophy-outline' size={size} color={color} />
						)}
					</>
				),
			}}
		/>

		<Drawer.Screen
			name='areas/index'
			options={{
				headerTitle: 'Areas',
				drawerLabel: 'Areas',
				drawerIcon: ({size, color, focused}) => (
					<>
						{focused ? (
							<Ionicons name='map' size={size} color={color} />
						) : (
							<Ionicons name='map-outline' size={size} color={color} />
						)}
					</>
				),
			}}
		/>

		<Drawer.Screen
			name='bosses/index'
			options={{
				headerTitle: 'Bosses',
				drawerLabel: 'Bosses',
				drawerIcon: ({size, color, focused}) => (
					<>
						{focused ? (
							<Ionicons name='skull' size={size} color={color} />
						) : (
							<Ionicons name='skull-outline' size={size} color={color} />
						)}
					</>
				),
			}}
		/>

		<Drawer.Screen
			name='charms/index'
			options={{
				headerTitle: 'Charms',
				drawerLabel: 'Charms',
				drawerIcon: ({size, color, focused}) => (
					<>
						{focused ? (
							<Ionicons name='disc' size={size} color={color} />
						) : (
							<Ionicons name='disc-outline' size={size} color={color} />
						)}
					</>
				),
			}}
		/>

		<Drawer.Screen
			name='enemies/index'
			options={{
				headerTitle: 'Enemies',
				drawerLabel: 'Enemies',
				drawerIcon: ({size, color, focused}) => (
					<>
						{focused ? (
							<Ionicons name='bug' size={size} color={color} />
						) : (
							<Ionicons name='bug-outline' size={size} color={color} />
						)}
					</>
				),
			}}
		/>

		<Drawer.Screen
			name='items/index'
			options={{
				headerTitle: 'Items',
				drawerLabel: 'Items',
				drawerIcon: ({size, color, focused}) => (
					<>
						{focused ? (
							<Ionicons name='cube' size={size} color={color} />
						) : (
							<Ionicons name='cube-outline' size={size} color={color} />
						)}
					</>
				),
			}}
		/>

		<Drawer.Screen
			name='nail/index'
			options={{
				headerTitle: 'Nail',
				drawerLabel: 'Nail',
				drawerIcon: ({size, color, focused}) => (
					<>
						{focused ? (
							<Ionicons name='brush' size={size} color={color} />
						) : (
							<Ionicons name='brush-outline' size={size} color={color} />
						)}
					</>
				),
			}}
		/>

		<Drawer.Screen
			name='npcs/index'
			options={{
				headerTitle: 'NPCs',
				drawerLabel: 'NPCs',
				drawerIcon: ({size, color, focused}) => (
					<>
						{focused ? (
							<Ionicons name='leaf' size={size} color={color} />
						) : (
							<Ionicons name='leaf-outline' size={size} color={color} />
						)}
					</>
				),
			}}
		/>

		<Drawer.Screen
			name='spells_and_abilities/index'
			options={{
				headerTitle: 'Spells & Abilities',
				drawerLabel: 'Spells & Abilities',
				drawerIcon: ({size, color, focused}) => (
					<>
						{focused ? (
							<Ionicons name='book' size={size} color={color} />
						) : (
							<Ionicons name='book-outline' size={size} color={color} />
						)}
					</>
				),
			}}
		/>
	</Drawer>
)

export default DrawerLayout
