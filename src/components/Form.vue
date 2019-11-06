<template>
 <div class="q-pa-md row items-start q-gutter-md">
      <q-card  bordered class="">
      <q-card-section>
        <div class="text-h6">Our Changing ss</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator  inset />

      <q-card-section flex>
        {{ lorem }}

        <q-input v-model="lorem" label="título" />
        <q-select
          v-model="selected"
          @input="val => { onChange(val);  }"
          :options="options"
          option-label="desc"
          option-value="id"
          label="Standard"
        />
        <p>
          Elemento selecionado: {{ message }}
        </p>
      </q-card-section>
    </q-card>
</div>

</template>

<style>
</style>

<script>
export default {
  name: 'Form',
  props: {
    title: String,
    file: String,
    noEdit: Boolean,
    dark: Boolean,
    scrollable: Boolean,
    overflow: Boolean
  },
  data () {
    return {
      lorem: 'Altere o título no campo a baixo',
      component: null,
      options: [{ desc: 'MARIA', id: 1 }, { desc: 'JOAO', id: 2 }],
      selected: null,
      urrentTab: 'template',
      expanded: false,
      parts: {}
    }
  },
  computed: {
    // a computed getter
    message: function () {
      // `this` points to the vm instance
      return this.selected ? this.selected.desc : 'nada selecionado'
    }
  },
  methods: {
    onChange (event) {
      if (event) {
        console.log(event.desc)
      } else {
        console.log('apertou aqui mas nao tem target')
      }
    }
  }
}
</script>
