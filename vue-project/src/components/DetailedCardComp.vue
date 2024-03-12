<template>
    <div class="details__wrap">
        <div class="details__cards-wrap">
            <article class="detailed-card" v-for="(article, index) in filterArticle" :key="index">
                <h3 class="detailed-card__title">{{ article.title }}</h3>
                <div class="detailed-card__img-box">
                    <a class="detailed-card__link" href="#">
                        <img class="detailed-card__image" :src="require('../assets/images/' + article.img)"
                            alt={{article.alt}}>
                    </a>
                </div>
                <div class="detailed-card__breadcrumbs-box">
                    <time class="article-card__date" datetime="2022-12-26">26 December,2022 </time>

                    <ol class="breadcrumbs">
                        <li class="breadcrumbs__item">
                            <a class="breadcrumbs__link" href="#">
                                Interior
                            </a>
                            <span> / &nbsp;</span>
                        </li>
                        <li class="breadcrumbs__item">
                            <a class="breadcrumbs__link" href="index.html">Home</a>
                            <span>/ &nbsp;</span>
                        </li>
                        <li class="breadcrumbs__item">
                            <a class="breadcrumbs__link breadcrumbs__link_current">Decore</a>
                        </li>
                    </ol>
                </div>
                <div class="detailed-card__info-box">
                    <div class="detailed-card__text">
                        <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere
                            in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some form, by injecthumour, or
                            randomised words which don't look even slightly believable.</p>
                        <p>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                            tend to repeat predefined chunks as necessary.</p>
                    </div>
                </div>
                <div class="detailed-card__quote">
                    <span v-html=quoteElement></span>
                    <p>The details are not the details.
                        They make the design.</p>
                </div>
            </article>
        </div>
        <div class="details__tags tags">
            <h3 class="tags__title">Tags</h3>
            <div class="tags__button-box">
                <button class="tags__button" v-for="button in buttons" :key="button">{{ button
                    }}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailedCardComp',
    data() {
        return {
            sortElement: "",
            quoteElement: '&#8221',
            articles: [
                {
                    title: "Let’s Get Solution For Building Construction Work",
                    img: "detailed_blue_kitchen.jpg",
                    tag: "Kitchen",
                    alt: "blue kitchen"
                },
                {
                    title: "Low Cost Latest Invented Interior Designing Ideas.",
                    img: "bedroom_green_walls.jpg",
                    tag: "Bedroom",
                    alt: "bedroom green walls"
                },
                {
                    title: "Best For Any Building.",
                    img: "modern_cottage.jpg",
                    tag: "Building",
                    alt: "modern cottage"
                },
            ],
            buttons: [
                "Kitchen",
                "Bedroom",
                "Building",
                "Architecture",
                "Kitchen Planning",
                "Bedroom",
            ],
        };
    },

    methods: {
        filterButton(button) {
            this.sortElement = button;

        },
    },
    computed: {
        filterArticle() {
            console.log(this.sortElement);
            return this.sortElement ? this.articles.filter((article) =>
                article.tag.includes(this.sortElement)
            )
                : this.articles;
        },
    },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/vars';
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

.detailed-card {
    max-width: 799px;
    &__title {
        font-family: "DM Serif Display", Georgia, serif;
        font-size: 50px;
        line-height: 62.5px;
        letter-spacing: 1px;
        color: $colorText;
        margin-bottom: 21px;
    }

    &__img-box {
        width: 100%;
        height: 539px;
        background-color: #C4C4C4;
        border-radius: 50px;
        overflow: hidden;
        margin-bottom: 46px;
    }

    &__image {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &__breadcrumbs-box {
        display: flex;
        justify-content: space-between;
    }

    &__text {
        display: flex;
        flex-direction: column;
        gap: 20px;

    }

    &__info-box {
        margin-bottom: 35px;
    }

    &__quote {
        background-color: #F4F0EC;
        border-radius: 50px;
        color: #CDA274;
        text-align: center;
        font-family: "DM Serif Display", serif;
        font-size: 25px;
        font-style: italic;
        line-height: 31.25px;
        letter-spacing: 0.5px;
        padding: 53px 227px;
        margin-bottom: 27px;
    }

    &__quote-box {
        width: 345px;
        position: relative;
        height: 161px;
    }

    &__quote-marks {
        position: absolute;
        top: 0;
        font-family: "DM Serif Display", serif;
        font-size: 200px;
        font-style: italic;
        line-height: 250px;
        letter-spacing: 4px;
        left: 50%;
        transform: translateX(-50%);

    }

    &__quote-text {
        width: 345px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
    }

    &__list {
        padding-top: 24px;
        padding-bottom: 44px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        counter-reset: my-counter;
        list-style-type: none;

    }

    &__list li::before {
        content: counter(my-counter);
        counter-increment: my-counter;
        color: #CDA274;
        font-family: "DM Serif Display", serif;
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0.4px;
        margin-right: 11px;
    }




}
</style>