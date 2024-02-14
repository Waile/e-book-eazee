import {
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IMAGES} from '../../../utils';
import styles from './styles';
import {constants} from './constants';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../../../utils/constants';
import PoliciesListItem from '../../components/policies-list-item';
import Header from '../../components/header';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../../navigation/navigation-constants';
import api from '../../../api/baseApi';
import { addToCart } from '../../components/redux/slice/cartSlice';
import { useDispatch } from 'react-redux';

const DashboardScreen = () => {
  const [isActiveTab, setIsActiveTab] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(0);
  const [showFilterData, setShowFilterData] = useState(false);
  const [books, setBooks] = useState([]);
  const [filteredData, setFilteredData] = useState(books);
  const [categories, setCategories] = useState([]);
  const allCategories = { id: 0, name: 'All' };

  const getBooksEndPoint = constants.GET_BOOKS_ENDPOINT;
  const getCategoriesEndpoint = constants.GET_CATEGORIES_ENDPOINT;

  const getBooks = async () => {
    const response = await api.get(getBooksEndPoint);
    setBooks(response.data.data);
  };

  const getCategories = async () => {
    const response = await api.get(getCategoriesEndpoint);
    setCategories(response.data.data);
  };

  
  const handleActiveTab = () => {
    setIsActiveTab(true);
  };
  
  const onItemPress = id => {
    setSelectedItemId(id);
    if (id == 0) {
      setShowFilterData(false);
    } else {
      const selectedCategory = books.find(book => book.category_id == id);
      if (selectedCategory) {
        const filter = books.filter(item => {
          return item.category_id == selectedCategory.category_id;
        });
        setFilteredData(filter);
        setShowFilterData(true);
      } else {
        setFilteredData([]);
        setShowFilterData(true);
      }
    }
  };
  const handleSearch = text => {
    if (!text.trim()) {
      setShowFilterData(false);
    } else {
      setShowFilterData(true);
      const filter = books.filter(item => {
        return item.name
          .toString()
          .toLowerCase()
          .includes(text.toString().toLowerCase());
      });
      setFilteredData(filter);
    }
  };
  
  const navigation = useNavigation();
  const viewMoreHandler = () => {
    navigation.navigate(Navigation.MARKETPLACE);
  };
  
  const dispatch=useDispatch()
  const handleAddToCart=(book)=>{
 
    let item={...book,quantity:1}
    dispatch(addToCart(item))
  }
  
  useEffect(() => {
    getBooks();
    getCategories();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.contentContainer}>
          {/* ---------HEADER------------- */}
          <Header title={constants.DASHBOARD_HEADING} />
          {/* -----------SEARCH BAR---------  */}
          <View style={styles.searchBar}>
            <View style={styles.searchBarContent}>
              <Icon name="search" size={20} color={COLORS.black} />
              <View style={styles.search}>
                <TextInput
                  style={styles.searchText}
                  placeholder={constants.SEARCH}
                  placeholderTextColor={COLORS.black}
                  onChangeText={text => handleSearch(text)}
                />
              </View>
            </View>
          </View>
          {/* ------------SLIDER-----------------  */}
          <View style={styles.slider}></View>
          {/* -----------SECTIONS----------------  */}
          <View style={styles.sections}>
            <View style={styles.sectionContainer}>
              <Text onPress={handleActiveTab} style={styles.sectionText}>
                {constants.CATEGORIES}
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionText}>{constants.NEW_ARRIVAL}</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionText}>{constants.POPULAR_BOOKS}</Text>
            </View>
          </View>
          {/* ------------CATEGORIES------------  */}
          <View style={styles.categoriesContainer}>
            <View style={styles.categoriesHeading}>
              <View style={styles.category}>
                <Text style={styles.categoriesText}>
                  {constants.CATEGORIES}
                </Text>
              </View>
              <TouchableWithoutFeedback onPress={viewMoreHandler}>
                <View style={styles.viewMoreContainer}>
                  <Text style={styles.viewMore}>{constants.VIEW_MORE}</Text>
                  <Icon name="arrow-right" size={15} color={COLORS.pink} />
                </View>
              </TouchableWithoutFeedback>
            </View>
            {/* ------------CATEGORIES LIST-------------  */}
            <View style={styles.categoriesList}>
              <View style={styles.flatListWrapper}>
                <View style={styles.listContainer}>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    data={[allCategories,...categories]}
                    renderItem={({item}) => (
                      <PoliciesListItem
                        onItemPress={onItemPress}
                        isActive={item.id === selectedItemId ? true : false}
                        item={item}
                      />
                    )}
                  />
                </View>
              </View>
            </View>
            {/* ------------BOOKS--------------  */}
            <View style={styles.booksContent}>
              <View style={styles.bookContainer}>
                {showFilterData ? (
                  filteredData.length == 0 ? (
                    <View style={styles.bookErrorContainer}>
                      <Text style={styles.noBookError}>{constants.NO_BOOK}</Text>
                    </View>
                  ) : (
                    filteredData.map(book => (
                      <View key={book.id} style={styles.singleBookContainer}>
                        <Pressable
                          onPress={() => {
                            navigation.navigate(Navigation.SINGLE_BOOK, {
                              product: book,
                            });
                          }}>
                          <Image
                            source={{uri: book.image_url}}
                            style={styles.bookImage}
                          />
                          <Text style={styles.bookName}>{book.name}</Text>
                        </Pressable>
                        <View style={styles.bookStatus}>
                          <Pressable onPress={()=>handleAddToCart(book)}>
                          <Image source={IMAGES.cartImage}  />
                          </Pressable>
                          <Text style={styles.bookStatusText}>
                            {book.content_type}
                          </Text>
                        </View>
                      </View>
                    ))
                  )
                ) : (
                  books.slice(0, 7).map(book => (
                    <View key={book.id} style={styles.singleBookContainer}>
                      <Pressable
                        onPress={() => {
                          navigation.navigate(Navigation.SINGLE_BOOK, {
                            product: book,
                          });
                        }}>
                        <Image
                          source={{uri: book.image_url}}
                          style={styles.bookImage}
                        />
                        <Text style={styles.bookName}>{book.name}</Text>
                      </Pressable>
                      <View style={styles.bookStatus}>
                      <Pressable onPress={()=>handleAddToCart(book)}>
                        <Image source={IMAGES.cartImage} />
                        </Pressable>
                        <Text style={styles.bookStatusText}>
                          {book.content_type}
                        </Text>
                      </View>
                    </View>
                  ))
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
