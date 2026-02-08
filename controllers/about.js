'use strict';

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    response.send('About the Playlist app');   
  },
};

export default about;
