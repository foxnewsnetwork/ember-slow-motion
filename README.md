# ember-slow-motion

Ember tagless component for handling value transitions in handlebars. Inspired by the api of react-motion https://github.com/chenglou/react-motion

## Usage
Use the `{{slow-motion}}` component like so:

```javascript
{{#slow-motion
  transitionValue=myValue
  transitionTimingFunction=myBezierCurve
  transitionDuration=500 as |animatedValue|}}

  <div class='animate-me'
    style={{html-safe
      (concat 'transform: translateX(' animatedValue 'px);' )}}>
      {{animatedValue}}
  </div>
{{/slow-motion}}
```

`{{slow-motion}}` receives changes to `myValue`, it will continuously yield out the interpolated in-between values to `animatedValue` during the entire `transitionDuration`

Play with the demo here: https://foxnewsnetwork.github.io/ember-slow-motion

## Installation

* `git clone <repository-url>` this repository
* `cd ember-slow-motion`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
