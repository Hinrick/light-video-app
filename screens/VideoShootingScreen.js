import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

import ShootingButton from '../components/ShootingButton';

const VideoShootingScreen = ({navigation, route}) => {
  const {times, seconds} = route.params;
  const [params, setParams] = useState({
    times: '',
    seconds: '',
  });
  const [rnCamera, setRnCamera] = useState();
  const [hasPermission, setHasPermission] = useState();

  useEffect(() => {
    verifyPermissions();
  }, []);

  useEffect(() => {
    if (times || seconds) {
      const updateParams = {...params};
      updateParams.times = times;
      updateParams.seconds = seconds;
      setParams(updateParams);
    }
  }, [times, seconds]);

  const verifyPermissions = () => {
    check(PERMISSIONS.IOS.CAMERA)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            setHasPermission('unavailable');
            break;
          case RESULTS.DENIED:
            setHasPermission('denied');
            break;
          case RESULTS.GRANTED:
            setHasPermission('granted');
            break;
          case RESULTS.BLOCKED:
            setHasPermission('blocked');
            break;
        }
      })
      .catch((error) => {
        Alert.alert('Something went wrong when accessing permission')
      });
  };

  const startVideoRecording = async () => {
    if (rnCamera) {
      const options = { maxDuration: params.seconds };
      const data = await rnCamera.recordAsync(options);
      if (data) {
        navigation.navigate('Editing', { uri: data.uri });
      }
    }
  };

  let cameraView;
  if (hasPermission) {
    cameraView = (
      <RNCamera
        style={styles.cameraView}
        ref={(ref) => {
          setRnCamera(ref);
        }}
        captureAudio={false}
      />
    );
  } else {
    cameraView = <View style={styles.videoView}></View>;
  }

  return (
    <View style={styles.videoShootingScreen}>
      {cameraView}
      <View style={styles.btnContainer}>
        <Text>More</Text>
        <View style={styles.shootingButton}>
          <ShootingButton directTo={startVideoRecording} />
        </View>
        <Text>Camera</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoShootingScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cameraView: {
    width: '100%',
    height: '60%',
    borderBottomColor: '#ECECEC',
    backgroundColor: '#ECECEC',
  },
  videoView: {
    backgroundColor: '#999999',
    width: '100%',
    height: '60%',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  shootingButton: {
    width: '30%',
  },
});

export default VideoShootingScreen;
