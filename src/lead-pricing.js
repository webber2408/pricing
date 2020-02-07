import { LitElement, html } from 'lit-element';

class LeadPricing extends LitElement {

  static get properties(){
      return {
      }
  }

  constructor(){
      super();
  }

  updated(changedProperties){
    super.updated();
  }

  render(){
    return html`
        Welcome to the lead pricing portal!
    `;
  }

}
// Register the new element with the browser.
customElements.define('lead-pricing', LeadPricing);