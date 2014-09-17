Tinytest.add('State-machine can be initalized', function (test) {
  test.isNotNull(StateMachine, 'StateMachine should exist');
  test.isTrue(typeof(StateMachine.create) === "function", 'create should be a function');
});
