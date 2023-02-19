import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  LogBox,
  StatusBar
} from 'react-native';
import dummyData from '../../constants/dummyData';
import {COLORS,images} from '../../theme';
import {styles} from './styles';

const HomeView = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
  // render Header
  const renderHeader = () => {
    return (
      <View style={styles.headerMainView}>
        <View>
          <Text style={styles.headerTextOne}>Hello, ByProgrammers!</Text>
          <Text style={styles.hesderTextTwo}>Saturday, 12th Feb 2022</Text>
        </View>
        <View>
          <Image style={styles.headerImage} source={images.notification} />
        </View>
      </View>
    );
  };
  // render Top Intro Image
  const renderTopImageWithText = () => {
    return (
      <View>
        <ImageBackground
          style={styles.bgImageStyle}
          source={images.featured_bg_image}
          imageStyle={{borderRadius: 10}}>
          <Text style={styles.introTextOne}>HOW TO</Text>
          <Text style={styles.introFontTwo}>
            Make your brand more visible with our checklist
          </Text>

          <Text style={styles.introFontThree}>By Scott Harris</Text>

          <Image
            style={styles.imageStartLearning}
            source={images.start_learning}
          />
          <View style={styles.bgStartLearning}>
            <Text style={styles.txtStartLearning}>Start Learning</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };
  //render Course List
  const renderCourseList = () => {
    return (
      <View>
        <FlatList
          data={dummyData.courses_list_1}
          keyExtractor={item => `${item.id}`}
          horizontal
          showHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={styles.courseListMainView}>
                <ImageBackground
                  style={styles.courseListBg}
                  source={item.thumbnail}
                  imageStyle={{borderRadius: 10}}
                />
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Image source={images.play_1} />
                  <Text style={styles.titleCourseList}>{item.title}</Text>
                </View>
                <View style={styles.mainViewdurationCourseList}>
                  <Image style={styles.watchImage} source={images.time} />
                  <Text style={styles.durationTxt}>{item.duration}</Text>
                </View>
              </View>
            );
          }}></FlatList>
      </View>
    );
  };
  //render Category List
  const renderCategoryList = () => {
    return (
      <View>
        <View style={styles.divider} />
        <View style={styles.titleView}>
          <Text style={styles.titleTxt}>Categories</Text>

          <View style={styles.bgSkipAll}>
            <Text style={styles.txtSkipAll}>Skip All</Text>
          </View>
        </View>
        <FlatList
          data={dummyData.categories}
          keyExtractor={item => `${item.id}`}
          horizontal
          showHorizontalScrollIndicator={false}
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
  //render Popular Course List
  const renderPopularCourseList = () => {
    return (
      <View style={{marginBottom: 80}}>
        <View style={styles.divider}></View>
        <View style={styles.titleView}>
          <Text style={styles.titleTxt}>Popular Courses</Text>

          <View style={styles.bgSkipAll}>
            <Text style={styles.txtSkipAll}>Skip All</Text>
          </View>
        </View>
        <FlatList
          data={dummyData.courses_list_2}
          keyExtractor={item => `${item.id}`}
          showVerticalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={styles.popularListMainView}>
                <ImageBackground
                  style={styles.popularListBgImage}
                  source={item.thumbnail}
                  imageStyle={{borderRadius: 10}}>
                  <View
                    style={styles.bgHeart}>
                    <Image
                      style={styles.imgHeart}
                      source={
                        item.is_favourite == true
                          ? images.heart
                          : images.heart_off
                      }></Image>
                  </View>
                </ImageBackground>

                <View
                  style={styles.popularListTitle}>
                  <Text
                    style={styles.popularTitleTxt}>
                    {item.title}
                  </Text>
                  <View
                    style={styles.popularInstructorStyle}>
                    <Text style={{color: COLORS.black}}>{item.instructor}</Text>
                    <Image
                      style={styles.popularWatch}
                      source={images.time}
                    />
                    <Text
                      style={styles.popularDuration}>
                      {item.duration}
                    </Text>
                  </View>

                  <View
                    style={styles.popuCostRatingView}>
                    <Text
                      style={styles.popuPrice}>
                      ${item.price}.00
                    </Text>
                    <Image
                      style={styles.star}
                      source={images.star}
                    />
                    <Text
                      style={styles.rating}>
                      {item.ratings}
                    </Text>
                  </View>
                </View>
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
      {renderHeader()}
      <ScrollView
      style={{flexGrow: 1}}
        showVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <View>
          {/* Top Intro Image */}
          {renderTopImageWithText()}
          {/* Course List */}
          {renderCourseList()}
          {/* Category List */}
          {renderCategoryList()}
          {/* Popular CourseList */}
          {renderPopularCourseList()}
        </View>
      </ScrollView>
      {/* bottom tab bar */}
    </View>
  );
};
export default HomeView;
