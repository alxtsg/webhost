import server from './server';

process.on('beforeExit', (): void => {
  server.close()
    .then(
      () => {
        console.log('Server is stopped.');
      },
      (error: Error) => {
        console.error('Unable to stop server.');
        console.error(error);
      }
    );
});
