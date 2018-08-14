import { createStore } from 'redux'
import ItemReducer from './items-reducer.js';
import ReactRedux from 'react-redux';
import Data from '../data/data.js';
import _ from 'lodash';
import C from './constants.js';


/**
* TODO: Save filterBy as separate store
**/
const InitialState = _.extend(Data, {
                    filterBy: C.FILTER_NONE,
                    filteredItems: Data.records
                  });

const ItemsStore = createStore(ItemReducer, InitialState);

export default ItemsStore;
