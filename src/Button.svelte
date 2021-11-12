<svelte:options tag="matrix-signin-button" />

<button class="matrix-signin-button" on:click={signin.open}>
  <slot />
</button>

<style>
  .matrix-signin-button {
    margin: 0;
    border: 1px solid rgba(0,0,0,.1);
    background-color: white;
    padding: 10px 15px;
    border-radius: 6px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
  }

  .matrix-signin-button:active, .matrix-signin-button:focus {
    background-color: rgba(0,0,0,.05);
    border-color: transparent
  }
</style>

<script lang="ts">
  export let target = ''
  export let signin: HTMLElement = document.getElementById(target)
</script>
