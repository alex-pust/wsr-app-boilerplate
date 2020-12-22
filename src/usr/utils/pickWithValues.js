import isNil from 'lodash/isNil';
import pickBy from 'lodash/pickBy';

function hasValue (value) {
  return !isNil(value) && !(value instanceof Function);
}

export default function(object) {
  return pickBy(object, hasValue);
}
