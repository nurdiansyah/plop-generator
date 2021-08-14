import { MutateVersionResponse, MutateVersionResponseEnum, QueryVersionResponse } from '../../types'

export const queryVersion = async (
  _: undefined,
  __: undefined,
  context: { dataSources: any, log: any }
): Promise<QueryVersionResponse> => {
  context.log.info('getting package version')
  const versionInfo = await context?.dataSources?.versionAPI?.getVersion()
  return versionInfo
}

export const mutateVersion = async (
  _: any,
  { payload }: any,
  context: { dataSources: any, log: any }
): Promise<MutateVersionResponse> => {
  context.log.info('simulating package version mutation', payload)
  return { response: MutateVersionResponseEnum.Ok }
}

export default {
  Query: {
    queryVersion,
  },
  Mutation: {
    mutateVersion,
  }
}
