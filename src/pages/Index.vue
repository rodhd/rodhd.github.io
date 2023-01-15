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
                Product Manager @
                <a href="https://www.workwise.io/"><strong class="has-text-danger">workwise</strong></a>
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
                :title="$t('management')"
                :icon="['fa', 'briefcase']"
                :content="['Agile', 'Kanban', 'Scrum', 'Product Management', 'Hypothesis Driven Development', 'Design Thinking']"/>
          </div>
          <div class="column is-12-mobile is-3">
            <SkillCard
                :title="$t('data-analysis')"
                :icon="['fa', 'table']"
                :content="['Bigquery', 'Python', 'SQL', 'MS Excel/Google Sheets', 'Superset', 'Tableau']"/>
          </div>
          <div class="column is-12-mobile is-3">
            <SkillCard
              :title="$t('software-development')"
              :icon="['fa', 'code']"
              :content="['.NET/C#', 'Vue.js', 'Typescript', 'Python', 'MongoDB', 'Rider / Webstorm / Pycharm', 'VSCode', 'Git']"/>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-12-mobile is-3">
            <SkillCard
                title="Cloud"
                :icon="['fa', 'cloud']"
                :content="['GCP', 'Docker', 'Cloud Run', 'Kubernetes', 'Serverless']"/>
          </div>
          <div class="column is-12-mobile is-3">
            <SkillCard
                title="Software"
                :icon="['fa', 'list-alt']"
                :content="['MS Office', 'G-Suite', 'Jira', 'Confluence', 'Figma', 'Adobe XD']"/>
          </div>
          <div class="column is-12-mobile is-3">
            <SkillCard
                :title="$t('languages')"
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