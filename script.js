#!/usr/bin/env node

const shell = require('shelljs');

const run = () => {
  shell.cp('-n', '.env.example', '.env');
};

run();
