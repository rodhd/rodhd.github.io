<template>
  <div>
    <SocialLink icon="github" title="Github" href="https://github.com/rodhd/"/>
    <SocialLink icon="linkedin" title="LinkedIn" href="https://www.linkedin.com/in/herrerarodrigo1992/"/>
    <SocialLink icon="xing" title="Xing" href="https://www.xing.com/profile/Rodrigo_HerreraDiaz"/>
  </div>
</template>
<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import SocialLink from "@/components/SocialLink.vue";

@Component({
  components: {SocialLink}
})
export default class SocialLinks extends Vue {
  
}
</script>