<script>
  import Vue from 'vue'

  let menuBus = new Vue({
    created: function () {
      let body = document.querySelector('body')
      body.addEventListener('click', () => {
        this.$emit('close-menu')
      })
    }
  })

  export default {
    name: 'dropdown-menu',
    data: function () {
      return {
        rendering: false,
        items: [],
        showMenu: false
      }
    },
    props: {
      id: {
        required: true
      }
    },
    created: function () {
      this.getFields()
      menuBus.$on('close-menu', () => {
        this.showMenu = false
      })
    },
    mounted: function () {
      this.$watch(function () { return this.$slots.default }, () => {
        console.log('menu this.$slots.default updated ')
      })
    },
    methods: {
      openMenu: function ($event) {
        $event.stopPropagation()
        menuBus.$emit('close-menu')
        this.showMenu = true
      },
      getFields: function () {
        let menuItems = []
        this.$slots.default.forEach(($child) => {
          if (!$child.componentOptions || ($child.componentOptions.tag !== 'dropdown-menu-item' && $child.componentOptions.tag !== 'dropdown-menu-sep')) {
            return
          }
          const props = $child.componentOptions.propsData // $child.componentOptions &&
          props.itemClass = typeof $child.data.staticClass === 'string' ? $child.data.staticClass : ''
          menuItems.push($child)
        })
        this.items = menuItems
      }
    },
    render (h) {
      let menu = []

      if (this.showMenu === true) {
        this.items.forEach((item) => {
          menu.push(item)
        })
      }

      let c = [h('span')]
      if (menu.length > 0) {
        c.push(h(
          'ul',
          {
            class: '',
            attrs: {},
            on: {
              click: (event) => {
                event.stopPropagation()
                menuBus.$emit('close-menu')
              }
            }
          }, menu
        ))
      }

      this.rendering = true

      return h(
        'div',
        {
          id: this.id,
          class: 'dropdown-menu',
          on: {
            click: this.openMenu
          }
        }, c
      )
    },
    watch: {
      id: function () {
        this.getFields()
      }
    }
  }
</script>

<style lang="less" scoped>
  .dropdown-menu{

    border: 0;
    width: 16px; height: 16px;
    position: relative;
    cursor: pointer;

    span {

        display: inline-block;
        width: 100%; height: 2px;
        background-color: #717171;
        border-radius: 2px;
        position: absolute;
        left: 0;
        top: calc(~'50% - 1px');
        z-index: 10;

        &:before, &:after{
            content: '';
            width: 100%;
            height: 2px;
            background-color: #717171;
            border-radius: 2px;
            position: absolute;
            left: 0;
        }

        &:before {
            top: -4px;
        }

        &:after{
            bottom: -4px;
        }
    }

    ul{
      display: inline-block;
      position: absolute;
      list-style: none;
      margin: 0;
      top: 0; left: 0;
      padding: 3px 0;
      border: 1px solid #cccccc;
      background-color: white;
      box-shadow: 1px 2px 3px rgba(0,0,0,0.3);
      z-index: 50;


    }
  }
</style>
