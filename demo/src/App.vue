<template>
    <div id="app">
        <dropdown-menu>
            <dropdown-menu-item :default="true" title="Просмотр" class="show" @click="menuShow()"></dropdown-menu-item>
            <dropdown-menu-item title="Редактирование" class="edit" @click="menuEdit()"></dropdown-menu-item>
            <dropdown-menu-sep></dropdown-menu-sep>
            <dropdown-menu-item title="Удалить" class="del" @click="menuDelete()"></dropdown-menu-item>
        </dropdown-menu>
    </div>
</template>

<script>
    export default {
      name: 'app',
      components: {},
      data () {
        return {}
      },
      methods: {
        menuShow: function () {
          alert('show')
        },
        menuEdit: function () {
          alert('edit')
        },
        menuDelete: function () {
          alert('delete')
        }
      }
    }
</script>