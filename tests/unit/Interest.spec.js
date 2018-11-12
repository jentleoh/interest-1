import Interest from '@/components/Interest'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('목돈마련 계산기', () => {
    let wrapper
    wrapper = shallowMount(Interest)
    it('제목은 목독마련 계산기', () => {
        expect(wrapper.text()).to.include('목돈마련 계산기')
    })
    it('계산에 필요한 변수들의 초기화', () => {
        expect(wrapper.vm.예치금액).to.equal(0)
        expect(wrapper.vm.예치기간).to.equal(0)
    })
})