import TYPE from '../type';

export const defaultState = {
  items: [
    { 
      name: "item 0",
      id: 0
    },
    { 
      name: "item 1",
      id: 1
    },
    { 
      name: "item 2",
      id: 2
    },
    { 
      name: "item 3",
      id: 3
    },
    { 
      name: "item 4",
      id: 4
    }
  ],
  selected: new Set([])
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case TYPE.ADD:
      return { 
        ...state,
         items: [
           ...state.items,
            {
              name: action.payload,
              id: state.items.length
            }
        ]
      };
    case TYPE.SELECT: {
      const { items, selected } = state;
      const { payload } = action;
      // if (selected.has(payload)) {
      //   selected.delete(payload);
      // } else selected.add(payload);
      // const newSelected = selected.size === items.length ? new Set([]) : selected
      // return { ...state, selected: newSelected }
      return {...state, selected: new Set([payload])}
    }

    default:
      return state;
  }
};
