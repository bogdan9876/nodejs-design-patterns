import { Kafka } from 'kafkajs';

const kafka = new Kafka({ clientId: 'consumer', brokers: ['localhost:9092'] });

const consumer = kafka.consumer({ groupId: 'test-group' })
 
await consumer.connect()
await consumer.subscribe({ topic: 'topic1', fromBeginning: true })

await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log({
            value: message.value!.toString(),
        })
    },
})