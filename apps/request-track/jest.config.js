module.exports = {
  name: 'request-track',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/request-track',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
