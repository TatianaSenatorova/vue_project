Vue.component("detailed-card", {
  data() {
    return {
      sortElement: "",
      articles: [
        {
          title: "Let’s Get Solution For Building Construction Work",
          img: "../images/catalog_images/white_kitchen_four_lamps.jpg",
          tag: "Kitchen",
        },
        {
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          img: "../images/catalog_images/grey_kitchen_narrow.jpg",
          tag: "Kitchen",
        },
        {
          title: "Best For Any Home & Home Interior Solution.",
          img: "../images/catalog_images/kitchen_carpet_armchairs.jpg",
          tag: "Building",
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
  template: `
  <div class="details__wrap">
    <div class="details__cards-wrap">
    <article class="detailed-card" v-for="(article, index) in filterArticle" :key="index">
    <h3 class="detailed-card__title" >{{ article.title }}</h3>
    <div class="detailed-card__img-box">
        <a class="detailed-card__link" href="#">
            <img class="detailed-card__image" :src="article.img"
                alt="Modern kitchen with arch fruites on table">
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
                                <span>&#8221</span>
                                <p>The details are not the details.
                                    They make the design.</p>
                            </div>
</article>
</div>
<div class="details__tags tags">
<h3 class="tags__title">Tags</h3>
<div class="tags__button-box">
    <button class="tags__button" v-for="button in buttons" @click="filterButton(button)">{{button}}</button>
</div>
</div>
</div>
`,
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
});

new Vue({
  el: "#details__box",
});
