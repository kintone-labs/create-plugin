'use strict';

import * as assert from 'assert';
import { getDefaultLang } from '../src/lang';

describe('lang', () => {
  describe('getDefaultLang', () => {
    it('should return "ja" or "en" based the passed value', () => {
      assert.equal(getDefaultLang('ja_JP.UTF-8'), 'ja');
      assert.equal(getDefaultLang('C'), 'en');
    });
    it('should return "en" as the default value if the passed value is null or undefined', () => {
      assert.equal(getDefaultLang(null), 'en');
      assert.equal(getDefaultLang(undefined), 'en');
    });
  });
});
