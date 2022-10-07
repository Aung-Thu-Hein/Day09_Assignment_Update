
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const ContactListItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={require('../components/img/img1.jpg')}
          style={styles.img} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.Text}>{props.position}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Icon name="star-o" size={25} color="white" style={{marginRight: 20}}/>
        <Icon name="phone" size={25} color="white"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 7,
    padding: 7,
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    borderRadius: 10,
  },

  left: {
    display: 'flex',
    flexDirection: 'row',
  },

  right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginHorizontal: 7,
  },

  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 3,
  },

  position: {
    fontSize: 10,
    fontWeight: '300',
    color: '#969997',
  },
})

export default ContactListItem;
