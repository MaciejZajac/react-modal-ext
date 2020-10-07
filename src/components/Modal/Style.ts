import styled from 'styled-components'
import { ModalEnum } from '../../types/types'

interface IStyledContent {
  size: ModalEnum
}
export const StyledContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const StyledContent = styled.div<IStyledContent>`
  background-color: white;
  position: relative;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  ${({ size }) => {
    switch (size) {
      case ModalEnum.LARGE:
        return `
          border-radius: 0;
          width: 100%;
          height: 100%;
        `
      case ModalEnum.MEDIUM:
        return `  
          min-height: 400px;
          max-height: 800px;
          min-width: 300px;
          max-width: 800px;
        `
      default:
        return `
            min-height: 200px;
            max-height: 350px;
            min-width: 300px;
            max-width: 400px
        `
    }
  }}
`
export const StyledClose = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  border: 2px solid rgba(109, 108, 108, 0.6);
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: 14px;
    right: 5px;
    width: 18px;
    height: 3px;
    background-color: rgba(0, 0, 0, 0.8);
    transform: rotate(45deg);
  }
  &:after {
    content: '';
    position: absolute;
    top: 14px;
    right: 5px;
    width: 18px;
    height: 3px;
    background-color: rgba(0, 0, 0, 0.8);
    transform: rotate(-45deg);
  }
`
