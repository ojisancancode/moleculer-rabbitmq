## v1.2.0
- [Deps]
  - Upgrade amqplib version to 0.9.1

## v1.1.10
- [Bug]
  - Only log error message when retry job failed, and log debug messages when job retried

## v1.1.9
- [Bug]
  - Fix bug retry message cause worker crash

## v1.1.8
- [Bug]
  - Fix bug calling logger in incorrect this

## v1.1.7
- [Security]
  - Replace defaults-deep with lodash.defaultsdeep to avoid Prototype pollution attack

## v1.1.6
- [Bug]
  - Fix bug not init amqp connection

## v1.1.5
- [Bug]
  - Fix bug not await when calling channel.ack and channel.reject
- [Improvement]
  - Handle connection and channel exception and close event
- [Chore]
  - Audit error message

## v1.1.4
- [Fix]
  - Fix bug message headers is clear when retry

## v1.1.3
- [Fix]
  - Fix bug graceful shutdown not cancel consumer

## v1.1.2
- [Fix]
  - Fix bug using merge-deep instead of defaults-deep

## v1.1.1
- [Fix]
  - Fix peerDependencies moleculer

## v1.1.0
- [Add]
  - Support moleculer graceful shutdown using serviceBroker.tracking option
- [Fix]
  - Fix critical bug that cause queue not working on v1.0.0

## v1.0.0 (DO NOT USE)
- [Breaking Change]
  - Queues in RabbitMQ created by v0.1.0 must be re-create because retry/deduplication feature cause queue configuration changed
  - Rename configuration to make it more relevant with amqplib configuration, please follow README to validate your configuration
    - queue.channel => queue.amqp
    - queue.channel.assert => queue.amqp.queueAssert
    - queue.consume => queue.amqp.consume
- [Add]
  - Add retry feature by RabbitMQ requeue or using [rabbitmq-delayed-message-exchange](https://github.com/rabbitmq/rabbitmq-delayed-message-exchange) plugin
  - Add deduplication feature using [rabbitmq-message-deduplication](https://github.com/noxdafox/rabbitmq-message-deduplication) plugin
- [Fix]
  - Fix bug not apply queue configuration when assert queue

## v0.1.0
- First release
