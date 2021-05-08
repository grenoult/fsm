import StateMachineLogistics from './StateMachineLogistics';
import StateMachineTrafficLights from './StateMachineTrafficLights';

// First example: successful workflow
const fsm1 = new StateMachineLogistics();
fsm1.messages = [
    'packageSent',
    'packageSent',
    'allPackageSent',
]
console.log('\nStateMachineLogistics: Example 1: successful workflow')
fsm1.process();

// Second example: after receiving the final successful event (allPackageSent), other events are ignored
const fsm2 = new StateMachineLogistics();
fsm2.messages = [
    'allPackageSent',
    'packageSent',
    'packageSent',
]
console.log('\nStateMachineLogistics: Example 2: after receiving the final successful event (allPackageSent), other events are ignored')
fsm2.process();

// Third example: error
const fsm3 = new StateMachineLogistics();
fsm3.messages = [
    'test',
]
console.log('\nStateMachineLogistics: Example 3: error')
fsm3.process();

// Traffic light example
const fsm4 = new StateMachineTrafficLights();
console.log('\nStateMachineTrafficLights: Example')
fsm4.process();