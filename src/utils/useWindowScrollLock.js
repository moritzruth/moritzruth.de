import { watchEffect, onUnmounted, getCurrentInstance } from "vue"

const lockingInstances = new Set()

const update = () => {
  document.body.style.overflowY = lockingInstances.size === 0 ? null : "hidden"
}

export function useWindowScrollLock(locked) {
  const instance = getCurrentInstance()

  watchEffect(() => {
    if (locked.value) lockingInstances.add(instance)
    else lockingInstances.delete(instance)
    update()
  })

  onUnmounted(() => {
    lockingInstances.delete(instance)
    update()
  })
}
