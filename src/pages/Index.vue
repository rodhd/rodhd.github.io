<style lang="scss" scoped>
.section-heading {
  text-align: center;
  margin-top: 1em;
}
</style>

<template>
  <Layout>
    <!-- Header -->
    <section class="hero is-primary is-halfheight is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          Hello I'm
          <h1 class="title is-1">
            Rodrigo Herrera Diaz
          </h1>
          <h2 class="subtitle is-3">
            Technical Program Manager @ 
            <a href="https://www.omio.com/"><strong class="has-text-danger">omio</strong></a>
          </h2>
        </div>
      </div>
    </section>
    <!-- About -->
    <section class="section" id="about">
      <div class="section-heading">
        <h3 class="title">{{$page.about[language]}}</h3>
        <h4 class="subtitle">Product guy, Data Wizard, self-taught Developer</h4>
        <div class="container">
          <p>
            I am industrial engineer working in software development with over <strong>3 years</strong> of experience. 
           My passion is combining design, data and technology to develop amazing products and experiences for users.
          </p>
        </div>
      </div>
    </section>
    <!-- Skills -->
    <section class="section" id="skills">
      <div class="section-heading">
        <h3 class="title">Skills</h3>
      </div>
      
    </section>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
})
export default class Index extends Vue {
  language = "en"
}
</script>

<page-query>
  query {
    about: translations(id:"about"){
      en
      de
    }
  }
</page-query>