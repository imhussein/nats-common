import { Subjects } from "./Subjects";
export interface OrderCanacelledEvent {
    subject: Subjects.OrderCancelled;
    data: {
        id: string;
        ticket: {
            id: string;
            price: number;
        };
    };
}
