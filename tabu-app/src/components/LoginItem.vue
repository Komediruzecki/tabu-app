<script setup lang="ts">
import IconTabu from '@/components/icons/IconTabu.vue'
import { ref } from 'vue'

let googleClientId = ref(
  '881939165116-d8tp8es5j5v6trie65vh5feaa8op9erg.apps.googleusercontent.com',
)
</script>

<template>
  <div>Login to Tabu</div>
  <div
    id="g_id_onload"
    data-client_id="{{googleClientId}}"
    data-context="signin"
    data-ux_mode="popup"
    data-callback="googleLoginCallback"
    data-auto_prompt="false"
  ></div>

  <div
    class="g_id_signin"
    data-type="standard"
    data-shape="pill"
    data-theme="outline"
    data-text="continue_with"
    data-size="large"
    data-locale="en-GB"
    data-logo_alignment="center"
    data-width="400"
  ></div>
  <icon-tabu />
</template>
