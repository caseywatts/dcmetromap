/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "dcmetromap",
    short_name: "dcmetromap",
    description: "",
    start_url: "/dcmetromap",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [192, 512].map((size) => ({
      src: `/assets/icons/appicon-${size}.png`,
      sizes: `${size}`,
      type: "image/png"
    }))
  };
}
