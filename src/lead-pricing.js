import { LitElement, html } from 'lit-element';
import {repeat} from 'lit-html/directives/repeat.js';
import '@polymer/paper-dialog';
import './lead-form/lead-form.js';
import {leadPricingCSS} from './styles/leadPricingCSS.js';
import pricingData from "./pricing-data.json";

class LeadPricing extends LitElement {

  static get properties(){
      return {
        priceList: Array,
        selectedPackages: Array,
        purchaseLeadsPerMonth: Number
      }
  }

  constructor(){
      super();
      this.priceList = ["$100K - $200K", "$200K - $300K", "$300K - $400K", "$400K - $500K", "$500K+"];
      this.purchaseLeadsPerMonth = 0;
      this.data = pricingData;
      this.selectedPackages = [];
  }

  updated(changedProperties){
    super.updated();
  }

  firstUpdated(changedProperties){
    super.firstUpdated();

    //Add initial selected attribute
    this.navClicked(3);

    window.addEventListener('close-modal', (e)=>{ this.closeLeadForm() });
  }

  render(){
    return html`
        ${leadPricingCSS}
        <div class = "border-box lead-pricing-wrapper">
          <div class = "flex-center border-box lead-nav-wrapper">
            ${
              repeat(
                this.priceList,
                (item,index) => {
                  return html`
                    <div class="auto-margin flex-center border-box theme-color price-nav" id="nav-${index+1}"
                      @click = ${(e) => {this.navClicked(index+1)}}
                    >${item}</div>
                  `;
                }
              )
            }
          </div>
          <div class = "border-box packages">
            ${
              repeat(
                this.selectedPackages,
                (item) => {
                  return html`
                    <div class = "border-box package ${item.isPopular != null && item.isPopular?"popular":""}">
                      ${item.isPopular != null && item.isPopular?html`
                        <div class="focused-detail bg-red">Most Popular!</div>
                      `:html``}
                      <div class="focused-detail">
                        Qualified ${item.leadsPerMonth}
                      </div>
                      <div class = "border-box flex-center detail-wrapper">
                        <div class = "detail-card">
                          <div class = "detail-title">$${item.pricePerTransfer}</div>
                          <div class = "detail-description">Per Qualified Lead</div>
                        </div>
                        <div class = "detail-card detail-border">
                          <div class = "detail-description">Qualified Leads Per Month</div>
                          <div class = "detail-sub-title">${item.leadsPerMonth}</div>
                        </div>
                        <div class = "detail-card">
                          <div class = "detail-description">Platform Fee Per Month</div>
                          <div class = "detail-sub-title">$${item.platformPrice}</div>
                        </div>
                      </div>
                      <div class="focused-detail">
                        $${numeral(item.pricePerTransfer*item.platformPrice).format('0,0')}/mo
                      </div>
                      <button class="primary-btn" @click = "${() => this.openLeadForm(item.leadsPerMonth)}">Start Your Trial</button>
                    </div>
                  `;
                }
              )
            }
            <div class = "border-box package">
              <div class="focused-detail">
                Enterprise
              </div>
              <div class = "border-box flex-center detail-wrapper other-detail">
                Want more that 80 qualified leads each month?
              </div>
              <button class="primary-btn">Get In Touch</button>
            </div>
          </div>
        </div>
        <paper-dialog id="lead-form-dialog" modal>
            <lead-form .leads = ${this.purchaseLeadsPerMonth}></lead-form>
        </paper-dialog>
    `;
  }

  openLeadForm(leadsPerMonth){
    this.purchaseLeadsPerMonth = leadsPerMonth;
    this.shadowRoot.querySelector("#lead-form-dialog").open();
  }

  closeLeadForm(){
    this.shadowRoot.querySelector("#lead-form-dialog").close();
  }

  navClicked(index){
    //Toggle selected class
    let priceNavs = this.shadowRoot.querySelectorAll('.price-nav');
    priceNavs.forEach((item) => {
      item.classList.remove('selected-price-nav');
    });
    this.shadowRoot.querySelector("#nav-"+index).classList.add('selected-price-nav');
    //Get selected packages for the current selected price range
    this.selectedPackages = this.data.filter((item) => {return item.id == index})[0].packages;
  }

}
// Register the new element with the browser.
customElements.define('lead-pricing', LeadPricing);