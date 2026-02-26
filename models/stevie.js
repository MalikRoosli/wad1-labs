'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const stevie = {

  store: new JsonStore('./models/stevie.json', { info: {} }),
  collection: 'employees',

getAppInfo() {
  return this.store.findAll(this.collection);
},

};

export default stevie;