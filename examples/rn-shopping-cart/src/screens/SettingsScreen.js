import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrivacyPolicyScreen from './PrivacyPolicy';
import KycScreen from './KycScreen';
import AboutScreen from './About';
import LoginRegisterScreen from './LoginRegisterScreen';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../redux/action-types';
import { auth } from '../../firebase';

const Stack = createNativeStackNavigator();

const stackOptions = [
    {
        icon: 'home',
        title: 'Settings Home',
        name: 'Home',
        component: HomeScreen,
    },
    {
        icon: 'profile',
        title: 'KYC',
        name: 'KYC',
        component: KycScreen,
    },
    {
        icon: 'lock',
        title: 'Privacy Policy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicyScreen,
    },
    {
        icon: 'infocirlceo',
        title: 'About',
        name: 'About',
        component: AboutScreen,
    },
];
function HomeScreen({ navigation }) {
    const { user, isLoggedIn } = useSelector((store) => store.userState);
    const dispatch = useDispatch();
    return (
        <View style={{ padding: 50 }}>
            <Text style={{ fontSize: 30 }}>Settings</Text>

            <View style={{ padding: 20 }}>
                <FlatList
                    data={stackOptions}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) => (
                        <View style={{ padding: 10, flexDirection: 'row' }}>
                            <AntDesign
                                name={item.icon}
                                size={20}
                                style={{ marginRight: 15 }}
                            />
                            <Pressable
                                onPress={() => navigation.navigate(item.name)}
                            >
                                <Text style={{ fontSize: 20 }}>
                                    {item.title}
                                </Text>
                            </Pressable>
                        </View>
                    )}
                />

                {!isLoggedIn && (
                    <View style={{ padding: 10, flexDirection: 'row' }}>
                        <AntDesign
                            name='login'
                            size={20}
                            style={{ marginRight: 15 }}
                        />
                        <Pressable
                            onPress={() =>
                                navigation.navigate('LoginOrRegister')
                            }
                        >
                            <Text style={{ fontSize: 20 }}>
                                Login or register
                            </Text>
                        </Pressable>
                    </View>
                )}

                {isLoggedIn && (
                    <View style={{ padding: 10, flexDirection: 'row' }}>
                        <AntDesign
                            name='logout'
                            size={20}
                            style={{ marginRight: 15 }}
                        />
                        <Pressable
                            onPress={() => {
                                auth.signOut()
                                    .then(() => dispatch({ type: LOGOUT }))
                                    .catch((err) => alert(err.message));
                            }}
                        >
                            <Text style={{ fontSize: 20 }}>Logout</Text>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: '#777',
                                }}
                            >
                                (logged in as {user.email})
                            </Text>
                        </Pressable>
                    </View>
                )}
            </View>
        </View>
    );
}
const SettingsScreen = () => {
    return (
        <Stack.Navigator>
            {stackOptions.map((option) => (
                <Stack.Screen
                    key={option.name}
                    options={{ headerTitle: option.title }}
                    name={option.name}
                    component={option.component}
                />
            ))}
            <Stack.Screen
                options={{ headerTitle: 'Login or register' }}
                name='LoginOrRegister'
                component={LoginRegisterScreen}
            />
        </Stack.Navigator>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
