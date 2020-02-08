import {html} from 'lit-element';

export const leadFormCSS = html`
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
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button {
            opacity: 1;
        }
        @media only screen and (max-width:470px){
            .left-group, .right-group{
                width:100%;
                margin:0px;
            }
        }
    </style>
`;