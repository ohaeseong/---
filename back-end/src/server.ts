import express, { Express } from 'express';
import { graphqlHTTP } from 'express-graphql';
import HTTP from 'http';
import HTTPS from 'https';
import path from 'path';
import cors from 'cors';
import fs from 'fs';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String
        persons: [Person]
    }

    type Person {
        id: ID
        name: String
        age: Int
    }
`);

const root = {   
    hello: () => 'Hello world!',
    persons: () => {
        return [
            {name:"kim", age: 20},
            {name:"lee", age: 30},
            {name:"park", age: 40},
        ];
    } 
};


class Server {
  public app: Express; // app 타입 선언
  public server: HTTP.Server; // server 타입 선언

  constructor() {
    this.app = express(); // app 데이터 set
    this.server = HTTP.createServer(this.app); // server create
  }

  // controller router use
  private setRouter() {
    // this.app.use('/api', Container.get(RootRouter).getRouter());
    this.app.use('/graphql', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true, // 그래프 ql의 스키마 값을 확인할 수 있도록 인터페이스를 제공할지 말지에 대한 여부 (server domain/graphql)로 접속하면 인터페이스 확인 가능
    }))
  }

  // middleWare set
  private setMiddleWare() {
    this.app.use(cors());
    // this.app.use('/static', serveStatic(path.join(__dirname, 'public')) as any);
    this.app.use(express.json());
  }
  
  // server start
  public async run(port: string, sslPort?: string) {
    // DB connection
    // await connectDB();


    // controller router 및 middleware set  함수 실행
    // this.setMiddleWare();
    this.setRouter();

    try {
      this.server.listen(port, () => {
        console.log(`Carrot Clon Server is listening started on port ${port}`);
      });
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const option = {
    //     ca: fs.readFileSync('/etc/letsencrypt/live/work-it.co.kr/fullchain.pem'),
    //     key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/work-it.co.kr/privkey.pem'), 'utf8').toString(),
    //     cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/work-it.co.kr/cert.pem'), 'utf8').toString(),
    //   }

    //   HTTPS.createServer(option, this.app).listen(sslPort, () => {
    //     console.log(`[HTTPS] tech-blog Server is started on port ${sslPort}`);
    //   });
    // } catch (error) {
    //   console.log('[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다.', error);
    // }
  }
}

export default Server;