"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
require("colors");
var Listener = /** @class */ (function () {
    function Listener(client) {
        this.ackWait = 5 * 1000;
        this.client = client;
    }
    Listener.prototype.subscriptionOptios = function () {
        return this.client
            .subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupName);
    };
    Listener.prototype.listen = function () {
        var _this = this;
        var subscription = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptios());
        subscription.on("message", function (message) {
            console.log(("Message Recevied " + _this.subject + "  / " + _this.queueGroupName).green.bold);
            var parsedData = _this.parseMessage(message);
            _this.onMessage(parsedData, message);
        });
    };
    Listener.prototype.parseMessage = function (message) {
        var data = message.getData();
        if (typeof data === "string") {
            return JSON.parse(data);
        }
        else if (data instanceof Buffer) {
            return JSON.parse(data.toString("utf-8"));
        }
    };
    return Listener;
}());
exports.Listener = Listener;
