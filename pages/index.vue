<template lang="pug">
  div
    div.calendar(ref="calendarRef")
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'

export default defineComponent({
  setup() {

    const calendarRef = ref<HTMLDivElement | null>(null)

    onMounted(() => {
      if (!calendarRef.value) return
      const calendar = new Calendar(calendarRef.value, {
        plugins: [dayGridPlugin]
      })

      calendar.render()
    })

    return {
      calendarRef
    }
  }
})
</script>
<style lang="stylus"></style>
