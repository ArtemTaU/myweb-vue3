<template>
    <div class="navbar">
        <h3 @click="$router.push('/')">Моя страница</h3>
        <div class="navbar__btns">
            <my-button @click="$router.push('/projects')"> Проекты </my-button>
            <my-button @click="$router.push('/science')"> Статьи </my-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    background-color: var(--main-background-color);
    display: flex;
    align-items: center;
    padding: 15px 20px;
    z-index: 1;
    position: relative;
}
.navbar__btns {
    margin-left: auto;
    display: flex;
    gap: 10px;
}

@media (max-width: 480px) {
    .navbar {
        padding: 10px 20px;
    }
}
</style>