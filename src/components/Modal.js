import React from "react";
import styled from "styled-components";

const Zhide = styled.div`
    display: ${props => props.toggle ? "block" : "none"};
    z-index: 1;
    position: absolute;
    background-color: rgba(128,128,128,0.5);
    height: 120vh;
    width: 120vw;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Wrapper = styled.div`
    display: ${props => props.toggle ? "block" : "none"};
    z-index: 2;
    position: absolute;
    background-color: #ffffff;
    height: 40vw;
    width: 60vw;
    border-radius: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const ModalWrapper = styled.div`
    z-index: 2;
    position: absolute;
    border-radius: 15px;
    top: 41%;
    left: 50%;
    transform: translate(-50%, -50%);
`


const Modal = (props) => {
    const closeModal = () => {
        props.toggleModal(false)
    }
    return (
        <ModalWrapper>
            <Zhide toggle={props.toggle} onClick={closeModal}>
            </Zhide>
            <Wrapper toggle={props.toggle}>
            </Wrapper>
        </ModalWrapper>
    )
}

export default Modal