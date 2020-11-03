<template lang="pug">
  div
    div.calendar(ref="calendarRef")
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default defineComponent({
  setup() {

    const calendarRef = ref<HTMLDivElement | null>(null)

    onMounted(() => {
      if (!calendarRef.value) return
      const calendar = new Calendar(calendarRef.value, {
        dateClick: (e) => {
          alert(`クリックされた日は、${e.dateStr}です。`)
        },
        plugins: [dayGridPlugin, interactionPlugin]
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
