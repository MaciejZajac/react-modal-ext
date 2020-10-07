import React from 'react'

import ModalContainer, { ModalEnum, store } from 'react-modal-ext'

const App = () => {
  return (
    <div>
      <button
        onClick={() =>
          store.showModal(ModalEnum.SMALL, <div>I'm a small modal!</div>)
        }
      >
        Show small modal
      </button>
      <button
        onClick={() =>
          store.showModal(ModalEnum.MEDIUM, <div>I'm a medium modal!</div>)
        }
      >
        Show medium modal
      </button>
      <button
        onClick={() =>
          store.showModal(ModalEnum.LARGE, <div>I'm a large modal!</div>)
        }
      >
        Show large modal
      </button>

      <ModalContainer />
    </div>
  )
}

export default App
