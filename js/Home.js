export default class Home {
  constructor() {
    document.querySelector("main").innerHTML = this.display();
  }

  display() {
    return `
    <section id="landing">
      <div id="carousel-landing" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel-landing"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel-landing"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel-landing"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active h-100 overflow-y-scroll bg-warning">
            <div
              class="p-5 h-100 d-flex flex-column flex-md-row align-items-center"
            >
              <div class="order-2 order-md-1 text-center text-md-start pb-3">
                <h1 class="display-6 text-white">
                  TECHNOLOGY HACK YOU WON'T GET
                </h1>
                <button class="btn btn-dark">SHOP PRODUCT</button>
              </div>
              <div class="image flex-shrink-1 order-1 order-md-2 mb-5 mb-md-0">
                <img
                  src="images/slide1.png"
                  alt="Top Products"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>

          <div class="carousel-item h-100 overflow-y-scroll bg-danger">
            <div
              class="p-5 h-100 d-flex flex-column flex-md-row align-items-center"
            >
              <div class="order-2 order-md-1 text-center text-md-start pb-3">
                <h1 class="display-6 text-white">
                  TECHNOLOGY HACK YOU WON'T GET
                </h1>
                <button class="btn btn-dark">SHOP PRODUCT</button>
              </div>
              <div class="image flex-shrink-1 order-1 order-md-2 mb-5 mb-md-0">
                <img
                  src="images/slide1.png"
                  alt="Top Products"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>

          <div class="carousel-item h-100 overflow-y-scroll bg-success">
            <div
              class="p-5 h-100 d-flex flex-column flex-md-row align-items-center"
            >
              <div class="order-2 order-md-1 text-center text-md-start pb-3">
                <h1 class="display-6 text-white">
                  TECHNOLOGY HACK YOU WON'T GET
                </h1>
                <button class="btn btn-dark">SHOP PRODUCT</button>
              </div>
              <div class="image flex-shrink-1 order-1 order-md-2 mb-5 mb-md-0">
                <img
                  src="images/slide1.png"
                  alt="Top Products"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carousel-landing"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carousel-landing"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <section id="features" class="mt-5">
      <div class="container-fluid py-5 row">
        <div
          class="feature col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-start gap-2"
        >
          <div class="icon mt-1">
            <span class="material-icons-outlined text-info">shopping_cart</span>
          </div>
          <div class="text">
            <h4 class="text-dark mb-2">Free delivery</h4>
            <p class="lh-2 text-black-50">
              Consectetur adipi elit lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div
          class="feature col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-start gap-2"
        >
          <div class="icon mt-1">
            <span class="material-icons-outlined text-info"
              >workspace_premium</span
            >
          </div>
          <div class="text">
            <h4 class="mb-2 text-dark">uality guarantee</h4>
            <p class="lh-2 text-black-50">
              Dolor sit amet orem ipsu mcons ectetur adipi elit.
            </p>
          </div>
        </div>

        <div
          class="feature col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-start gap-2"
        >
          <div class="icon mt-1">
            <span class="material-icons-outlined text-info">sell</span>
          </div>
          <div class="text">
            <h4 class="mb-2 text-dark">Daily offers</h4>
            <p class="lh-2 text-black-50">
              Amet consectetur adipi elit loreme ipsum dolor sit.
            </p>
          </div>
        </div>

        <div
          class="feature col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-start gap-2"
        >
          <div class="icon mt-1">
            <span class="material-icons-outlined text-info"
              >health_and_safety</span
            >
          </div>
          <div class="text">
            <h4 class="mb-2 text-dark">100% secure payment</h4>
            <p class="lh-2 text-black-50">
              Rem Lopsum dolor sit amet, consectetur adipi elit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="sale" class="mt-5 position-relative text-end">
      <div
        class="text position-absolute start-0 top-50 p-5 ps-3 rounded-3 text-start"
      >
        <h6 class="display-6 mb-1">10% off</h6>
        <h3 class="display-3 lh-3 mb-5">New year sale</h3>
        <button class="btn btn-dark rounded-0">SHOP NOW</button>
      </div>
      <div class="image z-n1">
        <img src="images/single-image1.png" alt="" class="img-fluid" />
      </div>
    </section>

    <section id="blog" class="mt-5">
      <div class="container-fluid">
        <div
          class="section-header d-flex align-items-center justify-content-between"
        >
          <h2>Latest Posts</h2>
          <a href="#" class="text-dark">More</a>
        </div>
        <div class="row row-gap-4 flex-nowrap overflow-x-scroll">
          <div class="col-sm-6 col-md-4">
            <div class="card border-0">
              <img
                src="images/post-item1.jpg"
                class="card-img-top"
                alt="Playstation device"
              />
              <div class="card-body">
                <h6 class="card-subtitle text-black-50 text-uppercase mb-1">
                  feb 22, 2023 - Gadgets
                </h6>
                <h5 class="card-title text-dark text-uppercase">
                  Get some cool gadgets in 2023
                </h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="card border-0">
              <img
                src="images/post-item2.jpg"
                class="card-img-top"
                alt="Airbods device"
              />
              <div class="card-body">
                <h6 class="card-subtitle text-black-50 text-uppercase mb-1">
                  feb 25, 2023 - Technology
                </h6>
                <h5 class="card-title text-dark text-uppercase">
                  Technology Hack You Won't Get
                </h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="card border-0">
              <img
                src="images/post-item3.jpg"
                class="card-img-top"
                alt="camera"
              />
              <div class="card-body">
                <h6 class="card-subtitle text-black-50 text-uppercase mb-1">
                  feb 22, 2023 - Camera
                </h6>
                <h5 class="card-title text-dark text-uppercase">
                  Top 10 Small Camera In The World
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="quote" class="mt-5">
      <div id="carousel-quote" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="quote text-center">
              <div class="icon">
                <span class="material-icons head-icon text-black-50">
                  format_quote
                </span>
              </div>
              <blockquote class="blockquote">
                “Tempus oncu enim pellen tesque este pretium in neque, elit
                morbi sagittis lorem habi mattis Pellen tesque pretium feugiat
                vel morbi suspen dise sagittis lorem habi tasse morbi.”
              </blockquote>
              <div
                class="stars d-flex align-items-center justify-content-center"
              >
                <span class="material-icons text-primary">star</span>
                <span class="material-icons text-primary">star</span>
                <span class="material-icons text-primary">star</span>
                <span class="material-icons text-primary">star_half</span>
                <span class="material-icons text-primary">star_half</span>
              </div>
              <span class="text-uppercase fs-6 fw-lighter">AMAR GELILA</span>
            </div>
          </div>

          <div class="carousel-item">
            <div class="quote text-center">
              <div class="icon">
                <span class="material-icons head-icon text-black-50">
                  format_quote
                </span>
              </div>
              <blockquote class="blockquote">
                " A blog is a digital publication that can complement a website
                or exist independently. A blog may include articles, short
                posts, listicles, infographics, videos, and other digital
                content."
              </blockquote>
              <div
                class="stars d-flex align-items-center justify-content-center"
              >
                <span class="material-icons text-primary">star</span>
                <span class="material-icons text-primary">star</span>
                <span class="material-icons text-primary">star</span>
                <span class="material-icons text-primary">star_half</span>
                <span class="material-icons text-primary">star_half</span>
              </div>
              <span class="text-uppercase fs-6 fw-lighter">AMAR GELILA</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="subscribe" class="mt-5">
      <div
        class="container-fluid d-flex flex-column flex-md-row gap-3 bg-dark p-5"
      >
        <div class="text">
          <h2 class="diplay-1 text-white">Subscribe Us Now</h2>
          <p class="text-white-50">
            Get latest news, updates and deals directly mailed to your inbox.
          </p>
        </div>
        <form action="" class="flex-grow-1">
          <input
            type="text"
            class="form-control rounded-0"
            placeholder="Your email address here"
          />
          <button
            class="btn btn-info text-white text-uppercase rounded-0 w-100 mt-2"
          >
            subscribe
          </button>
        </form>
      </div>
    </section>

    <section id="insta" class="mt-5">
      <div class="container p-5">
        <h3 class="mb-3 text-center text-dark text-uppercase">
          SHOP OUR INSTA
        </h3>
        <div class="row justify-content-center gap-1">
          <div
            class="item col-sm-4 col-md-3 col-lg-2 p-0 m-0 position-relative"
          >
            <img
              src="images/insta-item1.jpg"
              alt="iphone and airbods"
              class="mw-100 h-100"
            />
          </div>
          <div
            class="item col-sm-4 col-md-3 col-lg-2 p-0 m-0 position-relative"
          >
            <img
              src="images/insta-item2.jpg"
              alt="smartwatch"
              class="mw-100 h-100"
            />
          </div>
          <div
            class="item col-sm-4 col-md-3 col-lg-2 p-0 m-0 position-relative"
          >
            <img
              src="images/insta-item3.jpg"
              alt="iphone"
              class="mw-100 h-100"
            />
          </div>
          <div
            class="item col-sm-4 col-md-3 col-lg-2 p-0 m-0 position-relative"
          >
            <img
              src="images/insta-item4.jpg"
              alt="airbods"
              class="mw-100 h-100"
            />
          </div>
          <div
            class="item col-sm-4 col-md-3 col-lg-2 p-0 m-0 position-relative"
          >
            <img
              src="images/insta-item5.jpg"
              alt="camera"
              class="mw-100 h-100"
            />
          </div>
        </div>
      </div>
    </section>`;
  }
}
