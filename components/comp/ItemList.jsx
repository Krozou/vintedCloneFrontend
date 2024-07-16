import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ArticleCard from '@/components/comp/ArticleCard';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [items]);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://192.168.252.172:5000/api/items");
      const data = response.data;
      setItems(data.reverse());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
        {items.length===0?<Text style={styles.articleMessage}>Aucun Article en vente pour le moment</Text> : items.map(item =>
            <ArticleCard
                key={item._id}
                title={item.title}
                desc={item.description}
                price="€78"
            />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    gap: 5,
    justifyItems: 'flex-start',
    alignItems: 'center',
    flex:1,
    width: '100%',
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  articleMessage:{
    fontWeight: 'bold',
    fontSize: 15,
    color: '#bee4eb',

  }
});

export default ItemList;
