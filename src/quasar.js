import Vue from 'vue'

import './styles/quasar.styl'
import lang from 'quasar/lang/pt-br.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
  Quasar,
  QCard,
  QCardSection,
  QCardActions,
  QSelect,
  QInput,
  QSeparator,
  QForm,
  QToggle,
  Notify,

  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel
} from 'quasar'

Vue.use(Quasar, {
  components: {
    QCard,
    QCardSection,
    QCardActions,
    QSelect,
    QInput,
    QSeparator,
    QForm,
    QToggle,

    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel
  },
  directives: {
  },
  plugins: {
    Notify
  },
  config: {
    notify: { /* Notify defaults */ }
  },
  lang: lang
})
