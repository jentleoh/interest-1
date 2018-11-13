import Interest from '@/components/Interest'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import moxios from 'moxios'

describe('목돈마련 계산기', () => {
    let wrapper
    wrapper = shallowMount(Interest)
    it('제목은 목독마련 계산기', () => {
        expect(wrapper.text()).to.include('목돈마련 계산기')
    })
    it('계산에 필요한 변수들은 null로 초기화되어 있어야 한다.', () => {
        expect(wrapper.vm.예치금액).to.equal(null)
        expect(wrapper.vm.예치기간).to.equal(null)
        expect(wrapper.vm.이자율).to.equal(null)
    })
    it('만기지급액 계산에 필요한 변수의 값이 정해 지면 만기지급액이 자동으로 계산되어야 한다.', (done) => {
        moxios.install()
        let node1 = wrapper.find('input[name=예치금액]')
        node1.element.value = 100
        node1.trigger('input')

        let node2 = wrapper.find('input[name=예치기간]')
        node2.element.value = 1
        node2.trigger('input')

        let node3 = wrapper.find('input[name=이자율]')
        node3.element.value = 3
        node3.trigger('input')

        moxios.wait(() => {
            expect(wrapper.vm.만기지급액).to.equal('1,002,500')
            done()
        })
        moxios.uninstall()
    })
})