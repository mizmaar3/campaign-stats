import _ from 'lodash';
import C from './constants';

/**
* Function to return  filtered ItemStore records
* Depending on FilterType
*/
const getFilteredItems = (records, filterType) => {
  let filteredItems;
  if (filterType === C.FILTER_POSITIVE) {
    filteredItems = _.filter(records, (itm) => {
      return itm.balance > -1;
    });
  }

  if (filterType === C.FILTER_NEGATIVE) {
    filteredItems = _.filter(records, (itm) => {
      return itm.balance < 0;
    });
  }

  if (filterType === C.FILTER_NONE) {
    filteredItems = records;
  }

  return filteredItems;
}

const Reducer = (state={}, action) => {
  switch(action.type) {
    /**
    * New Item addition in records
    **/
    case C.ADD_ITEM:
      return {
        filterBy: state.filterBy,
        records: [...state.records, action.payload],
        filteredItems: getFilteredItems([...state.records, action.payload], state.filterBy)
      }

    /**
    * Delete item from records
    **/
    case C.DELETE_ITEM:
      let records = _.filter(state.records, (itm) => {
        return itm.id != action.payload.id
      });
     return {
       filterBy: state.filterBy,
       records: records,
       filteredItems: getFilteredItems(records, state.filterBy)
     }

   /**
   * Filter record items
   **/
    case C.FILTER_ITEM:
      let filtered = getFilteredItems(state.records, action.payload.filterType);
      return {
        filterBy: action.payload.filterType,
        records: state.records,
        filteredItems: [...filtered]
      }
    default:
     return state
  }

};

export default Reducer;
