Package.describe({
  summary: "Javascript-state-machine for Meteor"
});

Package.on_use(function (api) {
  api.add_files('javascript-state-machine/state-machine.min.js', 'client');
  api.add_files('main.js', 'client');
  if (api.export){
    api.export('StateMachine', 'client');
  }
});
