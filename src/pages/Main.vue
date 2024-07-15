<template>
    <div class="main-page">
        <my-grid-container class="grid-container">
            <div class="grid-item">
                <img src="@/assets/images/my_photo.jpg" alt="my-photo" class="my-image">
            </div>
            <div class="grid-item">
                <h3>
                    Привет!
                </h3>
                <p>
                    Меня зовут Артем, я сотрудник научного института, будущий PhD и начинающий разработчик.
                </p>
                <p>
                    Свой путь в разработке я начал с простого проекта, реализавнного на django - My Surf.
                    Моим следующим проектом стал Biotech-Zoo, также написанный на django, 
                    с использованием библиотеки DjangoChannels и Redis для реализации чата.
                    Сейчас я работаю над очень амбициозным проектом - Book Diffusion, 
                    расширяя свой стэк дополнительными техгологиями в Backend и Frontend разработке.     
                </p>
                <p>
                    На этом сайте я представляю свои проекты и стэк навыков, приобретенных входе их выполнения.
                </p>
            </div>
        </my-grid-container>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.main-page{
   padding: 10vh 8vw;
}

.grid-container {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 4fr; /* Вторая колонка в 2 раза шире первой */
    gap: 30px;
}

.grid-item {
    padding: 20px;
    justify-content: center;
}

.my-image {   
    width: 100%;
    border-radius: 50%;
}  

@media (max-width: 480px) {
    .main-page{
        padding: 2vh 5vw;
    }

    .grid-container {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .grid-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2vh 20px;
        padding-bottom: 0;
    }

    .my-image {   
        width: 60%;
    }
}
</style>