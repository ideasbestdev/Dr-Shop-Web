import styled from "styled-components";

interface Props {
    v2?: boolean,
}

export const CheckboxStyle = styled.div<Props>`    
    display: flex;
    align-items: center;
    input{
        visibility: hidden;
        position: absolute;
        z-index: -33333333;
        width: 0;
        height: 0;
    }
    label{
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        &:before{
            content: "";
            width: 13px;
            height: 13px;
            border: 1px solid #2262BC;
            border-radius: 2px;
            background-color: white;
            margin-right: 11px;
        }

        &::after{
            content: "";
            position: absolute;
            display: none;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            height: 7px;
            top: 4px;
            width: 3px;
            pointer-events: none;
            border-bottom: 3px solid white;
            left: 4.6px;
            border-right: 3px solid white;
        }
    }
    input:checked ~ label{
        &:before{
            background-color: #2262BC;
        }
        &::after{
            display: inline-block;
        }
    }

    &.v2{
        label {
            &::after{
                background-color: #2262BC;
                transform: none;
                width: 8px;
                height: 8px;
                left: 3px;
                top: auto;
                border-radius: 2px;
                border: none;
            } 
        }

        input:checked ~ label{
            &:before{
                background-color: transparent;
            }
        }

    }

    &.v3{
        
        input:checked ~ label{
            &::before{
                background-color: white;
                border: 2px solid #2262BC;
            } 
        }
        label{

            &::before{
                width: 20px;
                height: 20px;
                border: 2px solid #979797;
                border-radius: 4px;
                margin: 0;
            }

            &::after{
                border-right: 2px solid #2262BC;
                border-bottom: 2px solid #2262BC;
                height: 14px;
                width: 6px;
                top: 1px;
                left: 8px;
            }
        }
    }
`