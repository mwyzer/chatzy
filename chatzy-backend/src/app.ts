import express, { Express } from 'express';

import { ChatzyServer } from './setupServer';

// import tester from '@feature/tester/'

class Application {
    public initialize(): void {
        const app: Express = express();
        const server: ChatzyServer = new ChatzyServer(app);
        server.start();
    }
}

const application: Application = new Application();
application.initialize();