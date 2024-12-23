import { createLogger, format, transports } from 'winston';
import morgan from 'morgan';
import moment from 'moment-timezone';

export const logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.align(),
        format.printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`),
      ),
    }),
    new transports.File({
      filename: `logs/error/${moment().format('MMM-DD-YYYY')}.log`,
      level: 'error',
      format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.align(),
        format.printf((info) => `${info.level}: ${[info.timestamp]}: ${info.stack}`),
      ),
    }),
    new transports.File({
      filename: `logs/info/${moment().format('MMM-DD-YYYY')}.log`,
      level: 'info',
      format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.align(),
        format.printf((info) => `${info.level}: ${[info.timestamp]}: ${info.message}`),
      ),
    }),
  ],
});

export const morganInstance = morgan('dev', {
  stream: {
    write: (str) => {
      logger.info(str);
    },
  },
});
