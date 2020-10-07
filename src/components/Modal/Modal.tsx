import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { ModalEnum } from '../../types/types'
import { StyledContainer, StyledContent, StyledClose } from './Style'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
     height: 100%;
      overflow: hidden
  }
`
interface IModal {
  size: ModalEnum
  component: JSX.Element | string
  closeModal: () => void
}
const Modal = ({ size, component, closeModal }: IModal) => {
  const handleCloseModal = (e: any) => {
    e.stopPropagation()
  }

  return (
    <StyledContainer onClick={closeModal}>
      <GlobalStyle />
      <StyledContent size={size} onClick={(e) => handleCloseModal(e)}>
        <StyledClose onClick={closeModal} />
        {component}
      </StyledContent>
    </StyledContainer>
  )
}

export default Modal
