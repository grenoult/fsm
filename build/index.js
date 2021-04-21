"use strict";
var StateMachine = /** @class */ (function () {
    function StateMachine() {
        this.transitions = {
            initial: { packageSent: 'inDelivery', allPackageSent: 'delivered' },
            inDelivery: { packageSent: 'inDelivery', allPackageSent: 'delivered' },
        }; // TODO fix
        this.messages = [];
        this.messagesCursor = 0;
    }
    StateMachine.prototype.process = function () {
        var state = 'initial';
        var msg = null;
        while (state != 'delivered' && state != 'error') {
            msg = this.getNextMessage();
            state = this.transitions[state][msg] || 'error';
            console.log("Received message: " + msg + ".");
            console.log("New state: " + state + ".");
        }
        console.log("Final state: " + state + ".");
    };
    StateMachine.prototype.getNextMessage = function () {
        if (this.messages[this.messagesCursor] === undefined) {
            console.log("End of going through queue after cursor value " + this.messagesCursor + ".");
            return 'error';
        }
        var result = this.messages[this.messagesCursor];
        this.messagesCursor++;
        return result;
    };
    return StateMachine;
}());
// First example: successful workflow
var fsm1 = new StateMachine();
fsm1.messages = [
    'packageSent',
    'packageSent',
    'allPackageSent',
];
// fsm1.process();
// Second example: after receiving the final successful event (allPackageSent), other events are ignored
var fsm2 = new StateMachine();
fsm2.messages = [
    'allPackageSent',
    'packageSent',
    'packageSent',
];
// fsm2.process();
// Third example: error
var fsm3 = new StateMachine();
fsm3.messages = [
    'test',
];
fsm3.process();
