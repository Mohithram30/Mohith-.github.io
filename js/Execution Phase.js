let a = 10;

function foo() {
  let b = 20;
  console.log(a + b);
}

foo();

When foo is called, a new execution context is created for foo. Inside this context, b is assigned a value, and the console.log statement uses a from the outer/global context.
