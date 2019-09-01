import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";

import "@polymer/paper-ripple/paper-ripple";
import "@polymer/paper-spinner/paper-spinner";
import "@polymer/paper-styles/paper-styles";

/**
 `paper-avatar` displays circular avatar. You can either use an image or initials as avatar content. 
 If you are giving an image, paper-avatar displays a paper-spinner as the image if getting loaded.
 Always give a 1:1 image for good results.
 
 Example:

 <paper-avatar img="https://picsum.photos/id/1027/200"></paper-avatar>
 
 ### Styling
 The following custom properties and mixins are also available for styling:
  
 Custom property | Description | Default
 ----------------|-------------|----------
 `--size` | Height and width of avatar | `50px`
 `--background-color` | Background color of avatar | `#3f51b5`
 `--font-color` | Font color of initials | `#fff`
 `--font-size` | Font size of initials | `14px`
 `--font-family` | Font family of initials | `Calibri, sans-serif`
 `--initial` | A mixin that is applied to initials | `{}`
 
 * @customElement
 * @group elifent
 * @element paper-avatar
 * @polymer
 * @demo demo/index.html
 */
class PaperAvatar extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host([elevation="1"]) .avatar {
          @apply --shadow-elevation-2dp;
        }
        :host([elevation="2"]) .avatar {
          @apply --shadow-elevation-6dp;
        }
        :host([elevation="3"]) .avatar {
          @apply --shadow-elevation-12dp;
        }
        :host([elevation="4"]) .avatar {
          @apply --shadow-elevation-16dp;
        }
        :host([elevation="5"]) .avatar {
          @apply --shadow-elevation-24dp;
        }
        .avatar {
          height: var(--size);
          width: var(--size);
          position: relative;
          border-radius: calc(var(--size) / 2);
          background-color: var(--background-color);
          overflow: hidden;
        }
        .spinnerHolder {
          height: var(--size);
          width: var(--size);
          @apply --layout-horizontal;
          @apply --layout-center-justified;
        }
        .spinner {
          @apply --layout-vertical;
          @apply --layout-center-justified;
        }
        .initialHolder {
          height: var(--size);
          width: var(--size);
          @apply --layout-horizontal;
          @apply --layout-center-justified;
        }
        .initial {
          font-size: var(--font-size);
          font-family: var(--font-family);
          background-color: var(--background-color);
          color: var(--font-color);
          @apply --initial;
          @apply --layout-vertical;
          @apply --layout-center-justified;
        }
      </style>
      <div class="avatar">
        <paper-ripple></paper-ripple>

        <template is="dom-if" if="{{displayInitials}}">
          <div class="initialHolder">
            <div class="initial">
              {{initial}}
            </div>
          </div>
        </template>

        <div id="imageHolder"></div>
        <div class="spinnerHolder">
          <div class="spinner">
            <paper-spinner active></paper-spinner>
          </div>
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      /** Link to image*/
      img: {
        type: String,
        value: null,
        observer: "loadImage"
      },
      /** Intials to display*/
      initial: {
        type: String,
        value: null
      },
      /** Elevation that need to applied on avatar*/
      elevation: {
        type: Number,
        value: 1,
        reflectToAttribute: true
      },
      /** Controls what need to be displayed as avatar. If an image link is given then image will be displayed, if image link 
       * is not given then initial will be displayed.
      */
      _displayInitials: {
        type: Boolean,
        value: false
      },
    };
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
    const size = "--size: 50px;";
    const backgroundColor = "--background-color: #3f51b5;";
    const fontColor = "--font-color: #fff;";
    const fontSize = "--font-size: 14px;";
    const fontFamily = "--font-family: Calibri, sans-serif;";
    var customeStyles =
      "html {  " +
      size +
      backgroundColor +
      fontColor +
      fontSize +
      fontFamily
      " }";
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(customeStyles));
    document.head.appendChild(style);
  }

  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    super.ready();
    if (this.initial != null) {
      this.displayInitials = true;
    }
  }

  loadImage() {
    //When image url changes then imageHolder is cleared. This will bring paper-spinner on to visiblity.
    this.$.imageHolder.innerHTML = "";
    const objImg = new Image();
    objImg.style = "height: var(--size);width: var(--size);";
    objImg.src = this.img;
    //As the image loads its then appened to imageHolder. paper-spinner will be hidden as it overlfows the container.
    objImg.onload = function() {
      this.$.imageHolder.appendChild(objImg);
    }.bind(this);
  }
}

window.customElements.define("paper-avatar", PaperAvatar);
