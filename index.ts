import app from './src/server';
import http from 'http';
import https from 'https';
import fs from 'fs';
import { logger } from './src/utils/logger';

(async () => {
  try {
    const HTTP_PORT = process.env.HTTP_PORT || 9876;
    const HTTPS_PORT = process.env.HTTPS_PORT || 5443;

    let sslOptions;
    try {
      sslOptions = {
        key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./cert.pem'),
      };
    } catch (error) {
      logger.warn('SSL certificate not found, starting only HTTP server.');
    }

    const httpServer = http.createServer(app);
    httpServer.listen(HTTP_PORT, () => {
      logger.info(`HTTP Server running on http://localhost:${HTTP_PORT} ✅`);
    });

    if (sslOptions) {
      const httpsServer = https.createServer(sslOptions, app);
      httpsServer.listen(HTTPS_PORT, () => {
        logger.info(`HTTPS Server running on https://localhost:${HTTPS_PORT} ✅`);
      });
    }

    process.on('uncaughtException', (err) => {
      logger.error('Uncaught Exception: ', err.message || 'Unknown Error');
      process.exit(1);
    });

    process.on('unhandledRejection', (reason: any) => {
      logger.error('Unhandled Rejection: ', reason || 'Unknown Reason');
      process.exit(1);
    });
  } catch (err: any) {
    logger.error('Failed to start the server:', err.message || 'Unknown Error');
    process.exit(1);
  }
})();
