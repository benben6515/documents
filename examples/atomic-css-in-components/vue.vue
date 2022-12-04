<script setup lang="ts">
import { globalSectionStyle } from '@/styles/global'
// 'p-2 border flex'

const localTitleStyle = 'text-red-400 p-2'

</script>

<template>
  <div>
    <section :class="globalSectionStyle" class="bg-red-400 flex-col">
      <h3 :class="localTitleStyle">Section 1</h3>
    </section>

    <section :class="globalSectionStyle" class="bg-red-400">
      <h3 :class="localTitleStyle" class="bg-blue-300">Section 2</h3>
    </section>
  </div>
</template>
