<svelte:options tag="matrix-signin" />

{#if modal_visible}
  <div class="matrix-signin-shim" on:click|self={cancel}>
    <div
      class="matrix-signin-modal"
      tabindex="0"
      role="dialog"
      aria-labelledby="modal_label"
      aria-modal="true"
      transition:fly={{y: 10}}
      use:trapFocus
      on:keydown={escape}
    >
      <div class="matrix-signin-modal-header">
        <button class="matrix-signin-modal-cancel-button" aria-label="Cancel" title="Cancel" on:click={cancel}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <span class="matrix-signin-modal-title" id="modal_label">{title}</span>
      </div>

      <div class="matrix-signin-modal-content">
        <form class="matrix-signin-modal-form" on:submit|preventDefault={signIn}>
          <label for="homeserver">Homeserver</label>
          <input id="homeserver" aria-required="true" type="text" bind:value={homeserver} required />

          <label for="user">Username</label>
          <input id="user" name="username" type="text" bind:value={username} required autocomplete="username" spellcheck="false" autocapitalize="off" />

          <label for="password">Password</label>
          <input id="password" name="password" type="password" bind:value={password} required autocomplete="current-password" />
          <input type="submit" value="Sign in">
        </form>
      </div>

      {#if error}
        <div class="matrix-signin-modal-end matrix-signin-modal-error">
          <div class="matrix-signin-modal-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <span class="matrix-signin-modal-end-label" role="alert">{error}</span>
        </div>
      {/if}

      {#if signedInUser}
        <div class="matrix-signin-modal-end">
          <img
            aria-hidden="true"
            alt="{signedInUser.displayname || signedInUser.user_id} avatar"
            class="matrix-signin-modal-avatar"
            src={signedInUser.avatar_content}
          />
          <span class="matrix-signin-modal-end-label" role="alert">Signed in as {signedInUser.displayname || signedInUser.user_id}</span>
        </div>
      {/if}

      {#if loading}
        <div class="matrix-signin-modal-end">
          <div class="matrix-signin-modal-icon matrix-signin-modal-spinner"></div>
          <span class="matrix-signin-modal-end-label" role="alert">Signing in</span>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .matrix-signin-shim {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.1);
    -webkit-backdrop-filter: blur(4px);
    width: 100%;
    height: 100%;
    display: flex;
  }

  .matrix-signin-modal {
    outline: none;
    border: .5px solid rgba(0,0,0,.2);
    margin: auto;
    flex: 1;
    max-width: 500px;
    background: white;
    box-shadow: 0 0 16px rgba(0,0,0, .1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .matrix-signin-modal-cancel-button {
    border: 1px solid rgba(0,0,0,.1);
    background-color: white;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 2px;
    margin: 0;
    margin-right: 12px
  }

  .matrix-signin-modal-cancel-button:hover, .matrix-signin-modal-cancel-button:focus {
    background-color: rgba(0,0,0,.05);
    border-color: transparent;
  }

  .matrix-signin-modal-header {
    padding: 16px 32px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
  }

  .matrix-signin-modal-title {
    font-size: 20px;
    font-weight: 500;
    display: inline-flex
  }

  .matrix-signin-modal-content {
    padding: 32px;
  }

  .matrix-signin-modal-end {
    margin-top: auto;
    border-top: 1px solid rgba(0,0,0,.1);
    padding: 22px 32px;
    display: flex;
    align-items: center;
  }

  .matrix-signin-modal-icon {
    margin-right: 12px;
    display: flex;
  }

  .matrix-signin-modal-avatar {
    margin-right: 12px;
    border-radius: 50%;
    display: flex;
    height: 22px;
    width: 22px;
  }

  .matrix-signin-modal-end-label {
    font-weight: 500
  }

  .matrix-signin-modal-spinner {
    display: inline-block;
    border: 2px solid transparent;
    border-left-color: black;
    border-radius: 50%;
    animation: loading 1.2s cubic-bezier(0.73, 0.32, 0.67, 0.86) infinite;
    width: 18px;
    height: 18px;
  }

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }

  .matrix-signin-modal-form {
    display: flex;
    flex-direction: column;
  }

  .matrix-signin-modal-form input:not(:last-child) {
    margin-bottom: 12px
  }

  .matrix-signin-modal-form input[type="text"],
  .matrix-signin-modal-form input[type="password"] {
    font-size: 16px;
    border: 1px solid rgba(0,0,0,.1);
    background: rgba(0,0,0,.03);
    border-radius: 8px;
    padding: 15px 10px;
  }

  .matrix-signin-modal-form input:focus {
    background: transparent;
  }

  .matrix-signin-modal-form input[type="submit"] {
    background-color: black;
    color: white;
    font-weight: 500;
    padding: 10px;
    border: 0;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer
  }

  .matrix-signin-modal-form input[type="submit"]:active {
    color: rgba(255, 255, 255, .5)
  }

  .matrix-signin-modal-form label {
    font-size: 14px;
    margin-bottom: 4px;
    color: rgba(0,0,0,.5);
  }

  .matrix-signin-modal-error {
    color: rgb(255, 59, 48)
  }

  @media screen and (max-width: 720px) {
    .matrix-signin-modal {
      height: 100%;
      border-radius: 0%;
      border: 0;
      box-shadow: none;
    }
  }
</style>

<script lang="ts">
  import { fly } from 'svelte/transition'
  import { get_current_component } from 'svelte/internal'
  import * as focusTrap from 'focus-trap'

  let modal_visible = false
  export let displayName = 'Sign in with Matrix'
  export let title = 'Continue using Matrix'
  export let homeserver = 'matrix.org'

  let baseUrl
  let username = ''
  let password = ''
  let error = null
  let loading = false
  let signedInUser = null
  let focustrap

  const component = get_current_component()
  const dispatch = (name, detail) => {
    component?.dispatchEvent(new CustomEvent(name, { detail }))
  }

  const trapFocus = (e) => {
    focustrap = focusTrap.createFocusTrap(e, {
      allowOutsideClick: true,
      preventScroll: true,
      initialFocus: e.querySelector('input[id=homeserver]')
    })

    focustrap.activate()
  }

  export const open = () => {
    modal_visible = true
    dispatch('open', {})
  }

  export const close = () => {
    focustrap.deactivate()
    modal_visible = false
    username = ''
    password = ''
  }

  export const cancel = () => {
    close()
    dispatch('cancel', {})
  }

  const escape = (e) => {
    if (e.code === 'Escape') {
      cancel()
    }
  }

  const signIn = () => {
    error = null
    signedInUser = null
    loading = true

    fetch(`https://${homeserver}/.well-known/matrix/client`)
    .then(res => res.json())
    .then((data) => {
      baseUrl = data['m.homeserver'].base_url
      fetch(`${baseUrl}/_matrix/client/r0/login`, {
        method: 'POST',
        body: JSON.stringify({
          type: 'm.login.password',
          identifier: {
            type: 'm.id.user',
            user: username
          },
          device_id: window.location.hostname,
          initial_device_display_name: displayName,
          password
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          loading = false
          error = data.error
          return dispatch('error', data.error)
        }

        fetch(`${baseUrl}/_matrix/client/r0/profile/${data.user_id}`)
        .then(res => res.json())
        .then(profile => {
          const user = {
            ...data,
            ...profile,
            avatar_content: profile.avatar_url
              ? `${baseUrl}/_matrix/media/r0/thumbnail/${profile.avatar_url.split('mxc://')[1]}?height=20&width=20&method=crop`
              : `https://source.boringavatars.com/marble/22/${data.user_id}?colors=0DBD8B,368bd6,ac3ba8`
          }

          loading = false
          signedInUser = user

          dispatch('success', {user})
          setTimeout(close, 500)
        })
      })
      .catch(e => {
        loading = false
        error = e.message
        dispatch('error', e.message)
      })
    })
    .catch(e => {
      loading = false
      error = e.message
      dispatch('error', e.message)
    })
  }

  export const signOut = () => {
    return new Promise((resolve, reject) => {
      if (!signedInUser) {
        reject('User not signed in')
        return
      }

      fetch(`${baseUrl}/_matrix/client/r0/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${signedInUser.access_token}`
        }
      })
      .then(() => {
        signedInUser = null
        dispatch('signout', {})
        resolve({})
      })
      .catch(e => reject(e))
    })
  }

  export const isSignedIn = () => {
    return signedInUser !== null
  }

  export const getUser = () => {
    return new Promise((resolve, reject) => {
      if (!signedInUser) {
        reject('User not signed in')
        return
      }

      resolve(signedInUser)
    })
  }
</script>
