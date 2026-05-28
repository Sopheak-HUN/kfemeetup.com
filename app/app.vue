<template>
  <div>
    <!-- HMR Live Socket Test -->
    <h1> {{ val }}</h1>
    <h1> {{ truncate('Hello World', 5) }}</h1>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">

import truncate from '#shared/utils/truncate';
import abbreviateNumber from '#shared/utils/abbreviate';
const val = abbreviateNumber(1500000);

</script>