export function elvish(hljs) {
  return {
    name: 'Elvish',
    contains: [
      {
        scope: 'string',
        begin: '"',
        end: '"',
        contains: [{begin: '\\\\.'}],
      },
      {
        scope: 'string',
        begin: "'",
        end: "'",
      },
      hljs.HASH_COMMENT_MODE,
      {
        scope: 'variable',
        begin: '\\$[\\w\\d_:~-]*',
      },
      // Assignment commands
      {
        scope: '_assign_cmd',
        begin: '(^|\\{\\s|\\(|\\||\\;)\\s*(var|set|tmp|with|del)\\s',
        end: '(=|$)',
        contains: [
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
      {
        scope: 'operator',
        begin: '[*?|&;<>()\\[\\]{}]',
      },
    ],
  };
}
