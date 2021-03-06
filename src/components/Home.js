import React from "react";

const Home = () => {
  return (
    <div>
      <div id="pattern" class="pattern">
        <div class="c">
          <div class="main">
            <h2>Main Content (1st in source order)</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              dictum odio eget mauris vestibulum feugiat. Praesent ante sapien,
              luctus pulvinar ultricies quis, aliquet in mi. Nulla facilisi.
              Donec malesuada fringilla iaculis. Praesent nec quam sit amet orci
              volutpat volutpat in eget eros. Duis pellentesque bibendum erat.
              Integer pretium nunc vel augue rutrum eget feugiat mi molestie.
              Cras venenatis, turpis et rhoncus scelerisque, mi augue suscipit
              urna, quis sagittis tortor nisl ut purus. Aliquam at enim est.
              Donec sit amet suscipit quam. Aliquam sit amet commodo eros.
            </p>
            <p>
              Proin quis dui eros. Morbi fringilla, ligula vitae interdum
              volutpat, est eros ultricies sem, vitae pellentesque lacus lorem
              vitae risus. In odio eros, placerat in fermentum sit amet, commodo
              eget magna. In suscipit velit pharetra neque consequat commodo
              congue risus eleifend. Aliquam tellus ligula, dapibus sed rutrum
              at, gravida vitae urna. Praesent volutpat molestie eleifend.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec nulla urna, hendrerit in egestas ut,
              ullamcorper quis lectus. Phasellus faucibus metus ac nisl volutpat
              a lobortis lorem molestie. Ut bibendum vulputate tortor, a
              faucibus enim tempus ut. Fusce consectetur, ligula quis feugiat
              luctus, sapien tortor hendrerit enim, et tincidunt sapien augue in
              nibh. Curabitur ligula odio, ullamcorper ac fermentum eu, luctus
              vel mauris. Donec vehicula egestas urna, et hendrerit augue
              ultricies ac. Morbi urna elit, dignissim in sagittis congue,
              pretium eu eros. Sed blandit varius risus, pellentesque consequat
              lectus cursus in. Aenean pellentesque nibh ut odio euismod in
              sollicitudin neque laoreet.
            </p>
          </div>
          <div class="c2">
            <h3>Column (2nd in source order)</h3>
            <p>
              Sed sit amet molestie diam. Etiam adipiscing dictum eros, vitae
              feugiat augue convallis sit amet. Nunc quis massa non dolor dictum
              condimentum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              turpis diam, tincidunt nec convallis vitae, dapibus vitae enim.
              Nam bibendum nisl in risus imperdiet vestibulum.
            </p>
            <p>
              Sed sit amet molestie diam. Etiam adipiscing dictum eros, vitae
              feugiat augue convallis sit amet. Nunc quis massa non dolor dictum
              condimentum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              turpis diam, tincidunt nec convallis vitae, dapibus vitae enim.
              Nam bibendum nisl in risus imperdiet vestibulum.
            </p>
          </div>
          <div class="c3">
            <h3>Column (3nd in source order)</h3>
            <p>
              Sed sit amet molestie diam. Etiam adipiscing dictum eros, vitae
              feugiat augue convallis sit amet. Nunc quis massa non dolor dictum
              condimentum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              turpis diam, tincidunt nec convallis vitae, dapibus vitae enim.
              Nam bibendum nisl in risus imperdiet vestibulum.
            </p>
            <p>
              Sed sit amet molestie diam. Etiam adipiscing dictum eros, vitae
              feugiat augue convallis sit amet. Nunc quis massa non dolor dictum
              condimentum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              turpis diam, tincidunt nec convallis vitae, dapibus vitae enim.
              Nam bibendum nisl in risus imperdiet vestibulum.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <section class="pattern-description">
          <h1>Mostly Fluid</h1>
          <p>
            From Luke Wroblewski's{" "}
            <a href="http://www.lukew.com/ff/entry.asp?1514">
              Multi-Device Layout Patterns
            </a>
            :
          </p>
          <blockquote>
            <p>
              The most popular pattern was perhaps surprisingly simple: a
              multi-column layout that introduces larger margins on big screens,
              relies on fluid grids and images to scale from large screens down
              to small screen sizes, and stacks columns vertically in its
              narrowest incarnations.
            </p>
            <p>
              I dubbed this pattern "mostly fluid" because the core structure of
              the layout really doesn't change until the smallest screen width.
              Instead, the design mostly relies on fluid grids to adapt to a
              variety of screen sizes.
            </p>
          </blockquote>
        </section>
        <footer role="contentinfo">
          <div>
            <nav id="menu">
              <a href="https://bradfrost.github.com/this-is-responsive/patterns.html">
                &larr;More Responsive Patterns
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
