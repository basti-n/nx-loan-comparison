module.exports = {
  name: 'loan-comparison',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/loan-comparison',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
