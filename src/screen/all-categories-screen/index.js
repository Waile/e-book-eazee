import {Text, View, ScrollView, FlatList, Image, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Header from '../../components/header';
import {constants} from './constants';
import PoliciesListItem from '../../components/policies-list-item';
import {IMAGES} from '../../../utils';
import Navigation from '../../navigation/navigation-constants';
import api from '../../../api/baseApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../components/redux/slice/cartSlice';

const Marketplace = ({navigation}) => {
  const [selectedItemId, setSelectedItemId] = useState(0);
  const [showFilterData, setShowFilterData] = useState(false);
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState(books);
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

  useEffect(() => {
    getBooks();
    getCategories();
  }, []);

  const onItemPress = (id) => {
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

  const dispatch=useDispatch()
  const handleAddToCart=(book)=>{
    let item=null;
    item={...book,quantity:1}
   dispatch(addToCart(item))
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Header title={constants.HEADING} />
          <Text style={styles.allCategoryHeading}>
            {constants.ALL_CATEGORIES}
          </Text>
          {/* CATEGORIES LIST  */}
          <View style={styles.categoriesList}>
            <View style={styles.flatListWrapper}>
              <View style={styles.listContainer}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id}
                  data={[allCategories, ...categories]}
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
          {/* BOOKS */}
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
                        <Image source={IMAGES.cartImage} />
                        </Pressable>
                        <Text style={styles.bookStatusText}>
                          {book.content_type}
                        </Text>
                      </View>
                    </View>
                  ))
                )
              ) : (
                books.map(book => (
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
      </ScrollView>
    </View>
  );
};

export default Marketplace;
