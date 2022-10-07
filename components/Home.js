
import React from 'react';
import ContactListItem from '../components/ContactListItem';

const Home = ({navigation}) => {
  return (
    <>
      <ContactListItem name="Mary" position="Manager" onPress={() => navigation.navigate("Details")}/>
      <ContactListItem name="Eric" position="Leader" onPress={() => navigation.navigate("Manager")}/>
      <ContactListItem name="John" position="Staff" onPress={() => navigation.navigate("BSE")}/>
      <ContactListItem name="Bobby" position="Account" onPress={() => navigation.navigate("Leader")}/>
      <ContactListItem name="Mike" position="Account" onPress={() => navigation.navigate("Details")}/> 
    </>
  );
}

export default Home;