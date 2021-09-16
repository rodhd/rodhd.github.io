<template>
  <div class="box">
    <h3 class="title is-4">{{title}}</h3>
    <h4 class="title is-5">
      <font-awesome-icon :icon="['fa', 'building']"/>
      <a class="pl-2 has-text-black" :href="href">{{ institution }}</a>
    </h4>
    <p class="pb-3">
      {{description}}
    </p>
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <font-awesome-icon :icon="['fa', 'map-marker']"/>
          <span class="pl-2 has-text-grey">{{location}}</span>
        </div>
        <div class="level-item pl-3">
          <font-awesome-icon :icon="['fa', 'calendar']"/>
          <span class="pl-2 has-text-grey">{{period}}</span>
        </div>
      </div>
    </div>
    <div class="level">
      <div class="level-left">
        <div v-for="tag in tags" :key="tag" class="level-item">
          <span class="tag is-info">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Mixins, Prop, Vue} from "vue-property-decorator";
import CvItemMixin from "@/components/CvItemMixin";

@Component
export default class CvExperienceItem extends Mixins(CvItemMixin){
  @Prop(String)
  href!: string;
}
</script>