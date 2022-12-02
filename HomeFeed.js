import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const homeFeedItem = ({ item }) => (
<View style={styles.home_feed_item}>
<Image
    style={styles.art_photo}
    source={{uri: item.art_photo}}
    />
</View>
  );

const HomeFeed = ({ item }) => (
<FlatList
    style={styles.home_feed}
    data={item}
    renderItem={homeFeedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default HomeFeed;

const styles = StyleSheet.create({
    'art_photo': {
        'width': '29vw',
        'height': '40vw',
        'margin': 7,
        'borderRadius': 8
    }
});