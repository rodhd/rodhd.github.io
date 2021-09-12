<style lang="scss" scoped>
.section-heading {
  text-align: center;
  margin-top: 1em;
}
.profile-picture {
  border-radius: 50%;
}
@media screen and (max-width: 765px) {
  .profile-picture {
    max-width: 30%;
  }
}
</style>

<template>
  <Layout>
    <!-- Header -->
    <section class="hero is-primary is-halfheight is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="columns is-vcentered">
          <div class="column is-2">
            <g-image src="../assets/Profile_Pic.jpg" class="profile-picture" alt="Profile picture"/>
          </div>
          <div class="column">
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
        </div>
      </div>
    </section>
    <!-- About -->
    <section class="section" id="about">
      <div class="section-heading">
        <h3 class="title">{{$t('about')}}</h3>
        <h4 class="subtitle">{{$t('about_subtitle')}}</h4>
        <div class="container">
          <p v-html="$t('about_text')"/>
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
  metaInfo: {
    title: 'Home'
  }
})
export default class Index extends Vue {
  language = "en"
}
</script>