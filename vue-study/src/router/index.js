import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheckbox from '../views/DataBindingCheckbox.vue'
import DataBindingCheckbox2 from '../views/DataBindingCheckbox2.vue'
import DataBindingRadio from '../views/DataBindingRadio.vue'
import DataBindingAttribue from '../views/DataBindingAttribue.vue'
import DataBindingButton from '../views/DataBindingButton.vue'
import DataBindingClass from '../views/DataBindingClass.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: DataBinding
  },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: DataBindingHtml
  },
  {
    path: "/databindinginputtext",
    name: "DataBindingInputText",
    component: DataBindingInputText
  },
  {
    path: "/databindingselect",
    name: "DataBindingSelect",
    component: DataBindingSelect
  },
  {
    path: "/databindingcheckbox",
    name: "DataBindingCheckbox",
    component: DataBindingCheckbox
  },
  {
    path: "/databindingcheckbox2",
    name: "DataBindingCheckbox2",
    component: DataBindingCheckbox2
  },
  {
    path: "/databindingradio",
    name: "DataBindingRadio",
    component: DataBindingRadio
  },
  {
    path: "/databindingattribue",
    name: "DataBindingAttribue",
    component: DataBindingAttribue
  },
  {
    path: "/databindingbutton",
    name: "DataBindingButton",
    component: DataBindingButton
  },
  {
    path: "/databindingclass",
    name: "DataBindingClass",
    component: DataBindingClass
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
