import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { setToken } from '@/features/auth';

const App = () => {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  return (
    <View>
      <Button title='Set Token' onPress={() => dispatch(setToken('stringtoken123'))}/>
      <Text>{token}</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})