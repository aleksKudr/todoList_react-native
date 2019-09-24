import React from 'react';
import {connect } from 'react-redux';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { InputToAdd, Row } from './Components/index.js'

export const TodoList = ({items, selected}) => {
  return (
    <View style={styles.container}>
      <InputToAdd />
      <Text style={styles.title}>Список задач:</Text>
      <ScrollView>
        <View>
          {items.map((item, index) => (
            <Row key={index} item={item}/>
          ))}
        </View>
      </ScrollView>
      <Text style={styles.footer}>Задач добавлено: {items.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 100,
    marginLeft: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: '900'
  },
  footer: {
    marginTop: 100,
  }
});

export default connect((state) => ({
  items: state.todo.items
}))(TodoList)