'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.length > 0)
    .reduce((styles, declaration) => {
      const colonIndex = declaration.indexOf(':');
      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      return { ...styles, [property]: value };
    }, {});
}

module.exports = convertToObject;
