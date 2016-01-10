Package.describe({
  name: 'jiatian:qiniu-uploader',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('meteorhacks:npm@1.5.0');
  api.addFiles('qiniu-uploader.js');
});

Npm.depends({
  'qiniu': '6.1.9'
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jiatian:qiniu-uploader');
  api.addFiles('qiniu-uploader-tests.js');
});
