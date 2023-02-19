import React, {useState, useEffect} from 'react';
import OnBoardingView from '../view/OnBoarding/OnBoardingView';

const OnBoardingViewModel = ({navigation}: any) => {
  const [curerntPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItem] = useState([]);

  useEffect(() => {
    if (!viewableItems[0] || curerntPage === viewableItems[0].index) return;

    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);

  const handleViewItem = (viewableItems) => {
    setViewableItem(viewableItems);
  };

  return (
    <OnBoardingView
      navigation={navigation}
      curerntPage={curerntPage}
      viewableItems={viewableItems}
      handleViewItem={handleViewItem}
    />
  );
};
export default OnBoardingViewModel;
