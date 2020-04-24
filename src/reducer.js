import Immutable from 'immutable';
const initialState = Immutable.Map({
  click: 'falso',
});

export default function reducer(state = initialState, action) {
  if (action.type === 'clicou no botao') {
    return state.set('click', 'verdadeiro2')
  }

  return state;
}