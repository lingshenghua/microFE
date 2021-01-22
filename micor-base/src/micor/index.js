import { registerMicroApps, start } from 'qiankun';
import apps from './apps';
// import '../public-path';

registerMicroApps(apps)

start()