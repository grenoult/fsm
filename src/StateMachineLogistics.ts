class StateMachineLogistics {
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

export default StateMachineLogistics;