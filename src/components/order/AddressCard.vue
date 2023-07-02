<script setup lang="ts">
import type { addressInfo } from '@/views/OrderView.vue';
import { ref, watch, type Ref } from 'vue';

defineProps<{
    address: addressInfo
    checked?: boolean
}>()

let editing = ref(false)
let deleting = ref(false)

watch(editing, (newVal, oldVal) => {
    if(newVal) document.body.classList.add("modal-open")
    else document.body.classList.remove("modal-open")
})

watch(deleting, (newVal, oldVal) => {
    if(newVal) document.body.classList.add("modal-open")
    else document.body.classList.remove("modal-open")
})
</script>

<template>
    <li class="address-list-item">
        <input class="address-radio" type="radio" name="selected-address" id="" :checked="checked">
        <span class="address-container">
            <div class="address-text">{{ address.street }} {{ address.houseNumber }} {{ address.floorNumber }} {{ address.apartment }}</div>
            <div class="address-text">{{ address.zipCode }} {{ address.city }}</div>
        </span>
        <button @click.prevent="editing = !editing">Edit</button>
        <button @click.prevent="deleting = !deleting">Delete</button>
        <div v-if="editing" class="block-screen">
            <div class="modal-body">
                <h3 class="title">Edit address</h3>
                <input class="edit-input" type="text" placeholder="City">
                <input class="edit-input" type="text" placeholder="Street">
                <input class="edit-input" type="text" placeholder="House number">
                <input class="edit-input" type="text" placeholder="Zip code">
                <input class="edit-input" type="text" placeholder="Floor number">
                <input class="edit-input" type="text" placeholder="Apartment">
                <span class="btn-container">
                    <button class="action-btn" @click.prevent="editing = !editing">Cancel</button>
                    <button class="action-btn" @click.prevent="">Edit</button>
                </span>
            </div>
        </div>
        <div v-if="deleting" class="block-screen">
            <div class="modal-body">
                
            </div>
        </div>
    </li>
</template>

<style scoped>
@import url("@/assets/modal.css");

body.modal-open {
    overflow: hidden;
}

.address-list-item {
    cursor: pointer;
    display: flex;
    border: var(--sub-border-size) solid var(--second-color);
    padding-block: var(--sub-p-size);
    margin-block: var(--sub-p-size);
    transition: box-shadow var(--tran);
}

.address-list-item:hover {
    box-shadow: 0 0 var(--tiny-size) 1px var(--second-color);
}

.address-radio {
    cursor: pointer;
    display: grid;
    place-content: center;
    -webkit-appearance: none;
    appearance: none;
    width: var(--p-size);
    height: var(--p-size);
    border: var(--border-size) solid var(--second-color);
    border-radius: 50%;
    margin: 0;
    margin-left: var(--tiny-size);
    transition: border var(--tran);
}

.address-radio::before {
    content: "";
    border-radius: 50%;
    width: calc(var(--sub-p-size) * 0.8);
    height: calc(var(--sub-p-size) * 0.8);
    background-color: var(--second-color);
    transform: scale(0);
    transition: transform var(--tran);
}

.address-radio:checked::before {
    transform: scale(1);
}

.address-radio:hover, .address-radio:checked {
    border: var(--border-size) solid var(--second-hover);
}

.address-container {
    margin-left: var(--tiny-size);
}

.address-text {
    font-size: var(--sub-p-size);
    color: var(--second-hover);
}

.title {
    margin: var(--sub-p-size) auto;
}

.edit-input {
    font-size: var(--p-size);
    border: var(--sub-border-size) solid var(--second-color);
    background-color: var(--main-color);
    color: var(--second-color);
    width: 50%;
    padding: var(--tiny-size);
    margin: var(--sub-p-size) auto;
    transition: border var(--tran), box-shadow var(--tran);
}

.edit-input:hover {
    border: var(--sub-border-size) solid var(--second-hover);
    box-shadow: 0 0 var(--tiny-size) 1px var(--second-color);
}

.btn-container {
    display: flex;
}

.action-btn {
    cursor: pointer;
    font-size: var(--p-size);
    border-radius: var(--sub-p-size);
    background-color: var(--second-color);
    color: var(--main-color);
    width: 40%;
    padding: var(--sub-p-size) var(--p-size);
    margin: var(--p-size) auto;
    transition: background-color var(--tran);
}

.action-btn:hover {
    background-color: var(--second-hover);
}

@media only screen and (hover: none) and (pointer: coarse) {
    .address-text {
        font-size: calc(var(--p-size) * 0.85);
    }

    .edit-input {
        font-size: var(--h4-size);
        width: 65%;
    }
}
</style>