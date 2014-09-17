Package.describe({
  summary: "Javascript-state-machine for Meteor",
  version: "0.1.0",
  git: "https://github.com/zhouzhuojie/meteor-state-machine.git",
  name: "mrt:state-machine"
});

Package.on_use(function (api) {
  api.add_files('javascript-state-machine/state-machine.min.js', 'client');
  api.add_files('main.js', 'client');
  if (api.export){
    api.export('StateMachine', 'client');
  }
});

if (Package.on_test) {
  Package.on_test(function (api) {
    if (Package.onTest) {
      api.use(['mrt:state-machine', 'tinytest', 'test-helpers'], ['client']);
    } else {
      api.use(['state-machine', 'tinytest', 'test-helpers'], ['client']);
    }
    api.add_files('test-mrt:state-machine.js', ['client']);
  });
}
