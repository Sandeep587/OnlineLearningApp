import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {stringConstants} from '../../config/stringConstants';
import {COLORS,images} from '../../theme';
import {styles} from './styles';

const ChooseCategoriesView = ({categories, onClickForBack,onClickNextScreen}) => {
  const numOfCloumns = 3;
  const renderHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => onClickForBack()}
        style={styles.backButtonBackground}>
        <Image style={styles.backArrow} source={images.back}></Image>
      </TouchableOpacity>
    );
  };
  const renderTitle = () => {
    return <Text style={styles.headerTitle}>Choose Categories</Text>;
  };

  const renderFlatListItem = ({item}) => {
    return (
      <View
        style={styles.listItemBG}>
        <Image
          style={styles.listImage}
          source={item.icon}></Image>
        <Text
          style={styles.listText}>
          {item.label}
        </Text>
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity onPress={()=>onClickNextScreen()}
          style={styles.buttonBg}>
          <Text
            style={styles.buttonText}>
            {stringConstants.continue}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={styles.mainView}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      {/* Header */}
      {renderHeader()}
      {/* Title */}
      {renderTitle()}
      {/* Flat list for categories */}
      <View
        style={{
          marginTop: 30,
        }}>
        <FlatList
          data={categories}
          numColumns={numOfCloumns}
          keyExtractor={item => `${item.id}`}
          showVerticalScrollIndicator={false}
          renderItem={renderFlatListItem}
        />
      </View>

      {/* Bottom Button */}

      {renderButton()}
    </View>
  );
};
export default ChooseCategoriesView;
