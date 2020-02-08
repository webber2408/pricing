import { LitElement, html } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';
import {leadFormCSS} from '../styles/leadFormCSS.js';

class LeadForm extends LitElement {

  static get properties(){
      return {
          leads: Number
      }
  }

  constructor(){
      super();
      this.leads = 0;
  }

  updated(changedProperties){
    super.updated();
  }

  firstUpdated(changedProperties){
    super.firstUpdated();
  }

  render(){
    return html`
        ${leadFormCSS}
        <div class="lead-form-wrapper">
            <span class="close-modal" @click = ${(e) => {this.closeModal()}}>
                <iron-icon icon = "close"></iron-icon>
            </span>
            <div class="form-heading">
                <div class = "form-title">Get Started with SquadVoice</div>
                <div class = "form-description">
                    <span class = "description-title">Plan Selected:</span>Qualified ${this.leads}
                </div>
            </div>
            <form>
                <div class="form-group">
                    <label for="input-name">Name</label><br>
                    <input type="text" class="lead-name-input" id="input-name" placeholder="">
                </div>

                <div class="form-group dynamic-width left-group">
                    <label for="input-email">E-mail Address</label><br>
                    <input type="text" class="lead-email-input" id="input-email" placeholder="">
                </div><div class="form-group dynamic-width right-group">
                    <label for="input-phone">Phone No.</label><br>
                    <input type="text" class="lead-phone-input" id="input-phone" placeholder="">
                </div>

                <div class="form-group dynamic-width left-group">
                    <label for="input-leads">Number of leads you generate in a month</label><br>
                    <input type="number" class="lead-number-input shaded" id="input-leads" placeholder="">
                </div><div class="form-group dynamic-width right-group">
                    <label for="input-total-leads">Total leads in your CRM</label><br>
                    <input type="number" class="leads-total-input shaded" id="input-total-leads" placeholder="">
                </div>

                <div class="form-group dynamic-width left-group">
                    <label for="input-crm-type">Which CRM do you use?</label><br>
                    <input type="number" class="lead-crm-type-input shaded" id="input-crm-type" placeholder="">
                </div><div class="form-group dynamic-width right-group">
                    <label for="input-agents-count">No. of Agents</label><br>
                    <input type="number" class="lead-agents-count-input shaded" id="input-agents-count" placeholder="">
                </div>

                <div class="form-group">
                    <label>What are your biggest lead sources?</label><br/>
                    <input type="checkbox" class = "input-lead-sources" name="lead-sources" value="Zillow"><span class="checkbox-text">Zillow</span>
                    <input type="checkbox" class = "input-lead-sources" name="lead-sources" value="Realtor"><span class="checkbox-text">Realtor</span>
                    <input type="checkbox" class = "input-lead-sources" name="lead-sources" value="Ylopo"><span class="checkbox-text">Ylopo</span>
                    <input type="checkbox" class = "input-lead-sources" name="lead-sources" value="Others"><span class="checkbox-text">Others</span>
                </div>

                <div class="form-group">
                    <label>How did you hear about us</label><br/>
                    <input type="checkbox" class = "input-hearing-sources" name="hearing-sources" value="Google"><span class="checkbox-text">Google</span>
                    <input type="checkbox" class = "input-hearing-sources" name="hearing-sources" value="Facebook"><span class="checkbox-text">Facebook</span>
                    <input type="checkbox" class = "input-hearing-sources" name="hearing-sources" value="Email"><span class="checkbox-text">Email</span>
                    <input type="checkbox" class = "input-hearing-sources" name="hearing-sources" value="Friends"><span class="checkbox-text">Friends</span>
                    <input type="checkbox" class = "input-hearing-sources" name="hearing-sources" value="Real Closers"><span class="checkbox-text">Real Closers</span>
                </div>

                <button class="form-submit" @click = ${(e)=>{this.prepareDataAndSend(e)}}>Submit</button>
            </form>
        </div>
    `;
  }

  prepareDataAndSend(e){
    e.preventDefault();
    let name = this.shadowRoot.querySelector('#input-name').value;
    let email = this.shadowRoot.querySelector('#input-email').value;
    let phoneNo = this.shadowRoot.querySelector('#input-phone').value;
    let noOfLeadsPerMonth = this.shadowRoot.querySelector('#input-leads').value;
    let totalLeads = this.shadowRoot.querySelector('#input-total-leads').value;
    let crmType = this.shadowRoot.querySelector('#input-crm-type').value;
    let agents = this.shadowRoot.querySelector('#input-agents-count').value;
    let leadSources = this.shadowRoot.querySelectorAll('.input-lead-sources');
    let selectedLeadSources = [];
    leadSources.forEach((item) => {
        if(item.checked)
            selectedLeadSources = [...selectedLeadSources, item.value];
    });
    let hearingSources = this.shadowRoot.querySelectorAll('.input-hearing-sources');
    let selectedHearingSources = [];
    hearingSources.forEach((item) => {
        if(item.checked)
            selectedHearingSources = [...selectedHearingSources, item.value];
    });
    let resultString = 
        "Name: " + name + "\n" +
        "Email: " + email + "\n"+
        "Phone Number: " + phoneNo + "\n" +
        "Number of leads you generate in a month: " + noOfLeadsPerMonth + "\n" +
        "Total leads in your CRM: " + totalLeads + "\n" +
        "Which CRM do you use? " + crmType + "\n" +
        "Number of Agents: " + agents + "\n" +
        "What are your biggest leads sources? " + selectedLeadSources.toString() + "\n" +
        "How did you hear abour us? " + selectedHearingSources.toString() + "\n";

    swal("Submitted!", resultString, "success").then((success) => {
        if(success){
            this.closeModal();
        }
    });
  }

  resetForm(){
    this.shadowRoot.querySelector('#input-name').value = "";
    this.shadowRoot.querySelector('#input-email').value = "";
    this.shadowRoot.querySelector('#input-phone').value = "";
    this.shadowRoot.querySelector('#input-leads').value = "";
    this.shadowRoot.querySelector('#input-total-leads').value = "";
    this.shadowRoot.querySelector('#input-crm-type').value = "";
    this.shadowRoot.querySelector('#input-agents-count').value = "";
    this.shadowRoot.querySelectorAll('.input-lead-sources');
    let leadSources = this.shadowRoot.querySelectorAll('.input-lead-sources');
    leadSources.forEach((item) => {
        item.checked = false;
    });
    let hearingSources = this.shadowRoot.querySelectorAll('.input-hearing-sources');
    hearingSources.forEach((item) => {
        item.checked = false;
    });
  }

  closeModal(){
    this.resetForm();
    window.dispatchEvent(new CustomEvent('close-modal',{
        detail:{
            message: "Close Modal"
        },
        composed: true,
        bubbles: true
    }));
  }

}
// Register the new element with the browser.
customElements.define('lead-form', LeadForm);