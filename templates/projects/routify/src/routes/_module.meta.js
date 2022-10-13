import { createFetchApi } from "@deboxsoft/module-client";

/**
 * @param context {MetaContext}
 * @returns {Promise<{env}>}
 */
export default (context) => {
  const serverApiOpts = context.serverApiOpts;
  context.node.meta = serverApiOpts;
  createFetchApi({
    ...serverApiOpts,
    prefixUrl: serverApiOpts.apiPath
  });
  return context.node.meta;
};
