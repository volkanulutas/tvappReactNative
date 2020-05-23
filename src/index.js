import * as React from 'react';

import Home from './containers/Home/Home';

import {SafeAreaView, StyleSheet, Text, View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import WebView from 'react-native-webview'

import HTMLView from 'react-native-htmlview';
import Video from "react-h5-video";

// <video id="pplayer-video" playsinline="" poster="" src="blob:https://www.kanald.com.tr/76f00945-bd46-4b19-b0b3-5d06683f01e0"></video>

class App extends React.Component{

    render(){
		var sources = [ "./video/video.mp4","./video/video.webm","./video/video.ogv" ]
		return(
			<Video source='blob:https://www.kanald.com.tr/76f00945-bd46-4b19-b0b3-5d06683f01e0' poster="" >
				<h3 className="video-logo pull-right"><a href="http://glexe.com" target="_blank">LOGO</a></h3>
				<p>Any HTML content</p>
			</Video>
		)
	}
}

const styles = StyleSheet.create({
    a: {
      fontWeight: '300',
      color: '#FF3366', // make links coloured pink
    },
  });

export default App;