<template>
  <div class="about">
    <h1 class="title-1">👋 Hi!</h1>

    <div class="description">
      <h3 class="title-3">👾 About this project:</h3>
      <cite class="description-quote">
        <p>
          This is a very basic project that uses Routes, Vuex and Vue to make a to-do list.
          It is as a practice and reference for the public who
          want to learn about these development environments as well.
        </p>
        <p>Feel free to modify what you want 😄</p>
      </cite>
    </div>

    <div>
      <h3 class="title-3">🤗 About me:</h3>
      <div class="container">
        <div class="picture">
          <img v-bind:src="picture" />
        </div>
        <div class="data">
          <div>
            <p class="title">{{ name }}</p>
            <p class="subtitle">{{ work.title }}</p>
            <p class="workfor">
              <span>I work for </span>
              <a v-bind:href="work.url" target="_blank">{{ work.company }}</a>
            </p>
          </div>

          <h4 class="title-4">Meet me at:</h4>
          <ul class="social">
            <li v-for="type in contactTypes" v-bind:key="type">
              <a v-bind:href="type.url" target="_blank">{{ type.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    name: String,
    picture: String,
    work: Object,
    contactTypes: Array,
  },
};
</script>

<style scoped>
  .about {
    padding: 7vh;
  }

  .about {
    padding: 7vh;
  }

  .description {
    margin: 4vh 0;
  }

  h3.title-3 {
    font-size: 18px;
  }

  cite.description-quote {
    font-style: normal;
    font-size: 14px;
    display: block;
    margin-top: 1vh;
  }

  .picture img {
    width: 82px;
    height: 82px;
    border-radius: 100%;
  }

  .container {
    margin-top: 2vh;
    display: flex;
    flex-direction: row;
  }

  .data {
    margin: 0px 3vh;
  }

  p.title {
    font-size: 16px;
    font-weight: bold;
  }

  p.subtitle {
    font-size: 14px;
    color: #6b6b6b;
  }

  p.workfor {
    font-size: 14px;
  }

  .workfor a {
    color: #248e56;
  }

  h4.title-4 {
    margin-top: 2vh;
    text-transform: uppercase;
    font-size: 11px;
  }

  ul.social {
    display: grid;
    grid-template-columns: repeat(2, minmax(0%, 100%));
  }

  ul.social a {
    font-size: 13px;
    font-weight: bold;
    text-decoration: none;
    color: #248e56;
  }

</style>
