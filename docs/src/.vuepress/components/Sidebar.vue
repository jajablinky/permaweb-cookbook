<script setup>
import ToggleColorModeButton from '@theme/ToggleColorModeButton.vue';
import SidebarItems from '@theme/SidebarItems.vue';
</script>

<script>
export default {
  emits: ['close-sidebar']
};
</script>

<template>
  <aside class="cookbook-sidebar">
    <SidebarItems />

    <ToggleColorModeButton
      class="d-block d-md-none"
      style="margin: 16px 0 0 auto; font-size: 0"
    />
  </aside>
  <div @click="$emit('close-sidebar')" class="cookbook-sidebar-overlay"></div>
</template>

<style lang="scss">
@import '../styles/bootstrap.scss';

.cookbook-theme-container.sidebar-open {
  @include media-breakpoint-down(md) {
    .cookbook-sidebar-overlay {
      opacity: 1;
      pointer-events: auto;
    }

    .cookbook-sidebar {
      transform: translateX(0);
    }
  }
}

.cookbook-sidebar-overlay {
  z-index: 9;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.8);

  opacity: 0;
  pointer-events: none;

  transition: opacity 0.3s;
}

.cookbook-sidebar {
  position: sticky;
  top: 30px;

  @include media-breakpoint-down(md) {
    z-index: 10;
    overflow-y: auto;

    position: fixed;
    left: 0;
    top: var(--navbar-height);
    bottom: 0;

    padding: 24px;
    background: var(--c-bg);

    transition: transform 0.3s;
    transform: translateX(-100%);
  }

  .sidebar-items {
    text-align: left;

    .sidebar-item-children {
      .sidebar-item:not(.active) {
        opacity: 0.68;
      }
    }

    .sidebar-item {
      border: none;
    }

    .sidebar-item:not(.sidebar-heading) {
      padding: 0.35rem 0 0.35rem 1rem !important;
    }

    .sidebar-item.sidebar-heading {
      padding: 0.5rem 0;
      display: block;
    }

    .sidebar-item.active:not(p.sidebar-heading) {
      border: none;
    }
  }

  ul {
    padding: 0;
    list-style: none;
  }
}
</style>
