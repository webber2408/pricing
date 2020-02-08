import {html} from 'lit-element';

export const leadPricingCSS = html`
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
`;