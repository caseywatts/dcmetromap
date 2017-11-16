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
    icons: [
      {
        src: '/assets/icons/appicon-32.png',
        sizes: `32x32`,
        type: 'image/png',
        targets: ['favicon']
      },
      ...[192, 512].map((size) => ({
        src: `/assets/icons/appicon-${size}.png`,
        sizes: `${size}x${size}`,
        type: "image/png"
      }))
    ]
  };
}
