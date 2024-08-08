export function elvish(hljs) {
  const cmdStarter = /(^|\{ |\{\t|\(|\||\;)[ \t]*/;
  const cmdNameEnder = /[ \t)}<>;|&]/;
  const ctrlKeywordStarter = /\}[ \t]+/;
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
          cmdStarter,
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
        begin: [
          cmdStarter,
          /for/,
          /[ \t]+[\w\d_:~-]+/,
        ],
        beginScope: {
          1: 'operator',
          2: 'keyword',
          3: 'variable',
        },
      },
      {
        begin: [
          ctrlKeywordStarter,
          /catch/,
          /[ \t]+[\w\d_:~-]+/,
        ],
        beginScope: {
          1: 'operator',
          2: 'keyword',
          3: 'variable',
        },
      },
      {
        begin: [
          cmdStarter,
          /(nop|!=|!=s|%|\*|\+|-gc|-ifaddrs|-log|-override-wcwidth|-stack|-|\/|<|<=|<=s|<s|==|==s|>|>=|>=s|>s|all|assoc|base|bool|break|call|cd|compare|constantly|continue|count|defer|deprecate|dissoc|drop|each|eawk|echo|eq|eval|exact-num|exec|exit|external|fail|fg|float64|from-json|from-lines|from-terminated|get-env|has-env|has-external|has-key|has-value|is|keys|kind-of|make-map|multi-error|nop|not-eq|not|ns|num|one|only-bytes|only-values|order|peach|pprint|print|printf|put|rand|randint|range|read-line|read-upto|repeat|repr|resolve|return|run-parallel|search-external|set-env|show|sleep|slurp|src|styled|styled-segment|take|tilde-abbr|time|to-json|to-lines|to-string|to-terminated|unset-env|use-mod|wcswidth)/,
          cmdNameEnder,
        ],
        beginScope: {
          1: 'operator',
          2: 'built_in',
          3: 'operator',
        }
      },
      {
        begin: [
          cmdStarter,
          /and|or|coalesce|use|var|set|tmp|with|del|pragma|fn|while|for|try|if/,
          cmdNameEnder,
        ],
        beginScope: {
          1: 'operator',
          2: 'keyword',
          3: 'operator',
        }
      },
      {
        begin: [
          ctrlKeywordStarter,
          /elif|else|catch|finally/,
          cmdNameEnder,
        ],
        beginScope: {
          1: 'operator',
          2: 'keyword',
          3: 'operator',
        },
      },
      {
        scope: 'operator',
        match: '[*?|&;<>()\\[\\]{}]',
      },
    ],
  };
}
