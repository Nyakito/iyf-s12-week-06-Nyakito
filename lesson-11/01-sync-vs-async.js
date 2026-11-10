console.log("1 - Start");
console.log("2 - Middle");
console.log("3 - End");

console.log("\nPredicting async output:\n");
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

setTimeout(() => console.log("D"), 100);

console.log("E");

// Expected order:
// A, C, E, B, D
// Explanation:
// - synchronous logs run immediately
// - setTimeout callbacks are deferred to the event loop
// - B is queued first, but still runs after the current stack is empty
// - D runs after 100ms, so it appears later than B
