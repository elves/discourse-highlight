// Note: Discourse will load the definition of all JavaScript modules under the
// javascript/ directory, but it will only execute those living in a
// subdirectory whose name is "initializers" or "api-initializers".
import { apiInitializer } from 'discourse/lib/api';
import { elvish } from '../highlightjs-syntax';

export default apiInitializer('0.8', (api) => {
  api.registerHighlightJSLanguage('elvish', elvish);
});
