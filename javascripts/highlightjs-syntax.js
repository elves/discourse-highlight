export function elvish(hljs) {
  const operator = {
    scope: 'operator',
    begin: '[*?|&;<>()\\[\\]{}]',
  };

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
        begin: /\$[\w\d_:~-]*/,
      },
      // Assignment commands
      {
        scope: '_assign_cmd',
        begin: /(?=(^|\{ |\{\t|\(|\||\;)[ \t]*(var|set|tmp|with|del)[ \t])/,
        end: /=|$/,
        contains: [
          operator,
          {
            scope: 'keyword',
            begin: 'var|set|tmp|with|del',
          },
          {
            scope: 'variable',
            begin: '\\s+[\\w\\d_:~-]+',
          },
        ],
      },
      operator,
    ],
  };
}
