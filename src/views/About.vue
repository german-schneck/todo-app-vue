<template>
  <div>
    <Profile
      name="Germán D. Schneck"
      v-bind:work="{
        title: 'Full-Stack JavaScript Engineer',
        company: 'Soamee',
        url: 'http://soamee.com/',
      }"
      v-bind:contact-types="[{
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/german-schneck/',
      }, {
        name: 'GitHub',
        url: 'https://github.com/gebo96',
      }]"
      picture="https://avatars0.githubusercontent.com/u/15254932?s=460&v=4"
    />
  </div>
</template>

<script>
import Profile from '../components/Profile.vue';

export default {
  components: {
    Profile,
  },
};
</script>
