import { LogLevel } from '@nestjs/common';
import { isProd } from '../shared/util/env';

const logLevel: LogLevel[] = ['log', 'warn', 'error'];
if (!isProd) logLevel.push('debug');

export { logLevel };
