<v-btn
  outline
  info
  dark
  v-if="content.buttons"
  v-for="button in content.buttons"
  :key="button.label"
  :to="button.link"
  :href="button.href"
>
  {{ button.label }}
  <v-icon right class="info--text">{{ button.icon || 'link' }}</v-icon>
</v-btn>
