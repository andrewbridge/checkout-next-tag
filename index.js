#!/usr/bin/env node

var shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

var currentTag = shell.exec('git describe --tags', {silent:true}).stdout.trim();
var allTags = shell.exec('git tag -l', { silent:true}).stdout;
if (typeof allTags !== 'string' || allTags.length === 0) {
    shell.echo('Sorry, no tags found');
    shell.exit(1);
}
const allTagsArray = allTags.split('\n');
const currentTagIndex = allTagsArray.indexOf(currentTag);
if (currentTagIndex === -1 || currentTagIndex === allTagsArray.length - 1) {
    shell.echo('Sorry, no next tag found');
    shell.exit(1);
}
shell.exec('git checkout tags/' + allTagsArray[currentTagIndex + 1], {silent: true});