export function elvish(hljs) {
  return {
    name: 'Elvish',
    contains: [
      {
        scope: 'string',
        begin: /"/,
        end: /"/,
        contains: [{begin: /\\./}],
      },
      {
        scope: 'string',
        begin: /'/,
        end: /'/,
      },
      hljs.HASH_COMMENT_MODE,
      {
        scope: 'variable',
        match: /\$[\w\d_:~-]*/,
      },
      // Assignment commands
      {
        begin: [
          /(^|\{ |\{\t|\(|\||\;)[ \t]*/,
          /(var|set|tmp|with|del)/,
          /([ \t]+[\w\d_:~-]+)+/,
        ],
        beginScope: {
          1: 'operator',
          2: 'keyword',
          3: 'variable',
        },
      },
      {
        scope: 'operator',
        begin: '[*?|&;<>()\\[\\]{}]',
      },
    ],
  };
}
