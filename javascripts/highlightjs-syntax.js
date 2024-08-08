export function elvish(hljs) {
  return {
    name: 'Elvish',
    contains: [
      hljs.HASH_COMMENT_MODE,
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
    ],
  };
}
