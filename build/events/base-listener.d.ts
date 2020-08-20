import { Stan, Message } from "node-nats-streaming";
import { Subjects } from "./Subjects";
import "colors";
interface Event {
    subject: Subjects;
    data: any;
}
export declare abstract class Listener<T extends Event> {
    private client;
    abstract subject: T["subject"];
    abstract queueGroupName: string;
    protected ackWait: number;
    abstract onMessage(data: T["data"], message: Message): void;
    constructor(client: Stan);
    subscriptionOptios(): import("node-nats-streaming").SubscriptionOptions;
    listen(): void;
    parseMessage(message: Message): any;
}
export {};
