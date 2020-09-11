import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Playground() {
 

  useEffect(() => {
    const subscriber = auth()
    .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

 
  return (
    <View>
      
    </View>
  );
}