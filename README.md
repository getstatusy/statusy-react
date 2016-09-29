# Statusy React

Statusy React is the SPA (single page application) that will ultimately power Statusy Mini, our embed Javascript application to show a mini status page on your website.

## Development

1. `npm install`
2. `npm install -g http-server` - Not necessary but it will make your life easier
3. `./node_modules/.bin/webpack` or `./node_modules/.bin/webpack -- watch` for auto update
4. `http-server`
5. Go to `localhost:8080?statuspage=REPLACEME` with the subdomain of the status page you want

## Building

1. `NODE_ENV=production ./node_modules/.bin/webpack`
2. Upload `build/statusy.mini.html` and `build/statusy.react.min.js` to `public` on the CDN.
3. Refresh both files on the CDN to purge old versions.

## Examples

You should be able to view the current version of the application working here: https://3179f41aacf8aa3a2326-313573f2d42974d7c4e5bc22b804b16e.ssl.cf1.rackcdn.com/statusy-mini.html?statuspage=bitkumo

