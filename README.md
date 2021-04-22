# Finite State Machine
## Example 1: simple state machine with StateMachineLogistics

A very simple state machine with 3 states and 2 events, where "Initial" is the initial state (all workflows must start from this state) and "Delivered" is the successful final state. Other final state can be "error".

| State ↓ / Event → | Package sent | All packages sent |
|-------------------|--------------|-------------------|
|    Initial        | In delivery  |     Delivered     |
|    In delivery    | In delivery  |     Delivered     |
|    Delivered      |    error     |        error      |
