---
layout: home

title: Blog
titleTemplate: bestvist blog

hero:
    name: VitePress
    text: Vite & Vue Powered Static Site Generator
    tagline: Simple, powerful, and fast. Meet the modern SSG framework you've always wanted.
    actions:
        - theme: brand
          text: 阅读
          link: /blog/
        - theme: alt
          text: GitHub
          link: https://github.com/bestvist/git-blog
    image:
        src: /brand.jpg
        alt: brand
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #FF9999 30%, #666699);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #FF9999 50%, #666699 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
