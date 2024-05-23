import { Platform, Pressable, View } from "react-native";
import {HomeIcon, HeartIcon, MoonIcon, ShoppingCartIcon, SunIcon} from 'react-native-heroicons/outline';
import { useColorScheme } from "nativewind";


export default function NavBar(){
    const {colorScheme, toggleColorScheme} = useColorScheme();
    return (
        <View 
            style={{
            ...Platform.select({
                ios: {
                shadowColor: 'black',
                shadowOffset: {width:0, height: -5},
                shadowOpacity: 0.3,
                shadowRadius:20
                },
                android: {
                elevation: 3,
                },
            }),
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white'
            }}
            className="px-8 py-6 bg-white shadow-top dark:bg-soft-dark flex-row items-center justify-between">
            <HomeIcon   color={colorScheme === "light" ? "black" : "white"} 
                        size={28} 
                        />
            <HeartIcon color={colorScheme === "light" ? "black" : "white"} 
                        size={28} 
                        />
            <ShoppingCartIcon 
                        color={colorScheme === "light" ? "black" : "white"} 
                        size={28} 
                        />
            <Pressable onPress={toggleColorScheme}>
                {colorScheme === 'dark' && (
                    <SunIcon color={colorScheme === "dark" ? "white" : "black"} size={28} />
                )}
                {colorScheme === 'light' && (
                    <MoonIcon  color={colorScheme === "light" ? "black" : "white"}  size={28} />
                )}
            </Pressable>            
        </View>
    )
}