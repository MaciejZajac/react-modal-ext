import React from 'react'
import Modal from '../components/Modal/Modal'
import store from '../store'
import { ModalEnum } from '../types/types'
interface IContainerProps {
  //
}
interface IContainerState {
  visible: boolean
  size: ModalEnum
  component: JSX.Element | string
}
class Container extends React.Component<IContainerProps, IContainerState> {
  constructor(props: IContainerProps) {
    super(props)
    this.state = {
      visible: false,
      size: ModalEnum.SMALL,
      component: <div />
    }

    this.showModal = this.showModal.bind(this)
    this.renderModal = this.renderModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    store.register({
      showModal: this.showModal,
      closeModal: this.closeModal
    })
  }

  showModal(size: ModalEnum, component: JSX.Element | string) {
    this.setState({
      visible: true,
      size,
      component
    })
  }

  closeModal() {
    this.setState({
      visible: false,
      size: ModalEnum.SMALL,
      component: <div />
    })
  }

  renderModal() {
    const { size, component } = this.state
    return (
      <Modal size={size} component={component} closeModal={this.closeModal} />
    )
  }

  render() {
    const { visible } = this.state
    if (visible) return this.renderModal()

    return null
  }
}

export default Container
