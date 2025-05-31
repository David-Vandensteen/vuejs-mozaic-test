<template>
  <div>
    <h1>Test Mozaic</h1>
    <p>Ce projet est un test pour Mozaic.</p>
    <div>
      <MButton label="Button" />
    </div>
    <div class="mc-badge">Badge info</div>
    <div class="mc-badge mc-badge--success">Badge success</div>
    <div class="mc-badge mc-badge--warning">Badge warning</div>
    <div class="mc-badge mc-badge--danger">Badge danger</div>
  </div>

  <div class="mc-checkbox">
    <input
      id="checkbox-01"
      type="checkbox"
      class="mc-checkbox__input"
      name="example"
    />
    <label for="checkbox-01" class="mc-checkbox__label"> Label </label>
  </div>

  <div class="mc-card mc-card--bordered">
    <figure class="mc-card__visual">
      <img src="https://media.adeo.com/mkp/5feda8b6be79a7164a0268169dfc49b5/media.jpg?width=3000&height=3000&format=jpg&quality=80&fit=bounds" alt="" class="mc-card__img" />
    </figure>
    <article class="mc-card__content">
      <h1 class="mc-card__title">Card title</h1>
      <h2 class="mc-card__subtitle">There can be a subtitle here.</h2>
      <div class="mc-card__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <footer class="mc-card__footer">
        <a href="#" class="mc-link mc-link--m">Default link</a>
      </footer>
    </article>
  </div>

  <div class="mc-hero">
    <div class="ml-container ml-container--fluid">
      <div class="ml-flexy ml-flexy--gutter">
        <div class="mc-hero__main ml-flexy__col">
          <picture class="mc-hero__cover">
            <img
              class="mc-hero__visual"
              src="https://m1.lmcdn.fr/media/15/5e611393475ea771bbbad626/2872342965/greenkub-maison-sans-permis5e611393063b330009a4a405.jpg?width=800&crop=16:9,smart"
              alt=""
            />
          </picture>

          <h1
            class="mc-hero__title
              mt-heading
              mt-heading--lightest
              mt-heading--s
              mt-heading--underline"
          >
            Hero title
          </h1>
        </div>
      </div>
    </div>
  </div>

  <div><navigation-arrow-arrow--right-16px></navigation-arrow-arrow--right-16px></div>

</template>

<script>
import { MButton } from '@mozaic-ds/vue-3/src/components/button';
import ArrowArrowRight16 from '@mozaic-ds/web-components/public/icons/ArrowArrowRight16.js';

if (!customElements.get('navigation-arrow-arrow--right-16px')) {
  customElements.define(
    'navigation-arrow-arrow--right-16px',
    ArrowArrowRight16,
  );
}

export default {
  name: 'App',
  components: {
    MButton
  }
};
</script>

<style lang="scss" scoped>
@import 'settings-tools/all-settings';
@import 'components/c.badge';

@import 'components/c.checkbox';

@import 'components/c.button';
@import 'components/c.links';
@import 'components/c.card';


@import 'typography/_t.all-base-typography';
@import 'layouts/l.container';
@import 'layouts/l.flexy';
@import 'components/c.hero';


</style>

