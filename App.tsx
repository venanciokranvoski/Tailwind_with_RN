import React from 'react';
import {Dimensions, FlatList, Platform, SafeAreaView, StatusBar, View} from 'react-native';
import {products} from './src/Utils/product.ts';
import GroupBox from './src/Components/GroupBox/GroupBox';
import NavBar from './src/Components/NavBar/NavBar.tsx';
import { useColorScheme } from 'nativewind';

  const numColums = 2;
  const screen_width = Dimensions.get('window').width
  const column_width = screen_width / numColums;


function App(): React.JSX.Element {
  const {colorScheme} = useColorScheme();
  return (
    <View
      style={{backgroundColor: colorScheme === 'light' ? 'white' : 'black'}}
      className="flex-[1] bg-white dark:bg-dark pt-8">
      <StatusBar barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
      <SafeAreaView />
      <FlatList
        data={products}
        numColumns={numColums}
        renderItem={(product_data)=> {
          return (
                <GroupBox urlImg={product_data.item.image_url} 
                          name={product_data.item.name} 
                          price={product_data.item.price}  
                          column_W={column_width}
                          />
                )
        }}
        keyExtractor={(item)=> {return item.key}}
      />
      <NavBar />
    </View>
  );
}

export default App;
