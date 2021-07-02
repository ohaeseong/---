import Server from './server';
// import config from '../config';

// const { port, sslPort } = config;
// const { sslPort } = config;

try {
  const server = new Server();

  server.run(String(8000));
} catch (error) {
  console.error('서버 에러 발생');
  console.error(error);
}