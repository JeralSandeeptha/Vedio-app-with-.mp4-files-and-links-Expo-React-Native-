import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Video } from 'expo-av';
import React, { useState } from 'react';

export default function App() {

  const vedio = React.useRef();
  const [status, setStatus] = useState({});

  const secondVideo = React.useRef(null);
  const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

  return (
   <View style={styles.container}>
        <Video
          ref={vedio}
          style={styles.vedio}
          source={{uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"}}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={setStatus}
        />
        <View style={styles.buttons}>
          <Button title="Play from 5s" onPress={() => vedio.current.playFromPositionAsync(20000)} />
          <Button title={status.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => vedio.current.setIsLoopingAsync(!status.isLooping)} />
        </View>

        <Video
        ref={secondVideo}
        style={styles.vedio}
        source={require("./vedio.mp4")}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatusSecondVideo}
      />
      <View style={styles.buttons}>
        <Button title="Play from 50s" onPress={() => secondVideo.current.playFromPositionAsync(50000)} />
        <Button title={statusSecondVideo.isLooping ? "Set to not loop" : "Set to loop"} onPress={() => secondVideo.current.setIsLoopingAsync(!statusSecondVideo.isLooping)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vedio: {
    height: 300,
    alignSelf: 'stretch'
  }, 
  button: {
    margin: 16
  }
});
