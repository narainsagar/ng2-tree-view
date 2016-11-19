// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var ENV: string;
declare var FEATURE_REGISTRY: Object;
declare var WEBPACK_THEME: Object;
declare module "textarea-caret" {
  function getCaretCoordinates(element: any, selection: number, options?: { debug: boolean; }): { top: number; left: number; };
  namespace getCaretCoordinates {}
  export = getCaretCoordinates;
}
