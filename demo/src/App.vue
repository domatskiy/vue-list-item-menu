<template>
    <div id="app">
        <dropdown-menu>
            <dropdown-menu-item :default="true" title="Просмотр" class="show" @click="menuShow(row)"></dropdown-menu-item>
            <dropdown-menu-item title="Редактирование" class="edit" @click="menuEdit(row)"></dropdown-menu-item>
            <dropdown-menu-sep></dropdown-menu-sep>
            <dropdown-menu-item title="Удалить" class="del" @click="menuDelete(row)"></dropdown-menu-item>
        </dropdown-menu>
      <br>
      <br>
      <br>
      <br>
      <button @click="nextRow">change row</button>
    </div>
</template>

<script>
    export default {
      name: 'app',
      components: {},
      data () {
        return {
          row: {
            id: 12,
            name: 'row12'
          }
        }
      },
      methods: {
        menuShow: function (row) {
          console.log('show', row)
          alert('show')
        },
        menuEdit: function (row) {
          console.log('edit', row)
          alert('edit')
        },
        menuDelete: function (row) {
          console.log('delete', row)
          alert('delete')
        },
        nextRow: function () {
          this.row = {
            id: 14,
            name: 'row14'
          }
          console.log('nextRow', this.row)
        }
      }
    }
</script>
