import React, {useState} from 'react';
import constants from '../constants/constants';
import ChooseCategoriesView from '../view/ChooseCategory/ChooseCategoriesView';

const ChooseCategoryViewModel = ({navigation}) => {
  const [categories, setCategories] = useState(constants.categories);

  const onClickForBack = () => {
      navigation.goBack(null)
  };
  const onClickNextScreen=()=>{
    navigation.navigate("homeView")

  }
  return (
    <ChooseCategoriesView 
    categories={categories}
    onClickForBack={onClickForBack}
    onClickNextScreen={onClickNextScreen} />
  );
};
export default ChooseCategoryViewModel;
