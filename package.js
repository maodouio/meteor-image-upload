Package.describe({
  name: 'maodouio:meteor-image-upload',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Upload image to qiniu cloud',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/maodouio/meteor-image-upload',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('meteorhacks:npm@1.5.0');
  api.use("templating", "client");
  api.use('underscore',['client', 'server']);
  api.use('tracker','server');
  api.use('session','client');

  api.export('Maodouio');
  api.addFiles('qiniu-uploader.js');

  api.addFiles('server/qiniu-node-sdk.js', 'server');
  api.export('QiniuNodeSDK', 'server');
  api.addFiles([
    'client/imgUpload.html',
    'client/imgUpload.js'
  ], 'client');
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
