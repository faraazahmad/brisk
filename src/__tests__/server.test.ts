import { Server } from '../server';
import fastify = require('fastify');

function example_router(server: any, opts: any) { }

test('Instantiating Server object', () => {
    const server = new Server(example_router, { logger: true });
    expect(server).toBeInstanceOf(Server);
})