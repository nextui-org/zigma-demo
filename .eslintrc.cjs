/* eslint-disable sort-keys-fix/sort-keys-fix, sort-keys */

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: [require.resolve("@zigma.io/config/eslint/react.js")],
};
