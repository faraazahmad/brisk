import fastify from 'fastify';

export class Server {
  server: fastify.FastifyInstance;

  constructor(router: any, opts?: fastify.ServerOptions) {
    this.server = fastify(opts);

    // register root router
    this.server.register(router);
    // register handlebars and view plugin for rendering templates
    this.server.register(require('point-of-view'), {
      engine: {
        handlebars: require('handlebars'),
      },
    });
  }

  public run(port?: number) {
    this.server.listen(port || 3000, err => {
      if (err) {
        this.server.log.error(err);
        process.exit(1);
      }

      this.server.log.info(`server listening on ${this.server.server.address()}`);
    });
  }
}
