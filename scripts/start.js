#!/usr/bin/env node

/**
 * Cross-platform start script.
 * Replaces `serve -l ${PORT:-8080} .` which uses POSIX-only shell syntax.
 */

const { spawn } = require('child_process');
const path = require('path');

const port = process.env.PORT || '8080';
const serve = path.join(__dirname, '..', 'node_modules', '.bin', 'serve');

const proc = spawn(serve, ['-l', port, '.'], {
  stdio: 'inherit',
  cwd: path.join(__dirname, '..'),
});

proc.on('close', (code) => {
  process.exitCode = code ?? 0;
});
