'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const stevie = {

  store: new JsonStore('./models/stevie.json', { info: {} }),
  collection: 'employee',

getAppInfo() {
  const employee = this.store.findAll(this.collection);
  return employee[0];
},

};

export default stevie;