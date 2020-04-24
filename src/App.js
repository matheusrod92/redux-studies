import React from 'react';
import {
  // connect,
  Provider,
  useDispatch,
  useSelector
} from 'react-redux';

import initStore from './store';

const store = initStore();

function Container() {
  const dispatch = useDispatch()
  const click = useSelector(state => state.getIn(['reducer', 'click']));
  const onClick = () => dispatch({ type: 'clicou no botao' });

  return (
    <div>
      <button onClick={onClick}>click</button>
      {click}
    </div>
  );
}

// // setter
// const mapDispatchToProps = (dispatch) => ({
//   clickedButton: () => {
//     dispatch({ type: 'clicou no botao' });
//   }
// });

// // getter
// const mapStateToProps = (state) => ({
//   click: state.getIn(['reducer', 'click']),
// });


// const ConnectedContainer = connect(mapStateToProps, mapDispatchToProps)(Container);

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

/**
 * ImmutableMap ({
 *   reducer: ImmutableMap ({
 *     click: true,
 *   })
 * })
 */

export default App;
