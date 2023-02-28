// Styles
import './VCalendar.sass'

// Components
import { VBtn } from '@/components/VBtn'

// Styles
import { genericComponent, useRender } from '@/util'

export const VCalendarDay = genericComponent()({
  name: 'VCalendarDay',

  props: {
    active: Boolean,
    color: String,
    disabled: Boolean,
    title: [Number, String],
  },

  setup (props, { emit, slots }) {
    useRender(() => {
      const hasTitle = !!(props.title || slots.title)

      return (
        <div
          class={[
            'v-calendar-day',
          ]}
        >
          { hasTitle && (
            <div key="title" class="v-calendar-day__title">
              { slots.title?.() ?? (
                <VBtn
                  color={ props.color }
                  icon
                  size="x-small"
                  variant="text"
                >
                  { props.title }
                </VBtn>
              ) }
            </div>
          ) }

          { slots.content && (
            <div key="content" class="v-calendar-day__content">
              { slots.content() }
            </div>
          ) }

          { slots.default?.() }
        </div>
      )
    })

    return {}
  },
})

export type VCalendarDay = InstanceType<typeof VCalendarDay>