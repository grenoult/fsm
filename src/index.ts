class StateMachine {
    transitions = {
        initial: { packageSent: 'inDelivery', allPackageSent: 'delivered' },
        inDelivery: { packageSent: 'inDelivery', allPackageSent: 'delivered' },
    } as any; // TODO fix

    messages = [] as string[];

    messagesCursor = 0;

    process() {
        let state = 'initial';
        let msg = null;

        while (state != 'delivered' && state != 'error') {
            msg = this.getNextMessage();
            state = this.transitions[state][msg] || 'error';
            
            console.log(`Received message: ${msg}.`)
            console.log(`New state: ${state}.`)
        }

        console.log(`Final state: ${state}.`)
    }

    getNextMessage() {
        if (this.messages[this.messagesCursor] === undefined) {
            console.log(`End of going through queue after cursor value ${this.messagesCursor}.`);
            return 'error';
        }

        const result = this.messages[this.messagesCursor];
        this.messagesCursor++;
        return result;
    }
}

// First example: successful workflow
const fsm1 = new StateMachine();
fsm1.messages = [
    'packageSent',
    'packageSent',
    'allPackageSent',
]
// fsm1.process();

// Second example: after receiving the final successful event (allPackageSent), other events are ignored
const fsm2 = new StateMachine();
fsm2.messages = [
    'allPackageSent',
    'packageSent',
    'packageSent',
]
// fsm2.process();

// Third example: error
const fsm3 = new StateMachine();
fsm3.messages = [
    'test',
]
fsm3.process();