import { ModalEnum } from './types/types'

interface IRegister {
  showModal: (size: ModalEnum, component: JSX.Element | string) => void
  closeModal: () => void
}
class Store {
  public handleShowModal: (
    size: ModalEnum,
    component: JSX.Element | string
  ) => void
  public handleCloseModal: () => void
  constructor() {
    this.handleShowModal = null
    this.handleCloseModal = null
  }

  showModal(size: ModalEnum, component: JSX.Element | string) {
    return this.handleShowModal(size, component)
  }

  register({ showModal, closeModal }: IRegister) {
    this.handleShowModal = showModal
    this.handleCloseModal = closeModal
  }
}

export default new Store()
