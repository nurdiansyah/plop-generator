export const publicOperationNames = [
  'getVersion',
]

export const isPublic = (operationName: string): boolean => publicOperationNames.includes(operationName)
