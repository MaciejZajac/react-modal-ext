# react-modal-ext

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-modal-ext.svg)](https://www.npmjs.com/package/react-modal-ext) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-modal-ext
```

## Usage

```tsx
import React, { Component } from 'react'
import ModalContainer, { store, ModalEnum } from 'react-modal-ext'

class Example extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() =>
            store.showModal(
              ModalEnum.SMALL,
              <div>I'm a small modal! Style me!</div>
            )
          }
        >
          Show small modal
        </button>

        <ModalContainer />
      </div>
    )
  }
}
```

## License

MIT © [MaciejZajac](https://github.com/MaciejZajac)
