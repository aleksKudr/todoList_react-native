import React, {useEffect, useState, useCallback, useMemo} from "react";
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
  }, [ selected, setColor, color])

  const renderText = useMemo(() => (
    <View>
      <Text style={{color: color, fontSize: 20}} onPress={handlePress}>{item.name}</Text>
    </View>
  ), [color])

  return renderText;
}

export default connect((state) => ({
  selected: state.todo.selected
}),
{
  select: actions.select
})(InputToAdd)