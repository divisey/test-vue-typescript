#!/usr/bin/env node

const execSync = require("./execSync");

console.log("$ test ghrelease");

const GH_RELEASE_FILES = "[{ 'test-typescript-vue-dist.zip': './dist' }]";
const files = GH_RELEASE_FILES ? `--assets ${GH_RELEASE_FILES}` : "";

console.log(`$ yarn foxone-exec-ghrelease --draft ${files} --yes`);
execSync(`yarn foxone-exec-ghrelease --draft ${files} --yes`);
