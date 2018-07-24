import dropdownMenu from './Components/dropdown-menu.vue'
import dropdownMenuItem from './Components/dropdown-menu-item.vue'
import dropdownMenuSep from './Components/dropdown-menu-sep.vue'

const dropdownMenuPlugin = {
  install (Vue, options = {}) {
    Vue.component(dropdownMenu.name, dropdownMenu)
    Vue.component(dropdownMenuItem.name, dropdownMenuItem)
    Vue.component(dropdownMenuSep.name, dropdownMenuSep)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(dropdownMenuPlugin)
}

export default dropdownMenuPlugin
