class StateMachineTrafficLights {
    transitions = {
        red: { timeElapsed: {
            nextStatus: 'green',
            timer: 10,
        }},
        orange: { timeElapsed: {
            nextStatus: 'red',
            timer: 15,
        }},
        green: { timeElapsed: {
            nextStatus: 'orange',
            timer: 3,
        }},
    } as any; // TODO fix

    async process() {
        let state = 'red';
        let msg = null;
        let currentTimer = this.transitions[state]['timeElapsed']['timer'];

        while (state != 'error') {
            // Check if state exists first
            if (!this.transitions[state]['timeElapsed']) {
                console.log(`Error: unknown state: ${state}.`);
                break;
            }

            if (currentTimer === 0) {
                currentTimer = this.transitions[state]['timeElapsed']['timer'];
                state = this.transitions[state]['timeElapsed']['nextStatus'];
                console.log(`Time elapsed.`);
                console.log(`New state: ${state} for ${currentTimer} seconds.`);
            }

            
            // Wait for one second 
            // (Note: do not use setTimeout for production env)
            await new Promise(r => setTimeout(r, 1000));
            
            currentTimer--;

            console.log(`${state}: ${currentTimer} seconds remaining.`)
        }
    }
}

export default StateMachineTrafficLights;