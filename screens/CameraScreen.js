import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera'
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

const CameraScreen = ({navigation}) => {
  const [rnCamera, setRnCamera] = useState();
  const [hasPermission, setHasPermission] = useState();

  useEffect(() => {
    verifyPermissions();
  }, []);

  const startVideoRecording = async () => {
    if (rnCamera) {
      const options = {maxDuration: 5};
      const data = await rnCamera.recordAsync(options);
      if (data) {
        navigation.navigate('Editing', {uri: data.uri});
      }
    }
  };

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
      .catch((error) => { Alert.alert('Something went wrong when accessing permission') });
  };


    let cameraView
    if(hasPermission){
        cameraView = (
          <RNCamera
            style={styles.cameraView}
            ref={(ref) => {
              setRnCamera(ref);
            }}
            captureAudio={false}
          />
        );
    }else{
        cameraView = <View style={styles.cameraView} />;
    }  

    return (
        <View style={styles.cameraContainer}>
            {cameraView}
            <View>
                <Button title='Start Shooting' onPress={startVideoRecording} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cameraView: {
    margin:'5%',
    width:'90%',
    height:'30%',
    borderBottomColor:'#ECECEC',
    backgroundColor:'#ECECEC',
  }
}
  );

export default CameraScreen;
