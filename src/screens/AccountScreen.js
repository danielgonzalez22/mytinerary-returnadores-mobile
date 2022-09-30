import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Icon from '../components/Icon'
import Screen from '../components/Screen'
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
  {
    title: 'MyTineraries',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    }
  }
]
function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Daniel Gonzalez'
          subTitle='kavellid63@gmail.com'
          image='https://ohmygeek.net/wp-content/uploads/2019/10/Harold-pain-meme.jpg'
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) =>
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
              }
            />
          }
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={
          <Icon
            name='logout'
            backgroundColor='#ffe66d'
          />
        }
      />
    </Screen>
  );
}
export default AccountScreen;
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.beige
  }
})