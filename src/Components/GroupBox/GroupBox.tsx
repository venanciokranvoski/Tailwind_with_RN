import { Image, Text, View } from "react-native"; 
import { useColorScheme } from 'nativewind';

interface DataList {
    urlImg: any;
    name: string;
    price: number;
    column_W: number;
}

export default function GroupBox({ urlImg, name, price, column_W }:DataList ){
    const {colorScheme} = useColorScheme();
    return(
        <View style={{width: column_W}} className="justify-center p-3">
            <Image className='m-5 h-56 w-full mx-auto object-cover bg-slate-500 rounded-lg' source={urlImg}/>
            <Text style={{color: colorScheme === 'dark' ? 'white' : 'black'}} className='text-dark mb-3'>{name.substring(0,30)+ '...'}</Text>
            <Text style={{color: colorScheme === 'dark' ? 'white' : 'black'}} className='text-dark dark:text-red font-bold'>`R${price}.00`</Text> 
        </View>
    )
}