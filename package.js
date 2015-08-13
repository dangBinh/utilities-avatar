Package.describe({
  name: 'bigbug:utilities-avatar',
  version: '0.0.1',
  summary: 'Let utilities avatar come with reactjs:react',
  git: 'https://github.com/dangBinh/utilities-avatar',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.4.1', 'METEOR@1.1.0.1']);
  api.use(['templating', 'reactive-var'], ['client']);
  api.use(['underscore', 'jparker:gravatar@0.3.1'], ['client', 'server']);
  api.use(['meteorhacks:inject-initial@1.0.2'], ['server']);

  // To add support for React we can need to weak link to it so that it's not uncessarily included
  // However we have to force the inclusion of the jsx compiler otherwise our jsx files aren't included.
  // Since JSX is only used when compiling and it isn't delivered to clients this isn't an issue, even for
  // those who aren't using React in their project.

  api.use('reactjs:react');

  api.addFiles(
    [
      'utils.js',
      'helpers.js',
      'export.js',
      'default.png'
    ],
    ['client', 'server']
  );

  api.export('Avatar', ['client', 'server']);

  api.addFiles(
    [
      'blaze/avatar.html',
      'blaze/avatar.js',
      'react/avatar.jsx',
    ],
    ['client']
  );

  api.export('ReactAvatar', ['client']);
});
