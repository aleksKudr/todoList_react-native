import React, {useState, useCallback} from "react";
import {connect } from 'react-redux';
import * as actions from '../../../Store/Actions/todolist.actions';
import { TextInput, Text, Button, StyleSheet, View } from 'react-native';

const InputToAdd = ({
  items,
  add
}) => {

  const [value, setValue] = useState('');
  const [viewLast, setView] = useState(false);
  const hadlerInput = useCallback(text => setValue(text), [setValue] );

  const handlePress = useCallback(() => {
    add(value);
    setView(true);
    setValue('');
  },[value, setValue, setView]);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={{ height: 35, borderColor: 'gray', borderWidth: 1, width: 100 }}
          onChangeText={hadlerInput}
          value={value}
        />
        <Button 
          title='+'
          onPress={handlePress}
        />
      </View>
      <Text>Последняя добавленная:
      {
        viewLast && items[items.length - 1].name
      }
      </Text>
    </>
)
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 50
  },
});

export default connect((state) => ({
  items: state.todo.items
}),
{
  add: actions.add
})(InputToAdd)