import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TextInput,
  ScrollView,
  LogBox,
  StatusBar
} from 'react-native';
import {stringConstants} from '../../config/stringConstants';
import dummyData from '../../constants/dummyData';
import {COLORS, images} from '../../theme';
import {styles} from './styles';

const SearchView = () => {
  const numOfCloumns = 2;
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const renderHeader = () => {
    return (
      <View>
        <View style={styles.bgSearch}>
          {/* left */}
          <View style={styles.searchIconStyle}>
            <Image style={styles.searchIconDim} source={images.search} />
          </View>
          {/* middle */}
          <TextInput placeholder={stringConstants.searchCategory} />
        </View>
      </View>
    );
  };

  const renderTopSearchList = () => {
    return (
      <View>
        <Text style={styles.titleTopSearch}>{stringConstants.topSearch}</Text>
        <FlatList
          data={dummyData.top_searches}
          keyExtractor={item => `${item.id}`}
          horizontal
          showHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={styles.topSearchTxtStyle}>
                <Text style={styles.lableTopSearch}>{item.label}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  };

  const renderCategoryList = () => {
    return (
      <View style={{marginBottom: 60}}>
        <Text style={styles.titleTopSearch}>{stringConstants.categories}</Text>
        <FlatList
          data={dummyData.categories}
          keyExtractor={item => `${item.id}`}
          numColumns={numOfCloumns}
          showVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={styles.catListMainView}>
                <ImageBackground
                  style={styles.catListBgImage}
                  source={item.thumbnail}
                  imageStyle={{borderRadius: 10}}>
                  <Text style={styles.catListTxt}>{item.title}</Text>
                </ImageBackground>
              </View>
            );
          }}></FlatList>
      </View>
    );
  };
  return (
    <View style={styles.mainView}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      {/* Header */}
      <ScrollView
        style={{flexGrow: 1}}
        showVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <View>
          {renderHeader()}
          {/* Category */}
          {renderTopSearchList()}
          {/* Category List */}
          {renderCategoryList()}
        </View>
      </ScrollView>
      {/* bottom tab bar */}
    </View>
  );
};
export default SearchView;
