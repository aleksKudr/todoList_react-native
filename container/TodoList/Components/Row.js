import React, {useEffect, useState, useCallback} from "react";
import { connect } from 'react-redux';
import * as actions from '../../../Store/Actions/todolist.actions';
import { View, Text } from 'react-native';

const InputToAdd = ({
  select,
  selected,
  item
}) => {
  const [color, setColor] = useState('blue');

  const handlePress = useCallback(() => {
    setColor(!selected.has(item.id) ? 'red' : 'blue');
    select(item.id);
  },[setColor]);

  useEffect(() => {
    const newColor = selected.has(item.id) ? 'red' : 'blue';
    if (color !== newColor) {
      setColor(newColor);
    }
  }, [selected])

  return (
    <View>
      <Text style={{color: color, fontSize: 20}} onPress={handlePress}>{item.name}</Text>
    </View>
)
}

export default connect(undefined,
{
  select: actions.select
})(InputToAdd)