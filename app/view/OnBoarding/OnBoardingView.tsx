import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from 'react-native';
import {COLORS, Dimension, Fonts, images, Themes} from '../../theme';
import {stringConstants} from '../../config/stringConstants';
import constants from '../../constants/constants';
import {styles} from './styles';
import FloatingLabelInput from 'floatinglableinput';

const OnBoardingView = ({
  navigation,
  curerntPage,
  viewableItems,
  handleViewItem,
}) => {
  const faltListRef = useRef();
  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    handleViewItem(viewableItems);
  }); 
  const handleNext = () => {
    if (curerntPage == constants.walkthrough.length - 1) return;

    faltListRef.current.scrollToIndex({
      animated: true,
      index: curerntPage + 1,
    });
  };
  const renderFlatListItem = ({item}) => {
    return (
      <View>
        <View style={styles.listmainLayout}>
          <Text style={styles.listTitle}>{item.title}</Text>
          <Text style={styles.listSubTitle}>{item.sub_title}</Text>
          <ImageBackground style={styles.listImage} source={item.image} />
        </View>
      </View>
    );
  };
  const renderBottomSection = () => {
    return (
      <SafeAreaView>
        <View style={styles.bottomMainLayout}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {[...Array(constants.walkthrough.length)].map((_, index) => (
              <View
                key={index}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor:
                    index == curerntPage ? COLORS.primary : COLORS.gray,
                  marginLeft: 8,
                }}></View>
            ))}
          </View>
          {curerntPage != constants.walkthrough.length - 1 ? (
            <TouchableOpacity
              onPress={handleNext}
              style={styles.bottomNextButton}>
              <Text style={styles.buttonFont}>{stringConstants.next}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.bottomGetStartedButton}>
              <Text style={styles.buttonFont}>
                {stringConstants.getStarted}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  };
  return (
    <View style={styles.mainLayout}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      {/* Render Flat List Section */}
      <FlatList
        data={constants.walkthrough}
        pagingEnabled
        horizontal
        showHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderFlatListItem}
        ref={faltListRef}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
        initialNumToRender={1}
        extraData={Dimension.width}
      />
      
      {/* Bottom Section */}
      {renderBottomSection()}
    </View>
  );
};
export default OnBoardingView;
