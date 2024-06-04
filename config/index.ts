import {devConfig} from './index.dev';
import {prodConfig} from './index.prod';
const appMode = 'dev';
export const config = appMode == 'dev' ? devConfig : prodConfig;
