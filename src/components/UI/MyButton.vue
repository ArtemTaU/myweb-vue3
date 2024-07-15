<template>
    <button class="btn">
        <slot></slot>
    </button>   
</template>


<script>
export default {
    name: 'my-button',
}
</script>

<style scoped>
.btn {
    padding: 5px 10px;
    border-radius: 10px;
    white-space: nowrap;
    background-color: var(--main-background-color);
    color: var(--main-color);
    border: 1px solid var(--main-color);
    font-size: var(--btn-font);
}

.btn:hover {
    background-color: var(--hover-background-color);
    color: var(--hover-text-color);
    border-color: var(--hover-text-color);
}

@media (max-width: 480px) {
    .btn {
        font-size: var(--btn-font-mobile);
    }
}
</style>