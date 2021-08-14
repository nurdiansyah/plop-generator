import { name, version } from '../../package.json'

export const getVersion = () => ({ name, version, node: process.version })
