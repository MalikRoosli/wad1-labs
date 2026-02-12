'use strict';

import logger from "../utils/logger.js";
import stevie from "../models/stevie.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const viewData = {
      title: "About The Playlist App",
      employee: stevie.getAppInfo(),
    };

    response.render("about", viewData);
  },
};

export default about;