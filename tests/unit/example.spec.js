import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import App from '@/App.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('State', () => {
  it('renders a value from $store.state', () => {
    const wrapper = shallowMount(State, {
      mocks: {
        $store: {
          state: {
            value_1: 'value_1',
          },
        },
      },
      localVue,
    })
    expect(wrapper.find('.state-1').text().trim()).toEqual('value_1')
  })
})
