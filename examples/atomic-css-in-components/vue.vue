<script setup lang="ts">
// import global utils css string
import { globalSectionStyle } from '@/styles/global'

// utils css string
const localTitleStyle = 'text-red-400 p-2'

</script>

<template>
  <div>
    <!-- global css with some class names -->
    <section :class="globalSectionStyle" class="bg-red-400 flex-col">
      <!-- local css -->
      <h3 :class="localTitleStyle">Section 1</h3>
    </section>

    <!-- global css with some class names -->
    <section :class="globalSectionStyle" class="bg-red-400">
      <!-- local css with some class names -->
      <h3 :class="localTitleStyle" class="bg-blue-300">Section 2</h3>
    </section>
  </div>
</template>
