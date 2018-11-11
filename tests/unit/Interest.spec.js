import Interest from '@/components/Interest'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('목돈마련 계산기', () => {
    let wrapper
    it('제목은 목독마련 계산기', () => {
        wrapper = shallowMount(Interest)
        expect(wrapper.text()).to.include('목돈마련 계산기')
    })
})