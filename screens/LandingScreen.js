import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import ShootingButton from '../components/ShootingButton';

const LandingScreen = ({navigation}) => {
  const directToShootingScreen = (time) => {
    navigation.navigate('Video', {times: time.times, seconds: time.seconds});
  };

  return (
    <View style={styles.landingContainer}>
      <View style={styles.blurBtnCover}>
        <View style={styles.blurCoverBtnContainer}>
          <TouchableOpacity
            style={styles.blurCoverBtn}
            onPress={() => {
              directToShootingScreen({times: 1, seconds: 30});
            }}>
            <Text style={styles.blurCoverBtnText}>1 x 30</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.blurCoverBtn}
            onPress={() => {
              directToShootingScreen({times: 2, seconds: 15});
            }}>
            <Text style={styles.blurCoverBtnText}>2 x 15</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blurCoverBtnContainer}>
          <TouchableOpacity
            style={styles.blurCoverBtn}
            onPress={() => {
              directToShootingScreen({times: 3, seconds: 15});
            }}>
            <Text style={styles.blurCoverBtnText}>3 x 15</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.blurCoverBtn}
            onPress={() => {
              directToShootingScreen({times: 5, seconds: 6});
            }}>
            <Text style={styles.blurCoverBtnText}>5 x 6</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.blurCover} />
      <Image
        style={styles.landingImg}
        source={require('../assets/landing.png')}
      />
      <View style={styles.mockToolBar} >
        <View>
          <Text>More</Text>
        </View>
        <ShootingButton />
        <View>
          <Text>Photo</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  landingContainer: {
    flex: 1,
  },
  blurBtnCover: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  blurCoverBtnContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurCoverBtn: {
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // flex: 0.5,
    // opacity: ,
  },
  blurCoverBtnText: {
    fontSize: 14,
    letterSpacing: 1.5,
  },
  blurCover: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    zIndex: 20,
    opacity: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  landingImg: {
    flex: 1,
    width: '100%',
    height: '70%',
  },
  mockToolBar: {
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});

export default LandingScreen;
