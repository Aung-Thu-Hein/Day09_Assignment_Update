
import React from 'react';
import ContactListItem from '../components/ContactListItem';

const Home = () => {
  return (
    <>
      <ContactListItem name="Mary" position="Manager" />
      <ContactListItem name="Eric" position="Leader" />
      <ContactListItem name="John" position="Staff" />
      <ContactListItem name="Bobby" position="Account" />
      <ContactListItem name="Mike" position="Account" /> 
    </>
  );
}

export default Home;