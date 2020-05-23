import * as React from 'react';
import { Text, FlatList, SafeAreaView, ImageBackground, Dimensions, TouchableHighlight, Alert } from 'react-native';


const Home = () => {
    const numColumns = 3;
    const tileWidth = Dimensions.get('window').width / numColumns;
    const imageParameters = "?auto=format&fit=crop&w=375&q=80";
    const dataSource = [
      { category: 'TRT 1', imageId: require('../../assets/images/tv_trt1.png')},
      { category: 'TV 8', imageId: require('../../assets/images/tv_tv8.png')},
      { category: 'Star', imageId: require( '../../assets/images/tv_star.png')},
      { category: 'Show TV', imageId: require('../../assets/images/tv_show.png')},
      { category: 'Kanal D', imageId: require('../../assets/images/tv_kanald.png')},
    ];
   
  
    renderItem = ({ item }) => {
  
      return (
        <TouchableHighlight onPress={() => { Alert.alert(item.category ) }}>
          <ImageBackground
            source={item.imageId} 
            style={{
              width: tileWidth -20,
              height: tileWidth -20,
              justifyContent: 'center',
              marginBottom: 10,
              marginHorizontal: 10,
            }}>    
          </ImageBackground>
        </TouchableHighlight>
      );
    }
    return (
      <SafeAreaView>


        <FlatList
          data={dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.category}
          numColumns={numColumns}
        /> 
      </SafeAreaView>
    );
  };
   
  export default Home;
  
  