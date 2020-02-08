import { LitElement, html } from 'lit-element';

class LeadForm extends LitElement {

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

  firstUpdated(changedProperties){
    super.firstUpdated();
  }

  render(){
    return html`
        <style>
            .lead-form-wrapper{
                width: 100%;
                padding:20px;
                box-sizing:border-box;
                color: #4d5a6e;
            }
            input[type="text"], input[type="number"]{
                min-height:40px;
                border-radius:2px;
                border:1px solid black;
                box-sizing: border-box;
                width:100%;
            }
            input[type="checkbox"]{
                margin-left:10px;
            }
            input.shaded{
                background-color: #eee;
            }
            label{
                line-height:2rem;
                font-weight:bold;
            }
            .dynamic-width{
                display:inline-block;
                width:calc(50% - 10px);
            }
            .left-group{
                margin-right:10px;
            }
            .right-group{
                margin-left:10px;
            }
            form{
                box-sizing:border-box;
            }
            .form-group{
                margin-top:10px;
            }
            .checkbox-text{
                color:black;
            }
            .form-submit{
                min-height:40px;
                padding:15px;
                background-color:#ef5a36;
                border-radius:4px;
                border:0px;
                margin-top:20px;
                color:#fff;
                font-weight:bold;
            }
            .description-title{
                font-weight:bold;
                margin-right:5px;
            }
            .form-heading{
                width:100%;
            }
            .form-title{
                font-size:1.8rem;
                font-weight:bold;
                line-height:2.5rem;
                width:100%;
                text-align:center;
                margin-bottom:5px;
            }
            .form-description{
                border-top:1px solid #4d5a6e;
                font-size:1rem;
                line-height:2.5rem;
                width:100%;
            }
            .close-modal{
                font-size:1.8rem;
                font-weight:bold;
                color:#9e9e9e;
                position:absolute;
                right:2%;
                top:7%;
                cursor:pointer;
            }
            @media only screen and (max-width:470px){
                .left-group, .right-group{
                    width:100%;
                    margin:0px;
                }
            }
        </style>
        <div class="lead-form-wrapper">
            <span class="close-modal" @click = ${(e) => {this.closeModal()}}>X</span>
            <div class="form-heading">
                <div class = "form-title">Get Started with SquadVoice</div>
                <div class = "form-description">
                    <span class = "description-title">Plan Selected:</span>Qualified 40
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
                    <input type="number" class="lead-number-input shaded" id="input-leads" placeholder="-">
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
                    <input type="checkbox" name="lead-sources" value="Zillow"><span class="checkbox-text">Zillow</span>
                    <input type="checkbox" name="lead-sources" value="Realtor"><span class="checkbox-text">Realtor</span>
                    <input type="checkbox" name="lead-sources" value="Ylopo"><span class="checkbox-text">Ylopo</span>
                    <input type="checkbox" name="lead-sources" value="Others"><span class="checkbox-text">Others</span>
                </div>

                <div class="form-group">
                    <label>How did you hear about us</label><br/>
                    <input type="checkbox" name="hearing-sources" value="Google"><span class="checkbox-text">Google</span>
                    <input type="checkbox" name="hearing-sources" value="Facebook"><span class="checkbox-text">Facebook</span>
                    <input type="checkbox" name="hearing-sources" value="Email"><span class="checkbox-text">Email</span>
                    <input type="checkbox" name="hearing-sources" value="Friends"><span class="checkbox-text">Friends</span>
                    <input type="checkbox" name="hearing-sources" value="Real Closers"><span class="checkbox-text">Real Closers</span>
                </div>

                <button class="form-submit">Submit</button>
            </form>
        </div>
    `;
  }

  closeModal(){
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