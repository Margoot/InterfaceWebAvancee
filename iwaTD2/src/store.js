/**
 * Created by Margot on 29/11/2016.
 */
import React from 'react';

const obj = {};

const Store = {
  saveState: function(state) {
    obj['state'] = state;
  },
  getState: function() {
    return obj['state'];
  }
};

module.exports = Store;