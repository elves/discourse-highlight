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
        begin: '\\$[\\w\\d_:~-]+',
      },
      {
        scope: 'operator',
        begin: '[*?|&;<>()\\[\\]{}]',
      },
    ],
  };
}
