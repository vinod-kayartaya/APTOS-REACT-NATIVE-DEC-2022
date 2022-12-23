import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import CartScreen from './src/screens/CartScreen';
import { AntDesign } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';

import store from './src/redux/store';
import cartReducer from './src/redux/cart-reducer';
import OrderSummaryScreen from './src/screens/OrderSummaryScreen';

const Tab = createBottomTabNavigator();

const Icon = ({ text, name, color, size, focused }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <AntDesign
                name={name}
                color={color}
                size={focused ? size + 5 : size}
            />
            {!focused && (
                <Text size={size} style={{ color }}>
                    {text}
                </Text>
            )}
        </View>
    );
};

const Main = () => {
    const { cart } = useSelector((store) => store.cartState);
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={() => {
                    return {
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'black',
                        tabBarShowLabel: false,
                        headerShown: false,
                    };
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ size, color, focused }) => (
                            <Icon
                                name='home'
                                text='Home'
                                size={size}
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Cart'
                    component={CartScreen}
                    options={{
                        tabBarIcon: ({ size, color, focused }) => (
                            <Icon
                                name='shoppingcart'
                                text='Cart'
                                size={size}
                                color={color}
                                focused={focused}
                            />
                        ),
                        tabBarBadge:
                            cart && cart.length > 0 ? cart.length : null,
                    }}
                />
                <Tab.Screen
                    name='OrderSummary'
                    component={OrderSummaryScreen}
                    options={{
                        tabBarIcon: ({ size, color, focused }) => (
                            <Icon
                                name='table'
                                text='Summary'
                                size={size}
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Settings'
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ size, color, focused }) => (
                            <Icon
                                name='setting'
                                text='Settings'
                                size={size}
                                color={color}
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}
