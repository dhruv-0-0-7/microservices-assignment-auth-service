const amqp = require('amqplib');

/*
    'SEND_MAIL' RabbitMQ queue for listening to
    messages sent by 'User Service'
 */
async function emailQueueListener() {
    const url = process.env.RMQ_URL ?? 'amqp://localhost';
    const connection = await amqp.connect(url);
    const channel = await connection.createChannel();
    const queueName = 'SEND_MAIL';
    await channel.assertQueue(queueName, { durable: false });
    await channel.consume(queueName, (message) => {
        if (message) {
            console.log(JSON.parse(message.content.toString()));
            channel.ack(message);
        }
    });
}

module.exports = {
    emailQueueListener
};