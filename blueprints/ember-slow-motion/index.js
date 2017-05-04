/* eslint-env node */
module.exports = {
  description: 'Installation blueprint for ember-slow-motion',
  normalizeEntityName() {
     // this prevents an error when the entityName is
     // not specified (since that doesn't actually matter
     // to us
   },
   afterInstall() {
     return this.addPackageToProject('ember-lifeline', '^1.0.4');
   }
};
