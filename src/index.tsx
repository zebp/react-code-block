import { CSSProperties } from "react";
import { IRawGrammar, IRawTheme } from "vscode-textmate";

export interface NamedThemeOptions {
  theme: string;
}

export interface ThemeLoaderOptions {
  /**
   * A function for providing a theme used to highlight tokens defined by the grammar.
   */
  themeLoader: () => Promise<IRawTheme>;
}

export interface NamedGrammerOptions {
  /**
   * A language's grammer definition used in the tokenization process. This will be fetched from
   * a remote CDN by default. If this undesirable behavior you should use "grammarLoader".
   */
  grammar: string;
}

export interface GrammarLoaderOptions {
  /**
   * A function for providing language grammars instead of them being fetched from remote.
   */
  grammarLoader: () => Promise<IRawGrammar[]>;
}

export interface CodeBlockOptions {
  code: string;
  /**
   * What caching strategy should be used for grammars and themes so they don't need to be loaded
   * every time a code block needs to be highlighted.
   *
   * off: do not cache anything.
   * memory: cache the grammars and theme in the page's memory, wiping when the page is reset.
   * persist: cache the grammars and theme in the user's local storage, persisting when reloaded.
   */
  cacheThemeAndGrammars: "off" | "memory" | "persist";
  /**
   * Style to be applied to the div wrapping the highlighted code.
   */
  style?: CSSProperties;
  /**
   * A callback invoked when the highlighting is complete. Because we might need to fetch some
   * resources necessary for highlighting, this is an asynchronous operation.
   */
  onHighlight?: () => void;
}

export type CodeBlockProps = CodeBlockOptions &
  (NamedThemeOptions | ThemeLoaderOptions) &
  (NamedGrammerOptions | GrammarLoaderOptions);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CodeBlock(props: CodeBlockProps) {
  throw new Error("unimplemented");
}
