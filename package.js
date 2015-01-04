Package.describe({
  summary: "Javascript-state-machine for Meteor",
  version: "0.1.1",
  git: "https://github.com/zhouzhuojie/meteor-state-machine.git",
  name: "mrt:state-machine"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.add_files('javascript-state-machine/state-machine.min.js', 'client');
  api.add_files('main.js', 'client');
  api.export('StateMachine', 'client');
});

Package.onTest(function (api) {
  api.use(['mrt:state-machine', 'tinytest'], ['client']);
  api.add_files('test-mrt:state-machine.js', ['client']);
});
