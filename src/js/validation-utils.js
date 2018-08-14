const ValidationUtils = {

  isEmpty: (value = '') => {
    return value.length === 0
  },

  isNumber: (value = '') => {
    return !!isNaN(value);
  }

};

export default ValidationUtils;
