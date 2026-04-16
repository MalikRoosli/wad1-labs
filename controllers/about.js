'use strict';

import logger from "../utils/logger.js";
import stevie from "../models/stevie.js";
import accounts from './accounts.js';

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const viewData = {
      title: "About The Playlist App",
      employees: stevie.getAppInfo(),
    };

    response.render("about", viewData);
  },
};

export default about;