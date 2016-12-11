<!DOCTYPE html>
<html>
  <head>
      <meta charset="utf-8" />
      <title>batch-file-reference</title>
      <style>.markdown-preview:not([data-use-github-style]) { padding: 2em; font-size: 1.2em; color: rgb(171, 178, 191); overflow: auto; background-color: rgb(40, 44, 52); }
.markdown-preview:not([data-use-github-style]) > :first-child { margin-top: 0px; }
.markdown-preview:not([data-use-github-style]) h1, .markdown-preview:not([data-use-github-style]) h2, .markdown-preview:not([data-use-github-style]) h3, .markdown-preview:not([data-use-github-style]) h4, .markdown-preview:not([data-use-github-style]) h5, .markdown-preview:not([data-use-github-style]) h6 { line-height: 1.2; margin-top: 1.5em; margin-bottom: 0.5em; color: rgb(255, 255, 255); }
.markdown-preview:not([data-use-github-style]) h1 { font-size: 2.4em; font-weight: 300; }
.markdown-preview:not([data-use-github-style]) h2 { font-size: 1.8em; font-weight: 400; }
.markdown-preview:not([data-use-github-style]) h3 { font-size: 1.5em; font-weight: 500; }
.markdown-preview:not([data-use-github-style]) h4 { font-size: 1.2em; font-weight: 600; }
.markdown-preview:not([data-use-github-style]) h5 { font-size: 1.1em; font-weight: 600; }
.markdown-preview:not([data-use-github-style]) h6 { font-size: 1em; font-weight: 600; }
.markdown-preview:not([data-use-github-style]) strong { color: rgb(255, 255, 255); }
.markdown-preview:not([data-use-github-style]) del { color: rgb(124, 135, 156); }
.markdown-preview:not([data-use-github-style]) a, .markdown-preview:not([data-use-github-style]) a code { color: rgb(82, 139, 255); }
.markdown-preview:not([data-use-github-style]) img { max-width: 100%; }
.markdown-preview:not([data-use-github-style]) > p { margin-top: 0px; margin-bottom: 1.5em; }
.markdown-preview:not([data-use-github-style]) > ul, .markdown-preview:not([data-use-github-style]) > ol { margin-bottom: 1.5em; }
.markdown-preview:not([data-use-github-style]) blockquote { margin: 1.5em 0px; font-size: inherit; color: rgb(124, 135, 156); border-color: rgb(75, 83, 98); border-width: 4px; }
.markdown-preview:not([data-use-github-style]) hr { margin: 3em 0px; border-top: 2px dashed rgb(75, 83, 98); background: none; }
.markdown-preview:not([data-use-github-style]) table { margin: 1.5em 0px; }
.markdown-preview:not([data-use-github-style]) th { color: rgb(255, 255, 255); }
.markdown-preview:not([data-use-github-style]) th, .markdown-preview:not([data-use-github-style]) td { padding: 0.66em 1em; border: 1px solid rgb(75, 83, 98); }
.markdown-preview:not([data-use-github-style]) code { color: rgb(255, 255, 255); background-color: rgb(58, 63, 75); }
.markdown-preview:not([data-use-github-style]) pre.editor-colors { margin: 1.5em 0px; padding: 1em; font-size: 0.92em; border-radius: 3px; background-color: rgb(49, 54, 63); }
.markdown-preview:not([data-use-github-style]) kbd { color: rgb(255, 255, 255); border-width: 1px 1px 2px; border-style: solid; border-color: rgb(75, 83, 98) rgb(75, 83, 98) rgb(62, 68, 81); background-color: rgb(58, 63, 75); }
.markdown-preview[data-use-github-style] { font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif; line-height: 1.6; word-wrap: break-word; padding: 30px; font-size: 16px; color: rgb(51, 51, 51); overflow: scroll; background-color: rgb(255, 255, 255); }
.markdown-preview[data-use-github-style] > :first-child { margin-top: 0px !important; }
.markdown-preview[data-use-github-style] > :last-child { margin-bottom: 0px !important; }
.markdown-preview[data-use-github-style] a:not([href]) { color: inherit; text-decoration: none; }
.markdown-preview[data-use-github-style] .absent { color: rgb(204, 0, 0); }
.markdown-preview[data-use-github-style] .anchor { position: absolute; top: 0px; left: 0px; display: block; padding-right: 6px; padding-left: 30px; margin-left: -30px; }
.markdown-preview[data-use-github-style] .anchor:focus { outline: none; }
.markdown-preview[data-use-github-style] h1, .markdown-preview[data-use-github-style] h2, .markdown-preview[data-use-github-style] h3, .markdown-preview[data-use-github-style] h4, .markdown-preview[data-use-github-style] h5, .markdown-preview[data-use-github-style] h6 { position: relative; margin-top: 1em; margin-bottom: 16px; font-weight: bold; line-height: 1.4; }
.markdown-preview[data-use-github-style] h1 .octicon-link, .markdown-preview[data-use-github-style] h2 .octicon-link, .markdown-preview[data-use-github-style] h3 .octicon-link, .markdown-preview[data-use-github-style] h4 .octicon-link, .markdown-preview[data-use-github-style] h5 .octicon-link, .markdown-preview[data-use-github-style] h6 .octicon-link { display: none; color: rgb(0, 0, 0); vertical-align: middle; }
.markdown-preview[data-use-github-style] h1:hover .anchor, .markdown-preview[data-use-github-style] h2:hover .anchor, .markdown-preview[data-use-github-style] h3:hover .anchor, .markdown-preview[data-use-github-style] h4:hover .anchor, .markdown-preview[data-use-github-style] h5:hover .anchor, .markdown-preview[data-use-github-style] h6:hover .anchor { padding-left: 8px; margin-left: -30px; text-decoration: none; }
.markdown-preview[data-use-github-style] h1:hover .anchor .octicon-link, .markdown-preview[data-use-github-style] h2:hover .anchor .octicon-link, .markdown-preview[data-use-github-style] h3:hover .anchor .octicon-link, .markdown-preview[data-use-github-style] h4:hover .anchor .octicon-link, .markdown-preview[data-use-github-style] h5:hover .anchor .octicon-link, .markdown-preview[data-use-github-style] h6:hover .anchor .octicon-link { display: inline-block; }
.markdown-preview[data-use-github-style] h1 tt, .markdown-preview[data-use-github-style] h2 tt, .markdown-preview[data-use-github-style] h3 tt, .markdown-preview[data-use-github-style] h4 tt, .markdown-preview[data-use-github-style] h5 tt, .markdown-preview[data-use-github-style] h6 tt, .markdown-preview[data-use-github-style] h1 code, .markdown-preview[data-use-github-style] h2 code, .markdown-preview[data-use-github-style] h3 code, .markdown-preview[data-use-github-style] h4 code, .markdown-preview[data-use-github-style] h5 code, .markdown-preview[data-use-github-style] h6 code { font-size: inherit; }
.markdown-preview[data-use-github-style] h1 { padding-bottom: 0.3em; font-size: 2.25em; line-height: 1.2; border-bottom: 1px solid rgb(238, 238, 238); }
.markdown-preview[data-use-github-style] h1 .anchor { line-height: 1; }
.markdown-preview[data-use-github-style] h2 { padding-bottom: 0.3em; font-size: 1.75em; line-height: 1.225; border-bottom: 1px solid rgb(238, 238, 238); }
.markdown-preview[data-use-github-style] h2 .anchor { line-height: 1; }
.markdown-preview[data-use-github-style] h3 { font-size: 1.5em; line-height: 1.43; }
.markdown-preview[data-use-github-style] h3 .anchor { line-height: 1.2; }
.markdown-preview[data-use-github-style] h4 { font-size: 1.25em; }
.markdown-preview[data-use-github-style] h4 .anchor { line-height: 1.2; }
.markdown-preview[data-use-github-style] h5 { font-size: 1em; }
.markdown-preview[data-use-github-style] h5 .anchor { line-height: 1.1; }
.markdown-preview[data-use-github-style] h6 { font-size: 1em; color: rgb(119, 119, 119); }
.markdown-preview[data-use-github-style] h6 .anchor { line-height: 1.1; }
.markdown-preview[data-use-github-style] p, .markdown-preview[data-use-github-style] blockquote, .markdown-preview[data-use-github-style] ul, .markdown-preview[data-use-github-style] ol, .markdown-preview[data-use-github-style] dl, .markdown-preview[data-use-github-style] table, .markdown-preview[data-use-github-style] pre { margin-top: 0px; margin-bottom: 16px; }
.markdown-preview[data-use-github-style] hr { height: 4px; padding: 0px; margin: 16px 0px; border: 0px none; background-color: rgb(231, 231, 231); }
.markdown-preview[data-use-github-style] ul, .markdown-preview[data-use-github-style] ol { padding-left: 2em; }
.markdown-preview[data-use-github-style] ul.no-list, .markdown-preview[data-use-github-style] ol.no-list { padding: 0px; list-style-type: none; }
.markdown-preview[data-use-github-style] ul ul, .markdown-preview[data-use-github-style] ul ol, .markdown-preview[data-use-github-style] ol ol, .markdown-preview[data-use-github-style] ol ul { margin-top: 0px; margin-bottom: 0px; }
.markdown-preview[data-use-github-style] li > p { margin-top: 16px; }
.markdown-preview[data-use-github-style] dl { padding: 0px; }
.markdown-preview[data-use-github-style] dl dt { padding: 0px; margin-top: 16px; font-size: 1em; font-style: italic; font-weight: bold; }
.markdown-preview[data-use-github-style] dl dd { padding: 0px 16px; margin-bottom: 16px; }
.markdown-preview[data-use-github-style] blockquote { padding: 0px 15px; color: rgb(119, 119, 119); border-left: 4px solid rgb(221, 221, 221); }
.markdown-preview[data-use-github-style] blockquote > :first-child { margin-top: 0px; }
.markdown-preview[data-use-github-style] blockquote > :last-child { margin-bottom: 0px; }
.markdown-preview[data-use-github-style] table { display: block; width: 100%; overflow: auto; word-break: keep-all; }
.markdown-preview[data-use-github-style] table th { font-weight: bold; }
.markdown-preview[data-use-github-style] table th, .markdown-preview[data-use-github-style] table td { padding: 6px 13px; border: 1px solid rgb(221, 221, 221); }
.markdown-preview[data-use-github-style] table tr { border-top: 1px solid rgb(204, 204, 204); background-color: rgb(255, 255, 255); }
.markdown-preview[data-use-github-style] table tr:nth-child(2n) { background-color: rgb(248, 248, 248); }
.markdown-preview[data-use-github-style] img { max-width: 100%; box-sizing: border-box; }
.markdown-preview[data-use-github-style] .emoji { max-width: none; }
.markdown-preview[data-use-github-style] span.frame { display: block; overflow: hidden; }
.markdown-preview[data-use-github-style] span.frame > span { display: block; float: left; width: auto; padding: 7px; margin: 13px 0px 0px; overflow: hidden; border: 1px solid rgb(221, 221, 221); }
.markdown-preview[data-use-github-style] span.frame span img { display: block; float: left; }
.markdown-preview[data-use-github-style] span.frame span span { display: block; padding: 5px 0px 0px; clear: both; color: rgb(51, 51, 51); }
.markdown-preview[data-use-github-style] span.align-center { display: block; overflow: hidden; clear: both; }
.markdown-preview[data-use-github-style] span.align-center > span { display: block; margin: 13px auto 0px; overflow: hidden; text-align: center; }
.markdown-preview[data-use-github-style] span.align-center span img { margin: 0px auto; text-align: center; }
.markdown-preview[data-use-github-style] span.align-right { display: block; overflow: hidden; clear: both; }
.markdown-preview[data-use-github-style] span.align-right > span { display: block; margin: 13px 0px 0px; overflow: hidden; text-align: right; }
.markdown-preview[data-use-github-style] span.align-right span img { margin: 0px; text-align: right; }
.markdown-preview[data-use-github-style] span.float-left { display: block; float: left; margin-right: 13px; overflow: hidden; }
.markdown-preview[data-use-github-style] span.float-left span { margin: 13px 0px 0px; }
.markdown-preview[data-use-github-style] span.float-right { display: block; float: right; margin-left: 13px; overflow: hidden; }
.markdown-preview[data-use-github-style] span.float-right > span { display: block; margin: 13px auto 0px; overflow: hidden; text-align: right; }
.markdown-preview[data-use-github-style] code, .markdown-preview[data-use-github-style] tt { padding: 0.2em 0px; margin: 0px; font-size: 85%; border-radius: 3px; background-color: rgba(0, 0, 0, 0.0392157); }
.markdown-preview[data-use-github-style] code::before, .markdown-preview[data-use-github-style] tt::before, .markdown-preview[data-use-github-style] code::after, .markdown-preview[data-use-github-style] tt::after { letter-spacing: -0.2em; content: " "; }
.markdown-preview[data-use-github-style] code br, .markdown-preview[data-use-github-style] tt br { display: none; }
.markdown-preview[data-use-github-style] del code { text-decoration: inherit; }
.markdown-preview[data-use-github-style] pre > code { padding: 0px; margin: 0px; font-size: 100%; word-break: normal; white-space: pre; border: 0px; background: transparent; }
.markdown-preview[data-use-github-style] .highlight { margin-bottom: 16px; }
.markdown-preview[data-use-github-style] .highlight pre, .markdown-preview[data-use-github-style] pre { padding: 16px; overflow: auto; font-size: 85%; line-height: 1.45; border-radius: 3px; background-color: rgb(247, 247, 247); }
.markdown-preview[data-use-github-style] .highlight pre { margin-bottom: 0px; word-break: normal; }
.markdown-preview[data-use-github-style] pre { word-wrap: normal; }
.markdown-preview[data-use-github-style] pre code, .markdown-preview[data-use-github-style] pre tt { display: inline; max-width: initial; padding: 0px; margin: 0px; overflow: initial; line-height: inherit; word-wrap: normal; border: 0px; background-color: transparent; }
.markdown-preview[data-use-github-style] pre code::before, .markdown-preview[data-use-github-style] pre tt::before, .markdown-preview[data-use-github-style] pre code::after, .markdown-preview[data-use-github-style] pre tt::after { content: normal; }
.markdown-preview[data-use-github-style] kbd { display: inline-block; padding: 3px 5px; font-size: 11px; line-height: 10px; color: rgb(85, 85, 85); vertical-align: middle; border-width: 1px; border-style: solid; border-color: rgb(204, 204, 204) rgb(204, 204, 204) rgb(187, 187, 187); border-radius: 3px; box-shadow: rgb(187, 187, 187) 0px -1px 0px inset; background-color: rgb(252, 252, 252); }
.markdown-preview[data-use-github-style] a { color: rgb(51, 122, 183); }
.markdown-preview[data-use-github-style] code { color: inherit; }
.markdown-preview[data-use-github-style] pre.editor-colors { padding: 0.8em 1em; margin-bottom: 1em; font-size: 0.85em; border-radius: 4px; overflow: auto; }
.scrollbars-visible-always .markdown-preview pre.editor-colors::shadow .vertical-scrollbar, .scrollbars-visible-always .markdown-preview pre.editor-colors::shadow .horizontal-scrollbar { visibility: hidden; }
.scrollbars-visible-always .markdown-preview pre.editor-colors:hover::shadow .vertical-scrollbar, .scrollbars-visible-always .markdown-preview pre.editor-colors:hover::shadow .horizontal-scrollbar { visibility: visible; }
.markdown-preview .task-list-item-checkbox { position: absolute; margin: 0.25em 0px 0px -1.4em; }
.bracket-matcher .region {
  border-bottom: 1px dotted lime;
  position: absolute;
}

.spell-check-misspelling .region {
  border-bottom: 2px dotted rgba(255, 51, 51, 0.75);
}
.spell-check-corrections {
  width: 25em !important;
}

pre.editor-colors,
.host {
  background-color: #282c34;
  color: #abb2bf;
}
pre.editor-colors .line.cursor-line,
.host .line.cursor-line {
  background-color: rgba(153, 187, 255, 0.04);
}
pre.editor-colors .invisible,
.host .invisible {
  color: #abb2bf;
}
pre.editor-colors .cursor,
.host .cursor {
  border-left: 2px solid #528bff;
}
pre.editor-colors .selection .region,
.host .selection .region {
  background-color: #3e4451;
}
pre.editor-colors .bracket-matcher .region,
.host .bracket-matcher .region {
  border-bottom: 1px solid #528bff;
  box-sizing: border-box;
}
pre.editor-colors .invisible-character,
.host .invisible-character {
  color: rgba(171, 178, 191, 0.15);
}
pre.editor-colors .indent-guide,
.host .indent-guide {
  color: rgba(171, 178, 191, 0.15);
}
pre.editor-colors .wrap-guide,
.host .wrap-guide {
  background-color: rgba(171, 178, 191, 0.15);
}
pre.editor-colors .find-result .region.region.region,
.host .find-result .region.region.region,
pre.editor-colors .current-result .region.region.region,
.host .current-result .region.region.region {
  border-radius: 2px;
  background-color: rgba(82, 139, 255, 0.24);
  transition: border-color 0.4s;
}
pre.editor-colors .find-result .region.region.region,
.host .find-result .region.region.region {
  border: 2px solid transparent;
}
pre.editor-colors .current-result .region.region.region,
.host .current-result .region.region.region {
  border: 2px solid #528bff;
  transition-duration: .1s;
}
pre.editor-colors .gutter .line-number,
.host .gutter .line-number {
  color: #636d83;
  -webkit-font-smoothing: antialiased;
}
pre.editor-colors .gutter .line-number.cursor-line,
.host .gutter .line-number.cursor-line {
  color: #abb2bf;
  background-color: #2c313a;
}
pre.editor-colors .gutter .line-number.cursor-line-no-selection,
.host .gutter .line-number.cursor-line-no-selection {
  background-color: transparent;
}
pre.editor-colors .gutter .line-number .icon-right,
.host .gutter .line-number .icon-right {
  color: #abb2bf;
}
pre.editor-colors .gutter:not(.git-diff-icon) .line-number.git-line-removed.git-line-removed::before,
.host .gutter:not(.git-diff-icon) .line-number.git-line-removed.git-line-removed::before {
  bottom: -3px;
}
pre.editor-colors .gutter:not(.git-diff-icon) .line-number.git-line-removed::after,
.host .gutter:not(.git-diff-icon) .line-number.git-line-removed::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 25px;
  border-bottom: 1px dotted rgba(224, 82, 82, 0.5);
  pointer-events: none;
}
pre.editor-colors .gutter .line-number.folded,
.host .gutter .line-number.folded,
pre.editor-colors .gutter .line-number:after,
.host .gutter .line-number:after,
pre.editor-colors .fold-marker:after,
.host .fold-marker:after {
  color: #abb2bf;
}
.comment {
  color: #5c6370;
  font-style: italic;
}
.comment .markup.link {
  color: #5c6370;
}
.entity.name.type {
  color: #e5c07b;
}
.entity.other.inherited-class {
  color: #98c379;
}
.keyword {
  color: #c678dd;
}
.keyword.control {
  color: #c678dd;
}
.keyword.operator {
  color: #abb2bf;
}
.keyword.other.special-method {
  color: #61afef;
}
.keyword.other.unit {
  color: #d19a66;
}
.storage {
  color: #c678dd;
}
.storage.type.annotation,
.storage.type.primitive {
  color: #c678dd;
}
.storage.modifier.package,
.storage.modifier.import {
  color: #abb2bf;
}
.constant {
  color: #d19a66;
}
.constant.variable {
  color: #d19a66;
}
.constant.character.escape {
  color: #56b6c2;
}
.constant.numeric {
  color: #d19a66;
}
.constant.other.color {
  color: #56b6c2;
}
.constant.other.symbol {
  color: #56b6c2;
}
.variable {
  color: #e06c75;
}
.variable.interpolation {
  color: #be5046;
}
.variable.parameter {
  color: #abb2bf;
}
.string {
  color: #98c379;
}
.string.regexp {
  color: #56b6c2;
}
.string.regexp .source.ruby.embedded {
  color: #e5c07b;
}
.string.other.link {
  color: #e06c75;
}
.punctuation.definition.comment {
  color: #5c6370;
}
.punctuation.definition.method-parameters,
.punctuation.definition.function-parameters,
.punctuation.definition.parameters,
.punctuation.definition.separator,
.punctuation.definition.seperator,
.punctuation.definition.array {
  color: #abb2bf;
}
.punctuation.definition.heading,
.punctuation.definition.identity {
  color: #61afef;
}
.punctuation.definition.bold {
  color: #e5c07b;
  font-weight: bold;
}
.punctuation.definition.italic {
  color: #c678dd;
  font-style: italic;
}
.punctuation.section.embedded {
  color: #be5046;
}
.punctuation.section.method,
.punctuation.section.class,
.punctuation.section.inner-class {
  color: #abb2bf;
}
.support.class {
  color: #e5c07b;
}
.support.type {
  color: #56b6c2;
}
.support.function {
  color: #56b6c2;
}
.support.function.any-method {
  color: #61afef;
}
.entity.name.function {
  color: #61afef;
}
.entity.name.class,
.entity.name.type.class {
  color: #e5c07b;
}
.entity.name.section {
  color: #61afef;
}
.entity.name.tag {
  color: #e06c75;
}
.entity.other.attribute-name {
  color: #d19a66;
}
.entity.other.attribute-name.id {
  color: #61afef;
}
.meta.class {
  color: #e5c07b;
}
.meta.class.body {
  color: #abb2bf;
}
.meta.method-call,
.meta.method {
  color: #abb2bf;
}
.meta.definition.variable {
  color: #e06c75;
}
.meta.link {
  color: #d19a66;
}
.meta.require {
  color: #61afef;
}
.meta.selector {
  color: #c678dd;
}
.meta.separator {
  background-color: #373b41;
  color: #abb2bf;
}
.meta.tag {
  color: #abb2bf;
}
.underline {
  text-decoration: underline;
}
.none {
  color: #abb2bf;
}
.invalid.deprecated {
  color: #523d14 !important;
  background-color: #e0c285 !important;
}
.invalid.illegal {
  color: #ffffff !important;
  background-color: #e05252 !important;
}
.markup.bold {
  color: #d19a66;
  font-weight: bold;
}
.markup.changed {
  color: #c678dd;
}
.markup.deleted {
  color: #e06c75;
}
.markup.italic {
  color: #c678dd;
  font-style: italic;
}
.markup.heading {
  color: #e06c75;
}
.markup.heading .punctuation.definition.heading {
  color: #61afef;
}
.markup.link {
  color: #c678dd;
}
.markup.inserted {
  color: #98c379;
}
.markup.quote {
  color: #d19a66;
}
.markup.raw {
  color: #98c379;
}
.source.c .keyword.operator {
  color: #c678dd;
}
.source.cpp .keyword.operator {
  color: #c678dd;
}
.source.cs .keyword.operator {
  color: #c678dd;
}
.source.css .property-name,
.source.css .property-value {
  color: #828997;
}
.source.css .property-name.support,
.source.css .property-value.support {
  color: #abb2bf;
}
.source.gfm .markup {
  -webkit-font-smoothing: auto;
}
.source.gfm .link .entity {
  color: #61afef;
}
.source.go .storage.type.string {
  color: #c678dd;
}
.source.ini .keyword.other.definition.ini {
  color: #e06c75;
}
.source.java .storage.modifier.import {
  color: #e5c07b;
}
.source.java .storage.type {
  color: #e5c07b;
}
.source.java .keyword.operator.instanceof {
  color: #c678dd;
}
.source.java-properties .meta.key-pair {
  color: #e06c75;
}
.source.java-properties .meta.key-pair > .punctuation {
  color: #abb2bf;
}
.source.js .keyword.operator {
  color: #56b6c2;
}
.source.js .keyword.operator.delete,
.source.js .keyword.operator.in,
.source.js .keyword.operator.of,
.source.js .keyword.operator.instanceof,
.source.js .keyword.operator.new,
.source.js .keyword.operator.typeof,
.source.js .keyword.operator.void {
  color: #c678dd;
}
.source.json .meta.structure.dictionary.json > .string.quoted.json {
  color: #e06c75;
}
.source.json .meta.structure.dictionary.json > .string.quoted.json > .punctuation.string {
  color: #e06c75;
}
.source.json .meta.structure.dictionary.json > .value.json > .string.quoted.json,
.source.json .meta.structure.array.json > .value.json > .string.quoted.json,
.source.json .meta.structure.dictionary.json > .value.json > .string.quoted.json > .punctuation,
.source.json .meta.structure.array.json > .value.json > .string.quoted.json > .punctuation {
  color: #98c379;
}
.source.json .meta.structure.dictionary.json > .constant.language.json,
.source.json .meta.structure.array.json > .constant.language.json {
  color: #56b6c2;
}
.source.ruby .constant.other.symbol > .punctuation {
  color: inherit;
}
.source.python .keyword.operator.logical.python {
  color: #c678dd;
}
.source.python .variable.parameter {
  color: #d19a66;
}
</style>
  </head>
  <body class='markdown-preview' data-use-github-style><table data-table-type="yaml-metadata">
  <thead>
  <tr>
  <th>layout</th>

  <th>title</th>

  <th>product</th>

  <th>doctype</th>

  <th>nav</th>

  <th>community</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td><div>page</div></td>

  <td><div>Batch File Reference</div></td>

  <td><div>avaTax</div></td>

  <td><div>use_cases</div></td>

  <td><div>apis</div></td>

  <td><div>apis</div></td>
  </tr>
  </tbody>
</table>

<h2>Batch File Reference</h2>

<p>To learn how to use batch files, visit this page: <a href="http://developer.avalara.com/blog/2016/10/24/batch-transaction-upload-in-rest-v2/">Batch Transaction Upload in REST v2</a></p>
<h3>Batch File Limitations</h3>

<ul class="normal">
    <li>A batch file may have up to 100,000 lines.  Any batch file with more than 100,000 lines may be rejected.</li>
    <li>Batch files must be in XLS, XLSX, or CSV formats.</li>
    <li>When using Excel, please be careful about scientific-notation conversion.  Excel may choose to convert some large numbers to scientific notation; this is especially problematic for UPC codes which often look like large numbers.  Please be careful when using Excel and ensure that the final file does not have conversion problems.</li>
    <li>Batch files are processed by AvaTax in the order they were received.</li>
</ul>


<h3>Batch File Types</h3>
<i> Batch Template Download Links (Most may also be found in the Admin Console):</i>
<ul class"="normal&quot;">
    <li> <a href="Link Template for Download">ItemReport</a>
      - Needs brief explanation
    </li><li> <a href="Link Template for Download">ExemptCertImport</a> - Needs brief explanation
    </li><li> <a href="Link Template for Download">CompanyLocationImport</a> - Needs brief explanation
    </li><li> <a href="Link Template for Download">TaxRuleImport</a>
    </li><li> <a href="Link Template for Download">TransactionImport</a>- Needs brief explanation
    </li><li> <a href="&quot;Link Template for Download&quot;">SstpTestDeckImport</a> (SST Enabled Accounts Only)- Needs brief explanation
    </li><li> <a href="&quot;Link Template for Download&quot;">UPCBulkImport</a>- Needs brief explanation
    </li><li> <a href="&quot;Link Template for Download&quot;">UPCValidationImport</a>- Needs brief explanation
</li></ul>

<h3>Sample File</h3>

<took out="" some="" of="" what="" ted="" had="" in="" there="" because="" this="" design="" template="" would="" be="" linked="" here="">

<h3>List of Required Fields</h3>
In the following example the <a href="Link Template">transaction import template</a><br>The following fields correspond to the same fields in the CreateTransactionModel and are supported in batch files.  You must fill in, at a minimum, these fields:

<h3>These are the REST v2 supported Batch File Types</h3>
<i> Download CSV Batch Templates Here (Many of these are also available in the Admin Console):</i>
<ul class="normal">
    <li><a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/_batchtemplates/ImportItemsTemplate.csv" download="">ItemImport</a> - refers to a batch type used for uploading multiple items and their respective tax codes at once.</li>
    <li><a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/_batchtemplates/ImportCompanyLocationsTemplate.csv" download="">CompanyLocationImport</a> - refers to a batch type used to upload multiple company locations at once.</li>
    <li><a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/_batchtemplates/ImportExemptionCertificatesTemplate.csv" download="">ExemptCertImport</a> - refers to a batch type used to upload all relevant data for multiple exemption certificates at once.</li>
    <li><a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/_batchtemplates/ImportTaxRulesTemplate.csv" download="">TaxRuleImport</a> - refers to a batch type used to upload all relevant information for multiple tax rules at once.</li>
    <li><a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/_batchtemplates/ImportTransactionsTemplate.csv" download="">TransactionImport</a> - refers to a batch type used for uploading multiple transaction lines at once.</li>
    <li><a href="https://raw.githubusercontent.com/Avalara/developer-dot/master/_batchtemplates/ImportBulkUPCTemplate.csv" download="">UPCBulkImport</a> - refers to a batch type used for uploading multiple UPC codes and their respective tax codes at once.</li>
</ul>

<h3>Sample File</h3>
As an example let&#39;s upload some transaction lines, to get satarted quickly download the TransactionImport template and enter in the following data.<br><h3>List of Required Fields</h3>

<p>The following column fields correspond to the same fields in the CreateTransactionModel and are supported in batch files.  You must fill in, at a minimum, data for these columns in the batch file:</p>
<p><table class="styled-table">
    <tr>
        <th>Field</th>
        <th>Data Type</th>
        <th>Definition</th>
        <th>Sample Values</th>
    </tr>
    <tr>
        <td>ProcessCode</td>
        <td>Whole number, 1 digit</td>
        <td>This field determines how Avalara AvaTax processes the document. Here are the process codes that you can use and what they mean:
        0: Void transaction
        1: Tax override--a new transaction without tax calculation
        2: Tax override--adjusted transaction without tax calculation
        3: New transaction
        4: Adjust current transaction
        5: Accrued tax override--new transaction without tax calculation that provides an accrued tax amount, typically used for customer use tax
        6: Accrued tax override--adjusted transaction without tax calculation that provides an accrued tax amount, typically used for customer use tax
        Note:
        -ProcessCode 0 requires the DocCode, DocType, and CompanyCode of the current document to be voided. No other column values are required for a voided transaction.
        -For ProcessCodes 1 or 2 that override tax, enter the tax amount desired in the TotalTax column (column AP).
        -For ProcessCodes 5 and 6 that override tax, enter the accrued tax amount desired in the TotalTax column (column AP) and enter 0 in the Amount column (column N).</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>DocCode</td>
        <td>Alphanumeric string, up to 50 places</td>
        <td>The invoice, credit memo, or return number. It must be unique at the company level</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>DocType</td>
        <td>Whole number, 1 digit</td>
        <td>The type of document:
        1=Sales invoice
        3=Purchase invoice
        5=Return invoice
        7=Inventory Transfer invoice</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>DocDate</td>
        <td>Date, up to 10 digits</td>
        <td>The invoice, credit memo, or return date in yyyy-mm-dd or mm/dd/yyyy format. Use the format that most closely matches the one in your accounting, ERP, e-commerce, or point-of-sale software, but dates must be in mm/dd/yyyy or yyyy-mm-dd format:
             12/30/2012 = mm/dd/yyyy
             2012-12-30 = yyyy-mm-dd</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>CustomerCode</td>
        <td>You must put something in this column, and it must be in this format:
        Alphanumeric, up to 50 characters</td>
        <td>This is the code that your accounting, ERP, e-commerce, m-commerce, or point-of-sale application uses to identify a customer; for example, the customer ID or customer number</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>LineNo</td>
        <td>Text, up to 10 characters</td>
        <td>The line number of the transaction. LineNo for a transaction must uniquely identify each line on the document. We recommend sequential numbering: 1, 2, 3, 4, etc.</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>Amount</td>
        <td>Number with up to 2 decimal places</td>
        <td>The total sale amount (extended amount) for the document line item (Quantity * Unit Price).
        Note:
        For return invoices (DocType 5, column C), enter the amount as a negative value.</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>DestRegion</td>
        <td>Text, 2 characters</td>
        <td>The two-character abbreviation for the destination or ship-to state or province. If you enter something in LocationCode (column AD), leave DestRegion blank. </td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>DestPostalCode</td>
        <td>Alphanumeric text, up to 10 characters</td>
        <td>The destination or ship-to postal code in one of these formats:
             12345  (United States ZIP Code)
             12345-6789  (United States ZIP+4 Code)
             A1B 2C3  (Canadian postal code)
        If you enter something in LocationCode (column AD), leave DestPostalCode blank. </td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>OrigRegion</td>
        <td>Text, 2 characters</td>
        <td>The two-character abbreviation for the origin or ship-from state or province. If you enter something in LocationCode (column AD), leave OrigRegion blank.</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>OrigPostalCode</td>
        <td>Alphanumeric text, up to 10 characters</td>
        <td>The origin or ship-from postal code in the following format:
           12345 (United States ZIP Code)
           12345-6789 (United States ZIP+4 Code)
           A1B 2C3 (Canadian postal code)
        If you enter something in LocationCode (column AD), leave OrigPostalCode blank. </td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>IsSellerImporterOfRecord</td>
        <td>Boolean</td>
        <td>Transaction for physical good are taxed differently when seller is importer or record or not.</td>
        <td></td>
    </tr>
    <tr>
        <td>Header_Description</td>
        <td>Text</td>
        <td>This is the sale description that will be displayed in the Service Invoice. (Discriminação do Serviço)</td>
        <td></td>
    </tr></table></p>
<table>

<h3>List of Optional Fields</h3>

<p>The following fields correspond to the same fields in the CreateTransactionModel and are supported in batch files:</p>
<p><table class="styled-table">
    <tr>
        <th>Field</th>
        <th>Data Type</th>
        <th>Definition</th>
        <th>Sample Values</th>
    </tr>
    <tr>
        <td>CompanyCode</td>
        <td>Text, up to 25 characters</td>
        <td>The code used by Avalara AvaTax. To find out more, visit:
        <a href="https://help.avalara.com/004_AvaTax_Integrations/002_All_About_Company_Codes">https://help.avalara.com/004_AvaTax_Integrations/002_All_About_Company_Codes</a>
        If you leave this company code blank, the transaction will be added to your default company.</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>EntityUseCode</td>
        <td>Text, up to 25 characters</td>
        <td>An entity use code triggers customer-level tax rules. Entity use codes for the United States and Canada are different. Avalara AvaTax supports custom codes and the following standard codes:
        A=Federal government (United States)
        B=State government (United States)
        C=Tribe/Status Indian/Indian Band (both)
        D=Foreign diplomat (both)
        E=Charitable or benevolent organization (both)
        F=Religious or educational organization (both)
        G=Resale (both)
        H=Commercial agricultural production (both)
        I=Industrial production or manufacturer (both)
        J=Direct pay permit (United States)
        K=Direct mail (United States)
        L=Other
        N=Local government (United States)
        P=Commercial aquaculture (Canada)
        Q=Commercial fishery (Canada)
        R=Non-resident (Canada)
        MED1=US MDET with exempt sales tax
        MED2=US MDET with taxable sales tax</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>TaxCode</td>
        <td>Text, up to 25 characters</td>
        <td>The AvaTax tax code or custom tax code associated with the item or SKU used on the document line. TaxCode is not needed if ItemCode (column K) is mapped to a tax code in the AvaTax Admin Console for your company.</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>TaxDate</td>
        <td>Date, 10 digits</td>
        <td>This optional parameter overrides the date used for sales tax calculation. Avalara AvaTax normally uses the DocDate (column D) for sales tax calculations. TaxDate is usually used on return invoice (credit memo) transactions that need a tax-calculation date that reflects the original invoice date and a transaction date that reflects the current reporting period. Use the date format that most closely resembles the date format used in your accounting, ERP, e-commerce, m-commerce, or point-of-sale application, but dates must be in mm/dd/yyyy or yyyy-mm-dd format:
             12/30/2012 = mm/dd/yyyy
             2012-12-30 = yyyy-mm-dd</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>ItemCode</td>
        <td>Text, up to 50 characters</td>
        <td>The item code or SKU that identifies the product, service, or charge.
        If ItemCode is mapped to an AvaTax System tax code or custom tax code in the AvaTax Admin Console (Organization tab, Items sub-menu), importing a transaction that uses this field triggers system or custom tax rules. ItemCode is required only if the company (CompanyCode, column E) is in the Streamlined Sales Tax Project (SSTP) and the state of origin (OrigRegion, column AA) or destination (DestRegion, column V) is also in the SSTP.</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Alphanumeric text, up to 255 characters</td>
        <td>A description of the document line item. Required when TaxCode (column I) is specified, if the company (CompanyCode, column E) is in the Streamlined Sales Tax Project (SSTP) and the destination (DestRegion, column V) is in an SSTP state.</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>Qty</td>
        <td>Number with up to 4 decimal places</td>
        <td>The number of items on the document line, up to 4 decimal places (example: 1.3429. The default is 1.
        Note:
        Qty does not multiply the amount field. AvaTax uses Qty to calculate the per-item sales amount (unit price) for sales tax caps and thresholds.</td>
        <td><pre class="editor-colors lang-text"></pre></td>
    </tr>
    <tr>
        <td>Discount</td>
        <td>Number, up to ?? digits</td>
        <td>The trade discount allocated to the document line that decreases the taxable or non-taxable amount. AvaTax handles discounts at the document header level. But when it imports transactions, it places discounts at the line level, and it treats discounts in this way:</td></tr></table></p>
<pre class="editor-colors lang-text"><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>1.&nbsp;Discounts&nbsp;applied&nbsp;at&nbsp;the&nbsp;line&nbsp;level&nbsp;in&nbsp;imported&nbsp;transactions&nbsp;are&nbsp;accumulated&nbsp;for&nbsp;the&nbsp;total&nbsp;document.</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;AvaTax&nbsp;redistributes&nbsp;the&nbsp;total&nbsp;discount&nbsp;by&nbsp;prorating&nbsp;the&nbsp;document&nbsp;discount&nbsp;amount&nbsp;across&nbsp;all&nbsp;the&nbsp;lines&nbsp;that&nbsp;had&nbsp;a&nbsp;discount&nbsp;amount&nbsp;assigned&nbsp;to&nbsp;them.&nbsp;Tax&nbsp;is&nbsp;calculated&nbsp;based&nbsp;upon&nbsp;the&nbsp;“new”&nbsp;prorated&nbsp;discount&nbsp;amount&nbsp;now&nbsp;found&nbsp;at&nbsp;the&nbsp;line&nbsp;level.&nbsp;Any&nbsp;lines&nbsp;on&nbsp;the&nbsp;document&nbsp;that&nbsp;did&nbsp;not&nbsp;have&nbsp;a&nbsp;discount&nbsp;remain&nbsp;at&nbsp;a&nbsp;$0&nbsp;discount.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;pre&gt;15.00&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;Ref1&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Alphanumeric&nbsp;text,&nbsp;up&nbsp;to&nbsp;50&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;A&nbsp;user-defined&nbsp;field.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;Ref2&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Alphanumeric&nbsp;text,&nbsp;up&nbsp;to&nbsp;50&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;A&nbsp;user-defined&nbsp;field.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;ExemptionNo&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Text,&nbsp;up&nbsp;to&nbsp;25&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;exemption&nbsp;certificate&nbsp;number,&nbsp;if&nbsp;there&nbsp;is&nbsp;one.&nbsp;Putting&nbsp;a&nbsp;value&nbsp;in&nbsp;ExemptionNo&nbsp;generates&nbsp;a&nbsp;sales-tax&nbsp;exemption&nbsp;for&nbsp;the&nbsp;document&nbsp;line&nbsp;item&nbsp;to&nbsp;which&nbsp;the&nbsp;exemption&nbsp;certificate&nbsp;is&nbsp;applied.</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;ExemptionNo&nbsp;is&nbsp;required&nbsp;if:</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;-Exemption&nbsp;certificate&nbsp;options&nbsp;for&nbsp;the&nbsp;account&nbsp;are&nbsp;set&nbsp;to&nbsp;required.</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;-You&#39;re&nbsp;a&nbsp;seller&nbsp;in&nbsp;a&nbsp;Simplified&nbsp;Sales&nbsp;Tax&nbsp;Program&nbsp;(SSTP)&nbsp;state&nbsp;and&nbsp;thus&nbsp;are&nbsp;required&nbsp;to&nbsp;use&nbsp;an&nbsp;exemption&nbsp;certificate&nbsp;management&nbsp;system&nbsp;to&nbsp;generate&nbsp;exemption&nbsp;certificates&nbsp;in&nbsp;SSTP&nbsp;states.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;pre&gt;12-345-6789&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;RevAcct&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Text,&nbsp;up&nbsp;to&nbsp;25&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;revenue&nbsp;account&nbsp;for&nbsp;this&nbsp;transaction.&nbsp;This&nbsp;field&nbsp;is&nbsp;user-defined&nbsp;to&nbsp;identify&nbsp;a&nbsp;general-ledger&nbsp;account.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;DestAddress&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Alphanumeric&nbsp;text,&nbsp;up&nbsp;to&nbsp;50&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;destination&nbsp;or&nbsp;ship-to&nbsp;location&#39;s&nbsp;street&nbsp;address.&nbsp;If&nbsp;you&nbsp;enter&nbsp;something&nbsp;in&nbsp;LocationCode&nbsp;(column&nbsp;AD),&nbsp;leave&nbsp;DestAddress&nbsp;blank.&nbsp;If&nbsp;you&nbsp;don&#39;t&nbsp;enter&nbsp;something&nbsp;in&nbsp;LocationCode,&nbsp;fill&nbsp;in&nbsp;this&nbsp;field&nbsp;to&nbsp;ensure&nbsp;the&nbsp;most&nbsp;accurrate&nbsp;tax&nbsp;calculations.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;pre&gt;123&nbsp;Main&nbsp;Street&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;DestCity&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Text,&nbsp;up&nbsp;to&nbsp;50&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;destination&nbsp;or&nbsp;ship-to&nbsp;city.&nbsp;If&nbsp;you&nbsp;enter&nbsp;something&nbsp;in&nbsp;LocationCode&nbsp;(column&nbsp;AD),&nbsp;leave&nbsp;DestCity&nbsp;blank.&nbsp;If&nbsp;you&nbsp;don&#39;t&nbsp;enter&nbsp;something&nbsp;in&nbsp;LocationCode,&nbsp;fill&nbsp;in&nbsp;this&nbsp;field&nbsp;to&nbsp;ensure&nbsp;the&nbsp;most&nbsp;accurrate&nbsp;tax&nbsp;calculations.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;pre&gt;Irvine&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;DestCountry&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Text,&nbsp;2&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;destination&nbsp;or&nbsp;ship-to&nbsp;country.&nbsp;If&nbsp;you&nbsp;enter&nbsp;something&nbsp;in&nbsp;LocationCode&nbsp;(column&nbsp;AD),&nbsp;leave&nbsp;DestCountry&nbsp;blank.&nbsp;If&nbsp;you&nbsp;don&#39;t&nbsp;enter&nbsp;something&nbsp;in&nbsp;LocationCode,&nbsp;fill&nbsp;in&nbsp;this&nbsp;field&nbsp;to&nbsp;ensure&nbsp;the&nbsp;most&nbsp;accurrate&nbsp;tax&nbsp;calculations.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;pre&gt;US&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;OrigAddress&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Alphanumeric&nbsp;text,&nbsp;up&nbsp;to&nbsp;50&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;origin&nbsp;or&nbsp;ship-from&nbsp;street&nbsp;address.&nbsp;If&nbsp;you&nbsp;enter&nbsp;something&nbsp;in&nbsp;LocationCode&nbsp;(column&nbsp;AD),&nbsp;leave&nbsp;OrigAddress&nbsp;blank.&nbsp;If&nbsp;you&nbsp;don&#39;t&nbsp;enter&nbsp;something&nbsp;in&nbsp;LocationCode,&nbsp;fill&nbsp;in&nbsp;this&nbsp;field&nbsp;to&nbsp;ensure&nbsp;the&nbsp;most&nbsp;accurrate&nbsp;tax&nbsp;calculations.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;pre&gt;100&nbsp;Ravine&nbsp;Lane&nbsp;NE&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;OrigCity&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Text,&nbsp;up&nbsp;to&nbsp;50&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;origin&nbsp;or&nbsp;ship-from&nbsp;city.&nbsp;If&nbsp;you&nbsp;enter&nbsp;something&nbsp;in&nbsp;LocationCode&nbsp;(column&nbsp;AD),&nbsp;leave&nbsp;OrigCity&nbsp;blank.&nbsp;If&nbsp;you&nbsp;don&#39;t&nbsp;enter&nbsp;something&nbsp;in&nbsp;LocationCode,&nbsp;fill&nbsp;in&nbsp;this&nbsp;field&nbsp;to&nbsp;ensure&nbsp;the&nbsp;most&nbsp;accurrate&nbsp;tax&nbsp;calculations.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;pre&gt;Bainbridge&nbsp;Island&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;OrigCountry&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Text,&nbsp;2&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;origin&nbsp;or&nbsp;ship-from&nbsp;country&nbsp;in&nbsp;two-character&nbsp;format.&nbsp;If&nbsp;you&nbsp;enter&nbsp;something&nbsp;in&nbsp;LocationCode&nbsp;(column&nbsp;AD),&nbsp;leave&nbsp;OrigCountry&nbsp;blank.&nbsp;If&nbsp;you&nbsp;don&#39;t&nbsp;enter&nbsp;something&nbsp;in&nbsp;LocationCode,&nbsp;fill&nbsp;in&nbsp;this&nbsp;field&nbsp;to&nbsp;ensure&nbsp;the&nbsp;most&nbsp;accurrate&nbsp;tax&nbsp;calculations.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;pre&gt;US&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;LocationCode&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Alphanumeric&nbsp;text,&nbsp;up&nbsp;to&nbsp;50&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;LocationCode&nbsp;identifies&nbsp;the&nbsp;sales&nbsp;location&nbsp;(outlet)&nbsp;for&nbsp;the&nbsp;document&nbsp;line.&nbsp;Use&nbsp;this&nbsp;field&nbsp;if&nbsp;you&nbsp;have&nbsp;set&nbsp;up&nbsp;that&nbsp;sales&nbsp;location&#39;s&nbsp;address&nbsp;in&nbsp;the&nbsp;AvaTax&nbsp;Admin&nbsp;Console.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;pre&gt;DEF001&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;SalesPersonCode&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Alphanumeric&nbsp;text,&nbsp;up&nbsp;to&nbsp;25&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;salesperson&nbsp;for&nbsp;the&nbsp;document&nbsp;line.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;pre&gt;BOBEXAMPLE&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;PurchaseOrderNo&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Alphanumeric&nbsp;text,&nbsp;up&nbsp;to&nbsp;50&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;purchase&nbsp;order&nbsp;for&nbsp;the&nbsp;document&nbsp;line.&nbsp;Use&nbsp;this&nbsp;to&nbsp;match&nbsp;single-use&nbsp;exemption&nbsp;certificate&nbsp;entries&nbsp;created&nbsp;in&nbsp;the&nbsp;Exemption&nbsp;Certificate&nbsp;Management&nbsp;System&nbsp;(ECMS).&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;pre&gt;PO20161024-001&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;CurrencyCode&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Text,&nbsp;3&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;ISO&nbsp;currency&nbsp;code;&nbsp;defaults&nbsp;to&nbsp;USD.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;pre&gt;USD&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;ExchangeRate&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Number,&nbsp;two&nbsp;digits&nbsp;seperated&nbsp;by&nbsp;decimal&nbsp;point&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;conversion&nbsp;rate&nbsp;from&nbsp;CurrencyCode&nbsp;to&nbsp;the&nbsp;company&nbsp;base&nbsp;currency--for&nbsp;reference&nbsp;only.&nbsp;The&nbsp;default&nbsp;is&nbsp;1.0.&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;ExchangeRateEffDate&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Date,&nbsp;up&nbsp;to&nbsp;10&nbsp;digits&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;effective&nbsp;date&nbsp;of&nbsp;the&nbsp;exchange&nbsp;rate&nbsp;The&nbsp;default&nbsp;for&nbsp;ExchangeRateEffDate&nbsp;is&nbsp;the&nbsp;DocDate&nbsp;(column&nbsp;D).&nbsp;Use&nbsp;the&nbsp;format&nbsp;that&nbsp;most&nbsp;closely&nbsp;matches&nbsp;the&nbsp;one&nbsp;in&nbsp;your&nbsp;accounting,&nbsp;ERP,&nbsp;e-commerce,&nbsp;or&nbsp;point-of-sale&nbsp;software,&nbsp;but&nbsp;dates&nbsp;must&nbsp;be&nbsp;in&nbsp;mm/dd/yyyy&nbsp;or&nbsp;yyyy-mm-dd&nbsp;format:</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>12/30/2012&nbsp;=&nbsp;mm/dd/yyyy</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2012-12-30&nbsp;=&nbsp;yyyy-mm-dd&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;TaxIncluded&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Whole&nbsp;number,&nbsp;1&nbsp;digit&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Indicates&nbsp;that&nbsp;tax&nbsp;is&nbsp;included&nbsp;in&nbsp;Amount&nbsp;(column&nbsp;N).&nbsp;AvaTax&nbsp;calculates&nbsp;the&nbsp;taxable&nbsp;(column&nbsp;AN)&nbsp;and&nbsp;TotalTax&nbsp;(column&nbsp;AP)&nbsp;amounts&nbsp;from&nbsp;this&nbsp;value.&nbsp;Use&nbsp;one&nbsp;of&nbsp;these:</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>1:&nbsp;Tax&nbsp;included&nbsp;in&nbsp;Amount&nbsp;(column&nbsp;N)</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;or&nbsp;blank:&nbsp;Tax&nbsp;not&nbsp;included&nbsp;in&nbsp;Amount&nbsp;(column&nbsp;N)&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;&lt;pre&gt;0&lt;/pre&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;ReferenceCode&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Text,&nbsp;up&nbsp;to&nbsp;50&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;User-defined&nbsp;or&nbsp;for&nbsp;tracking&nbsp;merchant&nbsp;code&nbsp;for&nbsp;mobility&nbsp;reporting&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;BuyersVATNo&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Text,&nbsp;up&nbsp;to&nbsp;25&nbsp;characters&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;The&nbsp;buyer&#39;s&nbsp;VAT&nbsp;registration&nbsp;number&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;tr&gt;</span></span></span></div><div class="line"><span class="text plain"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="meta paragraph text"><span>&lt;td&gt;Email&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Text&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;Inform&nbsp;an&nbsp;email&nbsp;address&nbsp;for&nbsp;the&nbsp;buyer.&nbsp;The&nbsp;city&nbsp;tax&nbsp;authority&nbsp;may&nbsp;use&nbsp;this&nbsp;email&nbsp;to&nbsp;send&nbsp;the&nbsp;invoice&nbsp;confirmation&nbsp;directly&nbsp;to&nbsp;the&nbsp;buyer</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&lt;/td&gt;</span></span></span></div><div class="line"><span class="text plain"><span class="meta paragraph text"><span>&lt;/tr&gt;</span></span></span></div></pre><table>
</table></table></took></body>
</html>
