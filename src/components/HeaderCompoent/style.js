import { Row } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperHeader = styled(Row)`
    background-color: #037fe1;
    // align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1770px;
    padding: 10px 0;
    height: 100px
`

export const WrapperTextHeader = styled(NavLink)`
textDecoration: none
    font-size: 18px;
    color: #000000;
    font-weight: bold;
    text-align: left;
    &:hover {
        font-size: 18px;
        color: #fff;
    }
`

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    max-width: 200px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`

export const WrapperTypeProduct = styled.div`
padding-bottom: 5px;    
padding-top: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-start;
    height: fit-content;
      flex-direction: column;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: #9255FD;
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: #9255FD;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top:20px;
    flex-wrap: wrap;
`