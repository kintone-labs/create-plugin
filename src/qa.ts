"use strict";

import { Answers, Question } from "inquirer";
import { Lang } from "./lang";
import { Manifest } from "./manifest";
import { getBoundMessage } from "./messages";

export type UserAnswers = Manifest & {
  ja: boolean;
  cn: boolean;
  mobile?: boolean;
  config?: boolean;
  pluginUploader: boolean;
};

const NAME_MAX_LENGTH = 64;
const DESCRIPTION_MAX_LENGTH = 200;

/**
 * Build questions for creating a kintone plugin project
 * @param outputDir
 */
export function buildQuestions(outputDir: string, lang: Lang): Question[] {
  const m = getBoundMessage(lang);
  return [
    {
      type: "input",
      name: "name.en",
      message: m("question.name.en"),
      default: outputDir.replace(/.*\//, ""),
      validate: value =>
        value.length > 0 && value.length <= NAME_MAX_LENGTH
          ? true
          : m("error.question.name.en")
    },
    {
      type: "input",
      name: "description.en",
      message: m("question.description.en"),
      default: (answers: Answers) => answers.name.en,
      validate: value =>
        value.length > 0 && value.length <= DESCRIPTION_MAX_LENGTH
          ? true
          : m("error.question.description.en")
    },
    {
      type: "confirm",
      name: "ja",
      default: lang === "ja" ? true : false,
      message: m("question.support.ja")
    },
    {
      type: "input",
      name: "name.ja",
      when: answers => answers.ja,
      message: m("question.name.ja"),
      validate: value =>
        value.length === 0 || value.length <= NAME_MAX_LENGTH
          ? true
          : m("error.question.name.ja")
    },
    {
      type: "input",
      name: "description.ja",
      when: answers => answers.ja,
      message: m("question.description.ja"),
      validate: value =>
        value.length === 0 || value.length <= DESCRIPTION_MAX_LENGTH
          ? true
          : m("error.question.description.ja")
    },
    {
      type: "confirm",
      name: "zh",
      default: false,
      message: m("question.support.zh")
    },
    {
      type: "input",
      name: "name.zh",
      when: answers => answers.zh,
      message: m("question.name.zh"),
      validate: value =>
        value.length === 0 || value.length <= NAME_MAX_LENGTH
          ? true
          : m("error.question.name.zh")
    },
    {
      type: "input",
      name: "description.zh",
      when: answers => answers.zh,
      message: m("question.description.zh"),
      validate: value =>
        value.length === 0 || value.length <= DESCRIPTION_MAX_LENGTH
          ? true
          : m("error.question.description.zh")
    },
    {
      type: "input",
      name: "homepage_url.en",
      message: m("question.website.url.en")
    },
    {
      type: "input",
      name: "homepage_url.ja",
      when: answers => answers.ja,
      message: m("question.website.url.ja")
    },
    {
      type: "input",
      name: "homepage_url.zh",
      when: answers => answers.zh,
      message: m("question.website.url.zh")
    },
    {
      type: "confirm",
      name: "mobile",
      default: false,
      message: m("question.mobile.support")
    },
    {
      type: "confirm",
      name: "pluginUploader",
      default: true,
      message: m("question.enable.uploader")
    }
  ];
}
