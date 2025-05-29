<template>
  <div>
    <h1>Test Mozaic Styles</h1>
    <p>Ce projet est un test pour Mozaic Styles.</p>
    <MButton label="Default button" />
  </div>
</template>

<script>
import { MButton } from '@mozaic-ds/vue-3';
// import { MButton } from '@mozaic-ds/vue-3/src/components/button';


export default {
  name: 'App',
  components: {
    MButton
  }
};
</script>
