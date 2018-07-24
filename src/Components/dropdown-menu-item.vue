<template>
    <li :class="this.default === true ? 'default' : ''" @click="menuClick">{{this.title}}</li>
</template>
<script>
  export default {
    name: 'dropdown-menu-item',
    props: {
      title: {
        type: String,
        required: true,
        default: ''
      },
      default: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    methods: {
      menuClick: function () {
        this.$emit('click')
      }
    }
  }
</script>
<style lang="less" scoped>
    li {

        display: inline-block;
        width: 100%;
        padding: 3px 7px;
        box-sizing: border-box;

        &.default{
            background-color: #eeeeee;
        }

        &:hover{
            background-color: #2b81af;
            color: white;
            cursor: pointer;
        }

    }
</style>