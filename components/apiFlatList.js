import React, {Component} from 'react';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';

export default class Api extends Component {

  constructor(props){
    super(props)
    this.state = {
      dataSource: [], 
    }
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson.data
      })
    })
  }

  /*ListItem = () => {
    return(
      <Text>Hello</Text>
    )
  }
*/
  
  ListItem = ({item}) => {
    return(
      <View style={styles.listItem}>
        <Image style={styles.img} source={{uri: item.avatar}}/>
        <View style={styles.textContainer}>
          <Text style={styles.names}>{item.first_name + " " + item.last_name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View>
    )
  }

  render() {
    let {container} = styles
    let {dataSource} = this.state 
    return(
      <View style={container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={dataSource}
          renderItem = {this.ListItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'stretch',

  },

  listItem: {
    width: '100%',
    padding: 10,
    marginHorizontal: 5,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'grey',
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 10,
  },

  names: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },

  email: {
    fontSize: 13,
    fontWeight: '400',
    color: 'white',
  },


})