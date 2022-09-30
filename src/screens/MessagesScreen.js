import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen'
const items = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: 'https://ohmygeek.net/wp-content/uploads/2019/10/Harold-pain-meme.jpg'
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: 'https://ohmygeek.net/wp-content/uploads/2019/10/Harold-pain-meme.jpg'
  }
]
function MessagesScreen(props) {
  const [refreshing, setRefreshing] = useState(false)
  const [messages, setMessages] = useState(items)
  return (
    <Screen >
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) =>
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 666,
              title: 'newtitle1',
              description: 'newdescription1',
              image: 'https://ohmygeek.net/wp-content/uploads/2019/10/Harold-pain-meme.jpg'
            },
            {
              id: 667,
              title: 'newtitle2',
              description: 'newdescription2',
              image: 'https://ohmygeek.net/wp-content/uploads/2019/10/Harold-pain-meme.jpg'
            }
          ])
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({

})

export default MessagesScreen;