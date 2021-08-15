/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /firebase/, // required to fix third party window not defined errors during gatsby build - https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
