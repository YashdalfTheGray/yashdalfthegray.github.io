# yashdalfthegray.github.io

There are many like it but this one is mine.

## Inspiration

For no particularly unique reason, I decided to write my personal website with no libraries, either for CSS or Javascript. The only thing it does use is autoprefixer and polyfills for full support across browsers and webpack so that I can use ESNext and Typescript!

## Structure

The entire website is components based. I didn't want to write up a huge `index.html` file so I broke up the app into "HTML" components using Javascript. The concept is simple, you create an ES2015 class, put a `render` method in it and then replace some element's `innerHTML` with the result of the `render` method. Example below.

```html
<body>
    <div id="app"></div>
</body>
<script type="text/javascript">
class MyApp {
    render(props) {
        return `
            <h1>This webpage belongs to ${props.name}</h1>
        `;
    }
}

document.querySelector('div#app').innerHTML = (new MyApp()).render({ name: 'Yash' });
</script>
```

It's very React-like in it's structure but isn't actually React, or any framework for that matter. The only place where this gets complicated is accessing the members of the class (eg. click handlers) from within the rendered HTML. That's a little advanced for this file but take a look at `src/Component.ts` and `src/components/Header.ts` to see how we make that happen.

## Results

The result of just using Javascript and CSS without any libraries or frameworks is that all this code ships in a small 7.4kB package (6.3kB for the Javascript and 1.1kB for the CSS) and the website loads up in less than 500ms on fast connections.

Plus I get more experience with media queries, CSS Animations and SASS!

## What tools am I using?

I wanted to use Typescript because I like typescript and I could create interfaces and types for the application mostly as a way to get more exposure to the Typescript type system. I also use Webpack, SASS, and an SVG inline loader with Webpack just to make writing out CSS and using SVGs easier. None of these things run in production though, all the Javascript and the CSS is hand-rolled!

You _could_ agrue that Typescript and Webpack are both including polyfills in my production Javascript, and you would be right, but _semantics_.

## Resources

* [Complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Reactive UI’s with Vanilla JS](https://css-tricks.com/reactive-uis-vanillajs-part-1-pure-functional-style/)
* [The SASS `&`](https://css-tricks.com/the-sass-ampersand/)
* [Using CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
* [Easing functions as SASS variables](https://gist.github.com/davidpett/5862318)
* [Simple Icons](https://simpleicons.org/)
