<template>
  <Transition name="modal-outer">
    <div
      class="absolute top-0 left-0 flex justify-center w-full h-screen px-0 bg-slate-900 bg-opacity-30"
      v-show="modalActive"
    >
      <Transition name="modal-inner">
        <div class="self-start max-w-screen-md p-4 mt-32 bg-white rounded-lg" v-if="modalActive">
          <slot />
          <div class="flex items-center justify-center mb-3">
            <button
              class="py-2 mt-8 text-white transition ease-in-out delay-200 rounded-md shadow-lg hover:shadow-lg hover:bg-slate-900 px-14 bg-weather-primary"
              @click="$emit('close-modal')"
            >
              Close
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
defineEmits(['close-modal'])

defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-beizer(0.52, 0.02, 0.19, 1.02);
}
.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0, 0);
}

.modal-inner-leave-to {
  transform: scale(0, 0);
}
</style>
