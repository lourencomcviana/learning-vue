<template>
 <div class="q-pa-md row items-start q-gutter-md">
    <q-card  bordered class="" style="width:100%">
      <q-card-section>
        <div class="text-h6"> {{ descricaoCard }} </div>
      </q-card-section>

      <q-separator  inset />
        <q-card-section flex >
          <q-form
            @submit="val => { onSubmit(val);  }"
            @reset="onReset"
            class="q-gutter-md"
          >
            <q-input v-model="descricaoCard" label="título" />
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

            <q-input
              filled
              v-model="name"
              label="Your name *"
              hint="Name and surname"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor digite um nome']"
            />

            <q-input
              filled
              type="number"
              v-model="age"
              label="Your age *"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Por favor digite um age',
                val => val > 0 && val < 100 || 'Por favor digite uma idade real',
                val => val >18 || 'Tem que possuir mais do que 18 anos',
              ]"
            />

            <q-toggle v-model="accept" label="I accept the license and terms" />

            <div>
              <q-btn label="Submit" type="submit" color="primary"/>
              <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
         </q-form>
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
      descricaoCard: 'Altere o título no campo a baixo',
      options: [{ desc: 'MARIA', id: 1 }, { desc: 'JOAO', id: 2 }],
      selected: null,
      name: null,
      age: null,
      accept: false
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
        console.log(this)
      } else {
        console.log('apertou aqui mas nao tem target')
      }
    },
    onSubmit: function (event) {
      console.log(this)
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>
