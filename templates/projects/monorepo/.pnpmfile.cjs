function readPackage(pkg, context) {
  // This will change any packages using baz@x.x.x to use baz@1.2.3
  // if (pkg.dependencies.baz) {
  //   pkg.dependencies.baz = '1.2.3';
  // }

  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}
