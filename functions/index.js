"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
require("reflect-metadata");
const functions = require("firebase-functions");
const platform_server_1 = require("@angular/platform-server");
const core_1 = require("@angular/core");
const express = require("express");
const fs_1 = require("fs");
core_1.enableProdMode();
const app = express();
const template = fs_1.readFileSync(__dirname + '/browser/index.html').toString();
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(__dirname + '/server/main.bundle');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
app.engine('html', (_, options, callback) => {
    platform_server_1.renderModuleFactory(AppServerModuleNgFactory, {
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
app.get('**', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600, stale-while-revalidate=120');
    res.render(__dirname + '/browser/index.html', { req });
});
exports.ssr = functions.https.onRequest(app);
