<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-icon">
        <font-awesome-icon :icon="icon"/>
      </div>
      <div class="card-header-title is-size-4">
        {{title}}
      </div>
    </div>
    <div class="card-content">
      <div class="content has-text-left is-size-5">
        <ul>
          <li v-for="c in content" :key="c.toLowerCase().replace(' ','_')">
            {{ c }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {Component, Prop, Vue} from "vue-property-decorator";

@Component({})
export default class SkillCard extends Vue {
  @Prop({type: String, required: true})
  title!: string;
  
  @Prop({type: Array, required: true})
  content!: string[];
  
  @Prop({type: Array, required: true})
  icon!: string[];
}
</script>