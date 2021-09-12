<template>
  <span :class="className" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
const overrides: Record<string, string> = {
  en: 'gb',
  ja: 'jp',
  zh: 'cn',
  ko: 'kr'
};
@Component
export default class FlagIcon extends Vue {
  @Prop({ type: String, required: true })
  readonly code!: string;
  @Prop(Boolean)
  readonly squared!: boolean;
  get normalizedCode(): string {
    const code = this.code?.toLowerCase();
    if (!code) {
      return '';
    }
    const dashIndex = code.indexOf('-');
    if (dashIndex > -1) {
      return code.substr(dashIndex + 1);
    }
    return overrides[code] ?? code;
  }
  get className(): string[] {
    const className: string[] = [
      'flag-icon',
      `flag-icon-${this.normalizedCode}`
    ];
    if (this.squared) {
      className.push('flag-icon-squared');
    }
    return className;
  }
}
</script>