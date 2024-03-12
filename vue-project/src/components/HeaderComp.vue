<template>
    <header class="header center">
        <a class="logo">
            <img src="../assets/images/logo.svg" width="177" height="50" alt="Logotype Interno">
        </a>
        <nav class="navigation">
            <ul class="navigation__list">
                <li class="navigation__item">
                    <a class="navigation__link" href="#">Home</a>
                </li>
                <li class="navigation__item">
                    <a class="navigation__link" href="#">Project</a>
                </li>
                <li class="navigation__item">
                    <a class="navigation__link" href="#">Blog</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComp',

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '../assets/vars';
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 44px;
    padding-bottom: 45px;
    min-height: 151px;
}

.navigation {
    width: 20.25%;

    &__list {
        display: flex;
        justify-content: space-between;
        list-style: none;
    }

    &__item {
        line-height: 125%;
    }

    &__link {
        color: $colorText;
        cursor: pointer;
        transition: 0.3s;
    }

    &__item:hover &__link {
        color: $colorHover;
    }
}
</style>