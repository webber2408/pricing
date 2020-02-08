import { LitElement, html } from 'lit-element';
import {repeat} from 'lit-html/directives/repeat.js';
import '@polymer/paper-dialog';
import './lead-form/lead-form.js';

class LeadPricing extends LitElement {

  static get properties(){
      return {
        priceList: Array,
        selectedPackages: Array
      }
  }

  constructor(){
      super();
      this.priceList = ["$100K - $200K", "$200K - $300K", "$300K - $400K", "$400K - $500K", "$500K+"];
      this.data = [
        {
          id: 1,
          range: "$100K - $200K",
          packages: [
            {
              leadsPerMonth: 20,
              pricePerTransfer: 69,
              platformPrice: 299
            },
            {
              leadsPerMonth: 40,
              pricePerTransfer: 67,
              platformPrice: 599,
              isPopular: true
            },
            {
              leadsPerMonth: 80,
              pricePerTransfer: 63,
              platformPrice: 799
            }
          ]
        },
        {
          id: 2,
          range: "$200K - $300K",
          packages: [
            {
              leadsPerMonth: 20,
              pricePerTransfer: 79,
              platformPrice: 299
            },
            {
              leadsPerMonth: 40,
              pricePerTransfer: 77,
              platformPrice: 599,
              isPopular: true
            },
            {
              leadsPerMonth: 80,
              pricePerTransfer: 72,
              platformPrice: 799
            }
          ]
        },
        {
          id: 3,
          range: "$300K - $400K",
          packages: [
            {
              leadsPerMonth: 20,
              pricePerTransfer: 99,
              platformPrice: 299
            },
            {
              leadsPerMonth: 40,
              pricePerTransfer: 96,
              platformPrice: 599,
              isPopular: true
            },
            {
              leadsPerMonth: 80,
              pricePerTransfer: 90,
              platformPrice: 799
            }
          ]
        },
        {
          id: 4,
          range: "$400K - $500K",
          packages: [
            {
              leadsPerMonth: 20,
              pricePerTransfer: 109,
              platformPrice: 299
            },
            {
              leadsPerMonth: 40,
              pricePerTransfer: 106,
              platformPrice: 599,
              isPopular: true
            },
            {
              leadsPerMonth: 80,
              pricePerTransfer: 99,
              platformPrice: 799
            }
          ]
        },
        {
          id: 5,
          range: "$500K+",
          packages: [
            {
              leadsPerMonth: 20,
              pricePerTransfer: 129,
              platformPrice: 299
            },
            {
              leadsPerMonth: 40,
              pricePerTransfer: 125,
              platformPrice: 599,
              isPopular: true
            },
            {
              leadsPerMonth: 80,
              pricePerTransfer: 117,
              platformPrice: 799
            }
          ]
        }
      ];
      this.selectedPackages = [];
  }

  updated(changedProperties){
    super.updated();
  }

  firstUpdated(changedProperties){
    super.firstUpdated();

    //Add initial selected attribute
    this.navClicked(3);
    this.openLeadForm();

    window.addEventListener('close-modal', (e)=>{ this.closeLeadForm() });
  }

  render(){
    return html`
        <style>
          .lead-pricing-wrapper{
            background-color:alice-blue;
            padding:40px;
            height:100%;
            width: 100%;
            overflow-y:auto;
            max-width: 1100px;
            margin: 0 auto;
          }
          .lead-nav-wrapper{
            height:80px;
            width:100%;
          }
          .price-nav{
            background-color:#f7f7f7;
            width:20%;
            height:100%;
            border-right:1px solid #dedede;
            font-weight:bold;
            font-size:1rem;
            text-align:center;
            cursor:pointer;
          }
          .price-nav.selected-price-nav{
            color: #f7f7f7;
            background-color: #5a6f8f;
          }
          .price-nav:nth-child(1){
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
          }
          .price-nav:nth-child(5){
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border-right:0px;
          }
          .theme-color{
            color:#5a6f8f;
          }
          .packages{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            flex-wrap: wrap;
            padding-top: 40px;
          }
          .package{
            width: calc(25% - 12px);
            margin-bottom: 40px;
          }
          .focused-detail {
            background-color: #5a6f8f;
            color: #ffffff;
            font-weight: bold;
            padding: 10px;
            text-align: center;
          }
          .detail-wrapper{
            flex-direction:column;
            width:100%;
            padding: 0px 20px;
          }
          .other-detail{
            min-height:290.37px;
            padding: 0px 20px;
            text-align:center;
            background-color: #f7f7f7;
            font-size:1.5rem;
          }
          .detail-card{
            width:100%;
            text-align:center;
            padding: 15px 0px;
          }
          .detail-title {
            font-size: 1.8rem;
            line-height: 1.5;
            font-weight: bold;
          }
          .detail-sub-title {
            font-size: 1.2rem;
            line-height: 1.8;
          }
          .detail-description {
            font-size: 1rem;
            line-height: 1;
          }
          .detail-border {
            border-width: 2px 0;
            border-color: #dedede;
            border-style: dotted;
          }
          .focused-detail.bg-red {
            background-color: red;
          }
          .primary-btn {
            background-color: transparent;
            padding: 15px;
            text-align: center;
            border: 2px solid #ef5a36;
            border-radius: 2px;
            color: #ef5a36;
            width: 100%;
            margin-top: 10px;
            outline:none;
            cursor:pointer;
          }
          .popular > .primary-btn {
            background-color: #ef5a36;
            color: #ffffff;
          }
          .popular > .detail-wrapper {
            background-color: #f7f7f7;
          }
          .flex-center{
            display:flex;
            justify-content:space-around;
            align-items:center;
          }
          .border-box{
            box-sizing: border-box !important;
          }
          #lead-form-dialog{
            width:50%;
            margin:0px 25%;
            top:2%;
            overflow-y:auto;
          }
        </style>
        <style>
          @media screen and (max-width: 992px) {
            .package {
              width: calc(33% - 12px);
            }
          }
          @media screen and (max-width: 768px) {
            .package {
              width: calc(50% - 12px);
            }
            #lead-form-dialog{
              width:80%;
              margin:0px 10%;
            }
          }
          @media only screen and (max-width:470px){
            .lead-pricing-wrapper{
              padding:40px 15px;
            }
            .price-nav{
              font-size:12px;
            }
            .package {
              width: 100%;
              margin: 0 20px 40px;
            }
            #lead-form-dialog{
              width:94%;
              margin:0px 3%;
            }
          }
        </style>

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
                      <button class="primary-btn" @click = "${() => this.openLeadForm()}">Start Your Trial</button>
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
            <lead-form></lead-form>
        </paper-dialog>
    `;
  }

  openLeadForm(){
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