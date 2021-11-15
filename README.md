# Sign in with Matrix

https://user-images.githubusercontent.com/10400064/141484564-efcaa3b9-18cc-4ca5-9270-f4c4eda9073a.mov

[Over 35 million](https://techcrunch.com/2021/07/27/element-a-messaging-app-built-on-the-decentralized-matrix-protocol-raises-30m/) Matrix users can't wait to use your app. Use this pre-built component to make federated sign-in a no-effort zero-brainer

Before you do, please [try a demo](https://mishushakov.github.io/signin-with-matrix)

Like it? Click on "Sponsor", so i can keep making this stuff!

✨ Featured on [This Week in Matrix](https://matrix.org/blog/2021/11/12/this-week-in-matrix-2021-11-12)

## Cool stuff

- Based on svelte, vite and typescript
- Fully customisable and ready to use (even commercially)
- Extremely lightweight
- Framework-agnostic
- Superior User-Interface and User-Experience
- Secure, requires no backend to function
- Fully accessible, compliant with WCAG Accessibility Guidelines
- Compliant with Matrix 1.0 Protocol spec

## Install

### Browser

**ES Module**

```html
<script defer src="https://unpkg.com/signin-with-matrix@latest/dist/index.es.js"></script>
```

**UMD**

```html
<script defer src="https://unpkg.com/signin-with-matrix@latest/dist/index.umd.js"></script>
```

### NPM

```sh
npm i signin-with-matrix
```

Import into your application with

```js
import signIn from 'signin-with-matrix'
```

### Use

Add the two components to your HTML

```html
<matrix-signin id="signin"></matrix-signin>
<matrix-signin-button target="signin">
  Sign in with Matrix
</matrix-signin-button>
```

- `<matrix-signin>` is the modal window
- `<matrix-signin-button>` is a button which toggles the modal

## Spec

### `<matrix-signin>`

#### HTML attributes

- `displayName` (String), name that will be displayed in Matrix
- `title` (String), modal title
- `homeserver` (String), default home server

**Example**

```html
<matrix-signin
  displayName="My app"
  title="Use my app with Matrix"
  homeserver="matrix.org">
</matrix-signin>
```

#### Methods

- `open()`, opens the modal
- `close()`, closes the modal
- `cancel()`, cancels the modal (will send cancel event)
- `isSignedIn()`, checks if user is signed in
- `getUser()`, returns current user, returns Promise
- `signOut()`, sign out, returns Promise

#### Events

- `open`, when modal opens
- `cancel`, when modal is cancelled
- `success`, when login has succeeded (with user object)
- `error`, when error occurs (with error object)
- `signout`, when user signs out

**Example**

**Vanilla HTML + JS**

```html
<matrix-signin id="signin"></matrix-signin>
<script>
  const signIn = document.querySelector('matrix-signin')
  signIn.addEventListener('success', ({ detail }) => {
    console.log(detail.user)
  })
</script>
```

**Vue**

```vue
<template>
  <matrix-signin @success="notify"></matrix-signin>
</template>

<script>
export default {
  methods: {
    notify (user) {
      alert(JSON.stringify(user))
    }
  }
}
</script>
```

#### Styling

CSS variables available to style

```css
--matrix-signin-shim-background
--matrix-signin-shim-blur
--matrix-signin-dialog-background
--matrix-signin-dialog-border-color
--matrix-signin-dialog-shadow
--matrix-signin-dialog-text-color
--matrix-signin-dialog-icon-color
--matrix-signin-dialog-hover-color
--matrix-signin-dialog-error-color
--matrix-signin-dialog-button-background
--matrix-signin-dialog-button-color
```

### `<matrix-signin-button>`

#### HTML attributes

- `target` (String), id of the target `<matrix-signin>` component

**Example**

```html
<matrix-signin-button target="signin">
  Sign in with Matrix
</matrix-signin-button>
```

## Development

1. Clone the repository

```sh
git clone https://github.com/mishushakov/signin-with-matrix.git
```

2. Install dependencies

```sh
npm i
```

3. Start dev server

```sh
npm run dev
```

4. Build

```
npm run build
```

## Acknowledgements

- macOS Big Sur design
- [Icons by Feather](https://github.com/feathericons/feather)
- [focus-trap](https://github.com/focus-trap/focus-trap)
- [boringavatars](https://boringavatars.com)
