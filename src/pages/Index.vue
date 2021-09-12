<style lang="scss" scoped>
.section-heading {
  text-align: center;
  margin-top: 0.5em;
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
    <!-- Links -->
    <section class="section" id="links" :style="{'text-align': 'center'}">
      <SocialLinks/>
    </section>
    <!-- Skills -->
    <section class="section" id="skills">
      <div class="section-heading">
        <h3 class="title">Skills</h3>
        <div class="columns is-centered">
          <div class="column is-12-mobile is-3">
            <SkillCard
                title="Data Science"
                :icon="['fa', 'table']"
                :content="['Bigquery', 'Python', 'SQL', 'Superset', 'Airflow']"/>
          </div>
          <div class="column is-12-mobile is-3">
            <SkillCard
                title="Backend"
                :icon="['fa', 'code']"
                :content="['.NET/C#', 'MongoDB', 'Elasticsearch']"/>
          </div>
          <div class="column is-12-mobile is-3">
            <SkillCard
              title="Frontend"
              :icon="['fa', 'desktop']"
              :content="['Vue.js', 'Typescript', 'Bulma', 'Figma']"/>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-12-mobile is-3">
            <SkillCard
                title="Cloud"
                :icon="['fa', 'cloud']"
                :content="['GCP', 'Docker', 'Serverless']"/>
          </div>
          <div class="column is-12-mobile is-3">
            <SkillCard
                title="Software"
                :icon="['fa', 'list-alt']"
                :content="['Excel', 'G-Suite', 'Jira', 'Confluence']"/>
          </div>
          <div class="column is-12-mobile is-3">
            <SkillCard
                title="Languages"
                :icon="['fa', 'globe']"
                :content="[$t('english'), $t('german'), $t('spanish')]"/>
          </div>
        </div>
      </div>
      
    </section>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SkillCard from "@/components/SkillCard.vue";
import SocialLinks from "@/components/SocialLinks.vue";
@Component({
  components: {SocialLinks, SkillCard},
  metaInfo: {
    title: 'Home'
  }
})
export default class Index extends Vue {
  language = "en"
}
</script>