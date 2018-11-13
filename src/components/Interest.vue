<template>
<div class="container">
    <h1>목돈마련 계산기</h1>
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">예치 금액(
                <span v-if="예치금액 > 0"> {{ Number(예치금액).toLocaleString() }}</span>
                만원)
            </span>
        </div>
        <input  v-model="예치금액" type="number" name="예치금액" class="form-control text-center" placeholder="예치하실 금액을 만원 단위로 입력하세요">
    </div>
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">예치 기간(
                <span v-if="예치기간 > 0" class="alert-danger"> {{ Number(예치기간).toLocaleString() }}</span>
                개월)
            </span>
        </div>
        <input  v-model="예치기간" type="number" name="예치기간"
            class="form-control text-center"
            placeholder="예치하실 기간을 개월 단위로 입력하세요">
    </div>

    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text alert-warning">이자율(
                <span v-if="이자율 > 0"> {{ Number(이자율).toLocaleString() }}</span>
                %)
            </span>
        </div>
        <input  v-model="이자율" type="number" name="이자율" class="form-control text-center" placeholder="적용할 이자율을 % 단위로 입력하세요">
    </div>
    <div class="input-group">
        <button type="button" class="btn btn-warning btn-block" v-on:click="reset">Reset</button>
    </div>

    <hr>
    <div class="card">
        <div class="card-body">
            <table class="table table-striped">
                <thead>
                    <th>구분</th>
                    <th>만기지급액</th>
                    <th>세후이자</th>
                </thead>
                <tbody>
                    <tr>
                        <td>일반 (15.4%)</td>
                        <td>{{ 만기지급액 }}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>세금우대 (9.5%)</td>
                        <td>{{ 만기지급액 }}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>비과세 (0%)</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Interest',
    data () {
        return {
            예치금액: null,
            예치기간: null,
            이자율: null,
        }
    },
    computed: {
        만기지급액: {
            get: function () {
                let value = parseInt(this.예치금액 * ((1 + this.이자율/100/12) ** this.예치기간) * 10000)
                if (value > 0) {
                    return Number(value).toLocaleString()
                } else {
                    return null
                }
            },
        },
    },
    methods: {
        reset: function () {
            this.예치금액 = null
            this.예치기간 = null
            this.이자율 = null
        },

    }
}
</script>
<style>
.input-group-prepend { 
    width: 30%;
}
.input-group { 
    width: 100%;
    margin-top: 3px;
}
.input-group-text { 
    width: 100%;
}
</style>