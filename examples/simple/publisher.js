const { ServiceBroker } = require("moleculer");
const QueueMixin = require("../../index");

let broker = new ServiceBroker({
  logger: console,
  transporter: "TCP",
});

const queueMixin = QueueMixin({
  connection: "amqp://localhost",
  asyncActions: true, // Enable auto generate .async version for actions
  localPublisher: false, // Enable/Disable call this.actions.callAsync to call remote async
});

broker.createService({
  name: "publisher",

  mixins: [
    queueMixin,
  ],

  settings: {
    amqp: {
      connection: "amqp://localhost", // You can also override setting from service setting
    },
  },

  async started() {
    await broker.waitForServices("consumer");

    let name = 1;
    setInterval(async () => {
      const response = await broker.call("consumer.hello.async", {
        params: {
          name,
        },
      });
      this.logger.info(`[PUBLISHER] PID: ${process.pid} Called job with name=${name} response=${JSON.stringify(response)}`);
      name++;
    }, 2000);
  }
});

broker.start().then(() => {
  broker.repl();
});
