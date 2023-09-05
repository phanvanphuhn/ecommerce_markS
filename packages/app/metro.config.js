const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');
const watchFolders = [
  //Relative path to packages directory
  path.resolve(__dirname + '/..'),
  path.resolve(__dirname + '/../../node_modules'),
];
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
