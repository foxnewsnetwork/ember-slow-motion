"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,o,r){var a=void 0;n.default.MODEL_FACTORY_INJECTIONS=!0,a=n.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default}),(0,o.default)(a,r.default.modulePrefix),e.default=a}),define("dummy/components/code-snippet",["exports","ember","dummy/snippets"],function(e,n,t){var o=self.require("highlight.js");e.default=n.default.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e;for(var n,t,o=e.split("\n").filter(function(e){return""!==e}),r=0;r<o.length;r++)(n=/^[ \t]*/.exec(o[r]))&&(void 0===t||t>n[0].length)&&(t=n[0].length);return void 0!==t&&t>0&&(e=e.replace(new RegExp("^[ \t]{"+t+"}","gm"),"")),e},source:n.default.computed("name",function(){return this._unindent((t.default[this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){o.highlightBlock(this.get("element"))},language:n.default.computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"));if(e)switch(e[1].toLowerCase()){case"js":return"javascript";case"coffee":return"coffeescript";case"hbs":return"htmlbars";case"css":return"css";case"scss":return"scss";case"less":return"less";case"emblem":return"emblem";case"ts":return"typescript"}})})}),define("dummy/components/one-way-checkbox",["exports","ember-one-way-controls/components/one-way-checkbox"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-color",["exports","ember-one-way-controls/components/one-way-color"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-date",["exports","ember-one-way-controls/components/one-way-date"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-datetime-local",["exports","ember-one-way-controls/components/one-way-datetime-local"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-email",["exports","ember-one-way-controls/components/one-way-email"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-file",["exports","ember-one-way-controls/components/one-way-file"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-hidden",["exports","ember-one-way-controls/components/one-way-hidden"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-input",["exports","ember-one-way-controls/components/one-way-input"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-month",["exports","ember-one-way-controls/components/one-way-month"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-number",["exports","ember-one-way-controls/components/one-way-number"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-password",["exports","ember-one-way-controls/components/one-way-password"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-radio",["exports","ember-one-way-controls/components/one-way-radio"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-range",["exports","ember-one-way-controls/components/one-way-range"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-search",["exports","ember-one-way-controls/components/one-way-search"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-select",["exports","ember-one-way-controls/components/one-way-select"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-select/option",["exports","ember-one-way-controls/components/one-way-select/option"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-tel",["exports","ember-one-way-controls/components/one-way-tel"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-text",["exports","ember-one-way-controls/components/one-way-text"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-textarea",["exports","ember-one-way-controls/components/one-way-textarea"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-time",["exports","ember-one-way-controls/components/one-way-time"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-url",["exports","ember-one-way-controls/components/one-way-url"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/one-way-week",["exports","ember-one-way-controls/components/one-way-week"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/slow-motion",["exports","ember-slow-motion/components/slow-motion"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-accordion-menu",["exports","ember-cli-foundation-6-sass/components/zf-accordion-menu"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-accordion",["exports","ember-cli-foundation-6-sass/components/zf-accordion"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-callout",["exports","ember-cli-foundation-6-sass/components/zf-callout"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-drilldown-menu",["exports","ember-cli-foundation-6-sass/components/zf-drilldown-menu"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-dropdown-menu",["exports","ember-cli-foundation-6-sass/components/zf-dropdown-menu"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-dropdown",["exports","ember-cli-foundation-6-sass/components/zf-dropdown"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-magellan",["exports","ember-cli-foundation-6-sass/components/zf-magellan"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-off-canvas",["exports","ember-cli-foundation-6-sass/components/zf-off-canvas"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-orbit",["exports","ember-cli-foundation-6-sass/components/zf-orbit"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-reveal",["exports","ember-cli-foundation-6-sass/components/zf-reveal"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-slider",["exports","ember-cli-foundation-6-sass/components/zf-slider"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-tabs",["exports","ember-cli-foundation-6-sass/components/zf-tabs"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/zf-tooltip",["exports","ember-cli-foundation-6-sass/components/zf-tooltip"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/controllers/index",["exports","ember"],function(e,n){e.default=n.default.Controller.extend({xValue:0})}),define("dummy/helpers/one-way-select/contains",["exports","ember-one-way-controls/helpers/one-way-select/contains"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"contains",{enumerable:!0,get:function(){return n.contains}})}),define("dummy/helpers/stylize",["exports","ember"],function(e,n){function t(e,n,t){for(var o in e){t=n(t,o,r(e,o))}return t}function o(e,n){return a(t(n,function(e,n,t){return e+"\n"+n+": "+t+";"},""))}e.stylize=o;var r=n.default.get,a=n.default.String.htmlSafe;e.default=n.default.Helper.helper(o)}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function o(){var e=arguments[1]||arguments[0];if(!1!==t.default.exportApplicationGlobal){var o;if("undefined"!=typeof window)o=window;else if("undefined"!=typeof global)o=global;else{if("undefined"==typeof self)return;o=self}var r,a=t.default.exportApplicationGlobal;r="string"==typeof a?a:n.default.String.classify(t.default.modulePrefix),o[r]||(o[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[r]}}))}}e.initialize=o,e.default={name:"export-application-global",initialize:o}}),define("dummy/initializers/zf-widget",["exports","ember-cli-foundation-6-sass/initializers/zf-widget"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return n.initialize}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){e.default=n.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){var o=n.default.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL});o.map(function(){}),e.default=o}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/snippets",["exports"],function(e){e.default={}}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"t4YUPSnn",block:'{"statements":[[1,[26,["outlet"]],false],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/code-snippet",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"3vKDCMgv",block:'{"statements":[[1,[26,["source"]],false],[0,"\\n"]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/components/code-snippet.hbs"}})}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"WMDyxNPI",block:'{"statements":[[11,"div",[]],[15,"class","top-bar"],[13],[0,"\\n  "],[11,"div",[]],[15,"class","top-bar-title"],[13],[0,"\\n    "],[11,"strong",[]],[13],[0,"Ember Slow Motion"],[14],[0,"\\n  "],[14],[0,"\\n  "],[11,"div",[]],[15,"class","top-bar__links"],[13],[0,"\\n    "],[11,"div",[]],[15,"class","top-bar-left"],[13],[0,"\\n      "],[11,"ul",[]],[15,"class","dropdown menu"],[13],[0,"\\n        "],[11,"li",[]],[13],[0,"\\n          "],[11,"a",[]],[15,"href","https://github.com/foxnewsnetwork/ember-slow-motion"],[13],[0,"\\n            Github\\n          "],[14],[0,"\\n        "],[14],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n  "],[14],[0,"\\n"],[14],[0,"\\n\\n"],[11,"div",[]],[15,"class","expanded row"],[13],[0,"\\n  "],[11,"div",[]],[15,"class","medium-3 large-2 columns"],[13],[0,"\\n    "],[11,"ul",[]],[15,"class","vertical menu docs-nav"],[13],[0,"\\n      "],[11,"li",[]],[15,"class","docs-nav__title-member"],[13],[0,"Introduction"],[14],[0,"\\n    "],[14],[0,"\\n  "],[14],[0,"\\n  "],[11,"div",[]],[15,"class","medium-9 large-10 columns"],[13],[0,"\\n    "],[11,"article",[]],[15,"class","docs-component"],[13],[0,"\\n      "],[11,"header",[]],[13],[0,"\\n        "],[11,"h1",[]],[15,"class","docs-component__page-title"],[13],[0,"\\n          Usage\\n        "],[14],[0,"\\n        "],[11,"p",[]],[15,"class","docs-component__page-lead"],[13],[0,"\\n          A tagless component inspired by react-motion to yield out a slowly transitioning value\\n        "],[14],[0,"\\n      "],[14],[0,"\\n      "],[11,"hr",[]],[13],[14],[0,"\\n      "],[11,"div",[]],[15,"class","row"],[13],[0,"\\n        "],[11,"div",[]],[15,"class","large-9 columns"],[13],[0,"\\n          "],[11,"h2",[]],[15,"class","docs-component__heading"],[13],[0,"\\n            Basic Comparison\\n          "],[14],[0,"\\n          "],[11,"div",[]],[15,"class","docs-component__examples"],[13],[0,"\\n            "],[11,"div",[]],[15,"class","docs-component__example-slow-motion"],[13],[0,"\\n              "],[11,"h3",[]],[15,"class","docs-component__example-header"],[13],[0,"Slow Motion Component"],[14],[0,"\\n"],[6,["slow-motion"],null,[["transitionValue"],[[28,["xValue"]]]],{"statements":[[0,"                "],[11,"div",[]],[15,"class","docs-component__example-box docs-component__example-box--slow-motion"],[16,"style",[33,["stylize"],null,[["transform"],[[33,["concat"],["translateX(",[28,["animeX"]],"px);"],null]]]],null],[13],[0,"\\n                  "],[11,"span",[]],[15,"class","docs-component__test-output"],[13],[1,[28,["animeX"]],false],[14],[0,"\\n                "],[14],[0,"\\n"]],"locals":["animeX"]},null],[0,"            "],[14],[0,"\\n            "],[11,"div",[]],[15,"class","docs-component__example-slow-motion"],[13],[0,"\\n              "],[11,"h3",[]],[15,"class","docs-component__example-header"],[13],[0,"CSS3 Transitions"],[14],[0,"\\n              "],[11,"div",[]],[15,"class","docs-component__example-box docs-component__example-box--css3-transition"],[16,"style",[33,["stylize"],null,[["transform"],[[33,["concat"],["translateX(",[28,["xValue"]],"px);"],null]]]],null],[13],[0,"\\n                "],[1,[26,["xValue"]],false],[0,"\\n              "],[14],[0,"\\n            "],[14],[0,"\\n          "],[14],[0,"\\n          "],[11,"h2",[]],[15,"class","docs-component__heading"],[13],[0,"\\n            Why?\\n          "],[14],[0,"\\n          "],[11,"p",[]],[15,"class","docs-component__explanation"],[13],[0,"\\n            In general, you want to use css3 transitions over the slow-motion component since css3 transitions are far more optimized and fluid than doing it in ember-ified javascript. However, if you\'re developing on an objectively poorly optimized platform (e.g. PS4 browsers, Wii, XBox, and certain older browsers), this component might be your only choice. Use at your peril!\\n          "],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"div",[]],[15,"class","large-3 columns"],[13],[0,"\\n          "],[11,"div",[]],[15,"class","docs-component__controls"],[13],[0,"\\n            "],[11,"label",[]],[15,"class","docs-component__control-label"],[13],[0,"\\n              translate position\\n              "],[1,[33,["one-way-input"],[[28,["xValue"]]],[["update","class"],[[33,["action"],[[28,[null]],[33,["mut"],[[28,["xValue"]]],null]],null],"docs-component__animex-value"]]],false],[0,"\\n            "],[14],[0,"\\n          "],[14],[0,"\\n        "],[14],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n  "],[14],[0,"\\n"],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/utils/bezier",["exports","ember-slow-motion/utils/bezier"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/utils/computed",["exports","ember-slow-motion/utils/computed"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/config/environment",["ember"],function(e){try{var n=document.querySelector('meta[name="dummy/config/environment"]').getAttribute("content"),t=JSON.parse(unescape(n)),o={default:t};return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(e){throw new Error('Could not read config from meta tag with name "dummy/config/environment".')}}),runningTests||require("dummy/app").default.create({});