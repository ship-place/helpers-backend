import * as dotenv from 'dotenv';
import { getEnvPath } from './get-env-path.helper';

export const config = dotenv.config({ path: getEnvPath() });
