import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';


const ShootingButton = (props) => {
  const [progress, setProgress] = useState(0);
  const radius = 50;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

//   let interval = setInterval(() => {
//     setProgress(progress + 10);
//   }, 500);

//   useEffect(() => {
//     if (progress === 100) {
//       clearInterval(interval);
//     }
//   }, [progress]);

  const directToVideoEditingScreenHandler = () => {
    props.directTo();
  };

  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <TouchableOpacity onPress={directToVideoEditingScreenHandler}>
      <View style={styles.buttonContainer}>
        <View style={styles.innerButtonContainer}>
          <Svg style={styles.circleContainer} height="100" width="100">
            <Circle
              fill="#FFFFFF"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              stroke="red"
              strokeWidth="5"
              style={{ strokeDashoffset }}
              strokeDasharray={circumference + ' ' + circumference}
            />
            <Circle
              fill="#A73F3F"
              r={normalizedRadius - 5}
              cx={radius}
              cy={radius}
              stroke="red"
              strokeWidth="5"
              style={{ strokeDashoffset }}
              strokeDasharray={circumference + ' ' + circumference}
            />
            <Circle
              fill="#A73F3F"
              r={normalizedRadius - 5}
              cx={radius}
              cy={radius}
              stroke="red"
              strokeWidth="5"
              style={{ strokeDashoffset }}
              strokeDasharray={circumference + ' ' + circumference}
            />
          </Svg>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  // innerButtonContainer: {
  //   backgroundColor: 'blue',
  //   width: 80,
  //   height: 80,
  //   borderRadius: 45,
  // },
  outerBtn: {
    shadowColor: '#999999',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default ShootingButton;

