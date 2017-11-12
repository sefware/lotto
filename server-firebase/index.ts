import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import * as functions from 'firebase-functions';

import {renderModuleFactory} from '@angular/platform-server';
import {enableProdMode} from '@angular/core';

import * as express from 'express';
import {readFileSync} from 'fs';

// Faster server-firebase renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server-firebase
const app = express();

// Our index.html we'll use as our template
const template = readFileSync(__dirname + '/browser/index.html').toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require(__dirname + '/server/main.bundle');

const {provideModuleMap} = require('@nguniversal/module-map-ngfactory-loader');

app.engine('html', (_, options, callback) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    // Our index.html
    document: template,
    url: options.req.url,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  }).then(html => {
    callback(null, html);
  });
});

app.set('view engine', 'html');
app.set('views', __dirname + '/browser');

// Server static files from /browser
// app.get('*.*', express.static(__dirname + '/browser'));

// All regular routes use the Universal engine
app.get('**', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600, stale-while-revalidate=120');
  res.render(__dirname + '/browser/index.html', {req});
});

exports.ssr = functions.https.onRequest(app);
