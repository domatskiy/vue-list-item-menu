import Vue from 'vue'

import dropdownMenu from './../../../src/Components/dropdown-menu.vue'
// import dropdownMenuItem from './../../../src/Components/dropdown-menu-item.vue'
// import dropdownMenuSep from './../../../src/Components/dropdown-menu-sep.vue'

describe('dropdownMenu.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(dropdownMenu)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.dropdown-menu').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
