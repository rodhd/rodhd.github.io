<template>
  <Layout>
    <div class="container pl-4 pt-4">
      <h1 class="title is-2">{{ $t('cv_title') }}</h1>
      <section class="section" id="experience">
        <h2 class="title is-3">💼 {{$t('cv_experience')}}</h2>
        <CvExperienceItem
          title="Product Manager"
          institution="Workwise GmbH"
          location="Karlsruhe, DE"
          :period="$t('workwise_period')"
          :description="$t('workwise_description')"
          :tags="['Product Management', 'Agile', 'Continuous Discovery']"
          href="https://www.omio.com/"
        />
        <CvExperienceItem
          title="Technical Program Manager"
          institution="Omio Travel GmbH"
          location="Berlin, DE"
          :period="$t('omio_period')"
          :description="$t('omio_description')"
          :tags="['Product Owner', 'Agile', '.NET/C#', 'Vue.js']"
          href="https://www.omio.com/"
        />
        <CvExperienceItem
            title="Technical Program Manager"
            institution="Green Parrot GmbH"
            location="Karlsruhe, DE"
            :period="$t('bls_1_period')"
            :description="$t('bls_1_description')"
            :tags="['Product Management', 'Bigquery', 'Superset', '.NET/C#' ]"
            :href="$t('bls_link')"
        />
        <CvExperienceItem
            :title="$t('bls_2_title')"
            institution="Green Parrot GmbH"
            location="Karlsruhe, DE"
            :period="$t('bls_2_period')"
            :description="$t('bls_2_description')"
            :tags="['Data Analysis', 'Google Analytics', 'Excel' ]"
            :href="$t('bls_link')"
        />
        <CvExperienceItem
            :title="$t('hiwi_title')"
            :institution="$t('hiwi_institution')"
            location="Karlsruhe, DE"
            :period="$t('hiwi_period')"
            :description="$t('hiwi_description')"
            :tags="['Excel', 'Visual Basic']"
            :href="$t('hiwi_link')"
        />
      </section>
      <section class="section" id="education">
        <h2 class="title is-3">📖 {{$t('cv_education')}}</h2>
        <CvExperienceItem
            :title="$t('kit_title')"
            :institution="$t('kit_institution')"
            location="Karlsruhe, DE"
            :period="$t('kit_period')"
            :description="$t('kit_description')"
            href="https://www.kit.edu/"
            />
        <CvExperienceItem
            :title="$t('usb_title')"
            :institution="$t('usb_institution')"
            location="Caracas, VE"
            :period="$t('usb_period')"
            href="http://www.usb.ve/"
        />
        <CvExperienceItem
            :title="$t('la_title')"
            :institution="$t('la_institution')"
            location="Caracas, VE"
            :period="$t('la_period')"
            href="https://www.losarcos.edu.ve/"
        />
      </section>
    </div>
  </Layout>
</template>

<script lang="ts">
//@ts-nocheck
import {Component, Vue} from "vue-property-decorator";
import CvExperienceItem from "@/components/CvExperienceItem.vue";
@Component({
  components: {CvExperienceItem},
  metaInfo: {
    title: 'CV'
  }
})
export default class Cv extends Vue {
  
}
</script>