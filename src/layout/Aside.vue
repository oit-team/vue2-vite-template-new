<script setup>
import { collapse, toggleCollapse } from './control'
</script>

<template>
  <ElAside width="auto">
    <ElMenu class="h-full flex flex-col" default-active="2" :collapse="collapse">
      <ElSubmenu index="1">
        <template slot="title">
          <i class="el-icon-location" />
          <span>导航一</span>
        </template>
        <ElMenuItemGroup>
          <template slot="title">
            分组一
          </template>
          <ElMenuItem index="1-1">
            选项1
          </ElMenuItem>
          <ElMenuItem index="1-2">
            选项2
          </ElMenuItem>
        </ElMenuItemGroup>
        <ElMenuItemGroup title="分组2">
          <ElMenuItem index="1-3">
            选项3
          </ElMenuItem>
        </ElMenuItemGroup>
        <ElSubmenu index="1-4">
          <template slot="title">
            选项4
          </template>
          <ElMenuItem index="1-4-1">
            选项1
          </ElMenuItem>
        </ElSubmenu>
      </ElSubmenu>
      <ElMenuItem index="2">
        <i class="el-icon-menu" />
        <span slot="title">导航二</span>
      </ElMenuItem>
      <ElMenuItem index="3">
        <i class="el-icon-document" />
        <span slot="title">导航三</span>
      </ElMenuItem>
      <ElMenuItem index="4">
        <i class="el-icon-setting" />
        <span slot="title">导航四</span>
      </ElMenuItem>
      <div class="absolute bottom-2 w-full text-center">
        <i
          class="text-2xl text-gray-500 cursor-pointer"
          :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          @click="toggleCollapse()"
        />
      </div>
    </ElMenu>
  </ElAside>
</template>

<style lang="scss" scoped>
.el-menu {
  &:not(.el-menu--collapse) {
    width: 240px;
  }
}
</style>
