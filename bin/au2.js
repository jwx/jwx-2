#!/usr/bin/env node
'use strict';

let jwx2;
// Require lib (local, for debugging) or dist (production)
try {
    jwx2 = require('../lib');
} catch (e) {
    jwx2 = require('../dist');
}

const { version } = require('../package.json');
console.log(`jwx-2 v${version}\n`);

jwx2().catch(error => {
    console.error(error);
    process.exit(1);
});
