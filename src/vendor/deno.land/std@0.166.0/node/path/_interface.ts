// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

/**
 * A parsed path object generated by path.parse() or consumed by path.format().
 */
export interface ParsedPath {
  /**
   * The root of the path such as '/' or 'c:\'
   */
  root: string;
  /**
   * The full directory path such as '/home/user/dir' or 'c:\path\dir'
   */
  dir: string;
  /**
   * The file name including extension (if any) such as 'index.html'
   */
  base: string;
  /**
   * The file extension (if any) such as '.html'
   */
  ext: string;
  /**
   * The file name without extension (if any) such as 'index'
   */
  name: string;
}

export type FormatInputPathObject = Partial<ParsedPath>;