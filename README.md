# \<paper-avatar\>

### Element to display circular avatars

<!--
```
<script type="module">
	import "https://npm-demos.appspot.com/@elifent/paper-avatar@3.0.1/paper-avatar.js"
</script>
<custom-element-demo>
  <template>
    <paper-avatar
        img="https://picsum.photos/id/1027/200"
        elevation="3"
    ></paper-avatar>
  </template>
</custom-element-demo>
```
-->

## Installation

```
npm install --save @elifent/paper-avatar
```

## In an html file

```html
<html>
  <head>
    <script type="module">
      import "@elifent/paper-avatar/paper-avatar.js";
    </script>
  </head>
  <body>
    <paper-avatar
      img="https://picsum.photos/id/1027/200"
      elevation="3"
    ></paper-avatar>
  </body>
</html>
```

## In a Polymer 3 element

```js
import { PolymerElement, html } from "@polymer/polymer";
import "@elifent/paper-avatar/paper-avatar.js";
class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <paper-avatar
        img="https://picsum.photos/id/1027/200"
        elevation="3"
      ></paper-avatar>
    `;
  }
}
customElements.define("sample-element", SampleElement);
```

### Installation

```
  git clone https://github.com/elifent/paper-avatar
  cd paper-avatar
  npm install
  npm install -g polymer-cli
```

### Running the demo locally

```
  polymer serve --npm
  open http://127.0.0.1:<port>/components/paper-avatar/demo/

```

Found issues? Let me know
