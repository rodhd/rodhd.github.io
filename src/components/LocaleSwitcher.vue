<style scoped>
.locale-desc {
  align-items: center;
  display: flex;
}
</style>

<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link locale-desc">
      <CountryFlag :country="flags[currentLocale].key"/><strong>{{ flags[currentLocale].label }}</strong>
    </a>
    <div class="navbar-dropdown">
      <a v-for="locale in availableLocales" class="navbar-item locale-desc" :key="locale" @click="onSelect(locale)">
        <CountryFlag :country="flags[locale].key"/>
        <span>{{ flags[locale].label }}</span>
      </a>
    </div>
  </div>
  <!--
  <div class="select">
    <select v-model="currentLocale" @change="localeChanged">
      <option v-for="locale in availableLocales" :key="locale" :value="locale">
        <FlagIcon :code="flags[locale].key"/>
        {{flags[locale].label}}
      </option>
    </select>
  </div>
  -->
</template>

<script lang="ts">
//@ts-nocheck
import CountryFlag from 'vue-country-flag'
import {Component, Vue, Watch} from "vue-property-decorator";

@Component({
  components: {
    CountryFlag
  }
})
export default class LocaleSwitcher extends Vue {
  currentLocale = this.$i18n.locale.toString();
  availableLocales = this.$i18n.availableLocales;
  flags = {
    ["en-gb"]: {
      "label": "EN",
      "key": "gb"
    },
    ["de-de"]: {
      "label": "DE",
      "key": "de"
    }
  };
  
  @Watch('currentLocale')
  localeChanged() {
    this.$router.push({
      path: this.$tp(this.$route.path, this.currentLocale, true)
    })
  }
  
  onSelect(value: string) {
    this.currentLocale = value;
  }
    
}
</script>