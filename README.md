# React `useFileDialog` hook
[![NPM](https://img.shields.io/npm/v/use-file-dialog.svg)](https://www.npmjs.com/package/use-file-dialog)


Open file dialog without struggling with file input using useFileDialog react hook.

## Install

You can install `use-file-dialog` with NPM or Yarn.

```bash
npm install use-file-dialog
```

```bash
yarn add use-file-dialog
```

## Usage

Here's how to use `use-file-dialog`:

```jsx
import useFileDialog from "use-file-dialog";

function App() {
  const { files, openFileDialog } = useFileDialog();

  console.log(files);

  return (
    <button type='button' onClick={openFileDialog}>Choose file</button>
  );
}
```
