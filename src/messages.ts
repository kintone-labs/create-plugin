"use strict";

import { Lang } from "./lang";

type LangMap = { [lang in Lang]: string };
type MessageMap = { [key in keyof typeof messages]: LangMap };

const messages = {
  "question.name.en": {
    en: "Input your plug-in name in English [1-64chars]",
    ja: "プラグインの英語名を入力してください [1-64文字]"
  },
  "error.question.name.en": {
    en: "Plug-in name must be 1-64chars",
    ja: "プラグイン名は1〜64文字で入力してください"
  },
  "question.description.en": {
    en: "Input your plug-in description in English [1-200chars]",
    ja: "プラグインの説明を入力してください [1-200文字]"
  },
  "error.question.description.en": {
    en: "Plug-in description must be 1-200chars",
    ja: "プラグインの説明は1〜200文字で入力してください"
  },
  "question.support.ja": {
    en: "Does your plug-in support Japanese?",
    ja: "日本語をサポートしますか？"
  },
  "question.name.ja": {
    en: "Input your plug-in name in Japanese [1-64chars] (Optional)",
    ja: "プラグインの日本語名を入力してください [1-64文字] (省略可)"
  },
  "error.question.name.ja": {
    en: "Plugin name must be within 64chars",
    ja: "プラグイン名は64文字以内で入力してください"
  },
  "question.description.ja": {
    en: "Input your plug-in description in Japanese [1-200chars] (Optional)",
    ja: "プラグインの日本語の説明を入力してください [1-200文字] (省略可)"
  },
  "error.question.description.ja": {
    en: "Plug-in description must be within 64chars",
    ja: "プラグインの日本語の説明を64文字以内で入力してください"
  },
  "question.support.zh": {
    en: "Does your plug-in support Chinese?",
    ja: "中国語をサポートしますか？"
  },
  "question.name.zh": {
    en: "Input your plug-in name in Chinese [1-64chars] (Optional)",
    ja: "プラグインの中国語名を入力してください [1-64文字] (省略可)"
  },
  "error.question.name.zh": {
    en: "Plug-in name must be within 64chars",
    ja: "プラグイン名は64文字以内で入力してください"
  },
  "question.description.zh": {
    en: "Input your plug-in description in Chinese [1-200chars] (Optional)",
    ja: "プラグインの中国語の説明を入力してください [1-200文字] (省略可)"
  },
  "error.question.description.zh": {
    en: "Plug-in description must be within 64chars",
    ja: "プラグインの中国語の説明を64文字以内で入力してください"
  },
  "question.website.url.en": {
    en: "Input your home page url for English (Optional)",
    ja: "プラグインの英語のWebサイトURLを入力してください (省略可)"
  },
  "question.website.url.ja": {
    en: "Input your home page url for Japanese (Optional)",
    ja: "プラグインの日本語のWebサイトURLを入力してください (省略可)"
  },
  "question.website.url.zh": {
    en: "Input your home page url for Chinese (Optional)",
    ja: "プラグインの中国語のWebサイトURLを入力してください (省略可)"
  },
  "question.mobile.support": {
    en: "Does your plug-in support mobile views?",
    ja: "モバイルページをサポートしますか？"
  },
  "question.enable.uploader": {
    en: "Would you like to use @kintone/plugin-uploader?",
    ja: "@kintone/plugin-uploaderを使いますか？"
  },
  "install.dependencies": {
    en: "Installing dependencies...",
    ja: "依存ライブラリをインストールします"
  },
  "introduction.message": {
    en: `
Please answer some questions to create your Kintone plug-in project :)
Let's start!
    `,
    ja: `
kintoneプラグインのプロジェクトを作成するために、いくつかの質問に答えてください :)
では、はじめましょう！
`
  },
  "npm.start": {
    en: "Start watching file changes and create a Kintone plug-in zip file.",
    ja:
      "ファイルの変更を監視してプラグインのzipを自動的に作成するプロセスを起動します"
  },
  "npm.start.with.uploader": {
    en:
      "Next, the plug-in zip file is uploaded automatically by @kintone/plugin-uploader.",
    ja:
      "その後、@kintone/plugin-uploaderにより、プラグインのzipは自動的にアップロードされます"
  },
  "npm.build": {
    en: "Create a Kintone plug-in zip file.",
    ja: "プラグインのzipを作成します"
  },
  "npm.lint": {
    en: "Lint JS files with ESLint.",
    ja: "ESLintを使ってJavaScriptのソースコードをチェックします"
  },
  "next.action": {
    en: "Try the following commands",
    ja: "まずは次のコマンドを実行してください"
  },
  "how.to.use.uploader": {
    en: "Next, input your Kintone subdomain information.",
    ja: "その後、あなたのkintone環境の情報を入力してください"
  },
  "last.message": {
    en: "Have fun developing Kintone plug-ins!",
    ja: "kintoneプラグイン開発をはじめましょう！"
  },
  "developer.site": {
    en: "",
    ja: `開発に関する情報はcybozu developer network:

  https://developer.cybozu.io
`
  },
  "error.already.exists": {
    en: "already exists. Choose a different directory",
    ja: "はすでに存在しています。削除するか、別のディレクトリを指定してください"
  },
  "error.failed.create.plugin": {
    en: "Could not create a plug-in project. Error:",
    ja: "プラグインの作成に失敗しました。 エラー:"
  }
};

/**
 * Returns a message for the passed lang and key
 * @param lang
 * @param key
 */
export function getMessage(lang: keyof LangMap, key: keyof MessageMap): string {
  return messages[key][lang];
}

/**
 * Returns a function bound lang to getMessage
 * @param lang
 */
export function getBoundMessage(
  lang: keyof LangMap
): (key: keyof MessageMap) => string {
  return getMessage.bind(null, lang);
}
