import React, {useState} from 'react';
import { StyleSheet, View, Text, Button, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Video, { FilterType } from 'react-native-video';
import { TouchableOpacity } from 'react-native-gesture-handler';


const EditingScreen = ({navigation, route}) => {
  const filterOption = [
    {
      name: 'NONE',
      btnColor: ['#a8ff78', '#78ffd6'],
      filterType: FilterType.NONE,
      isSelected: true,
    },
    {
      name: 'INVERT',
      btnColor: ['#b92b27', '#1565C0'],
      filterType: FilterType.INVERT,
      isSelected: false,
    },
    {
      name: 'MONOCHROME',
      btnColor: ['#373B44', '#4286f4'],
      filterType: FilterType.MONOCHROME,
      isSelected: false,
    },
    {
      name: 'POSTERIZE',
      btnColor: ['#2980B9', '#6DD5FA', '#FFFFFF'],
      filterType: FilterType.POSTERIZE,
      isSelected: false,
    },
    {
      name: 'FALSE',
      btnColor: ['#FF0099', '#493240'],
      filterType: FilterType.FALSE,
      isSelected: false,
    },
    {
      name: 'MAXIMUMCOMPONENT',
      btnColor: ['#aa4b6b', '#6b6b83', '#3b8d99'],
      filterType: FilterType.MAXIMUMCOMPONENT,
      isSelected: false,
    },
    {
      name: 'MINIMUMCOMPONENT',
      btnColor: ['#8E2DE2', '#4A00E0'],
      filterType: FilterType.MINIMUMCOMPONENT,
      isSelected: false,
    },
    {
      name: 'CHROME',
      btnColor: ['#1f4037', '#99f2c8'],
      filterType: FilterType.CHROME,
      isSelected: false,
    },
    {
      name: 'INSTANT',
      btnColor: ['#f953c6', '#b91d73'],
      filterType: FilterType.INSTANT,
      isSelected: false,
    },
    {
      name: 'MONO',
      btnColor: ['#7F7FD5', '#86A8E7', '#91EAE4'],
      filterType: FilterType.MONO,
      isSelected: false,
    },
    {
      name: 'NOIR',
      btnColor: ['#c31432', '#240b36'],
      filterType: FilterType.NOIR,
      isSelected: false,
    },
    {
      name: 'PROCESS',
      btnColor: ['#f12711', '#f5af19'],
      filterType: FilterType.PROCESS,
      isSelected: false,
    },
    {
      name: 'TONAL',
      btnColor: ['#659999', '#f4791f'],
      filterType: FilterType.TONAL,
      isSelected: false,
    },
    {
      name: 'TRANSFER',
      btnColor: ['#dd3e54', '#6be585'],
      filterType: FilterType.TRANSFER,
      isSelected: false,
    },
    {
      name: 'SEPIA',
      btnColor: ['#8360c3', '#2ebf91'],
      filterType: FilterType.SEPIA,
      isSelected: false,
    },
  ];
  const [filterOptions, setFilterOptions] = useState(filterOption);
  const [videoEditor, setVideEditor] = useState();
  const [filterType, setFilterType] = useState(FilterType.NONE);

  const selectedFilterHandler = (name) => {
    const updateFilterOptions = [];
    filterOption.map((option) => {
      updateFilterOptions.push({
        name: option.name,
        btnColor: option.btnColor,
        isSelected: option.name.toString() === name.toString(),
      });
    });
    setFilterOptions(updateFilterOptions);
  };

  return (
    <View style={styles.editingContainer}>
      <Video
        source={{uri: route.params.uri}}
        ref={(ref) => {
          setVideEditor(ref);
        }}
        style={styles.editingVideo}
        repeat={true}
        filterEnabled={true}
        filter={filterType}
        resizeMode="stretch"
      />
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="normal"
          pagingEnabled>
          {filterOptions.map((option) => {
            return (
              <TouchableOpacity
                key={option.name}
                onPress={() => { setFilterType(option.filterType) }
                  // selectedFilterHandler(option.name)
                }>
                <View>
                  <LinearGradient
                    colors={option.btnColor}
                    style={
                      option.isSelected
                        ? styles.scrollItemSelected
                        : styles.scrollItem
                    }
                  />
                  <Text style={styles.scrollText}>{option.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.selectedBtn}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.notSelectedBtn}>Edit</Text>
          </TouchableOpacity>
          {/* <Opa>
            <Button
              title="None"
              onPress={() => {
                setFilterType('none');
              }}
            />
          </Opa>
          <View>
            <Button
              title="Filtered"
              onPress={() => {
                setFilterType('monochrome');
              }}
            />
          </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  editingContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  editingVideo: {
    width: '100%',
    height: '60%',
    borderBottomColor: '#ECECEC',
    backgroundColor: '#ECECEC',
  },
  scrollContainer: {
    height: '30%',
    marginTop: 5,
  },
  scrollItem: {
    width: 80,
    height: 80,
    borderRadius: 20,
    margin: 10,
  },
  scrollItemSelected: {
    width: 80,
    height: 80,
    borderRadius: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#8DEDE2',
  },
  scrollText: {
    width: 80,
    margin: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
  },
  selectedBtn: {
    fontSize: 20,
  },
  notSelectedBtn: {
    fontSize: 20,
    color: 'rgba(9,9,9,0.5)',
  },
});

export default EditingScreen;
