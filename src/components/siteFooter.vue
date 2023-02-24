<template>
  <div class="kraya-footer">
    <section class="kraya-footer__moduleBarWrapper">
      <div class="kraya-footerr__moduleBar">
        <div class="kraya-footer__tagline">
          <h2 class="kraya-footer__tagline__heading">LET'S STAY IN TOUCH</h2>
          <p class="kraya-footer__tagline__text">
            Get updates on sales specials and more
          </p>
        </div>
        <div class="kraya-footer__emailForm">
          <p>Email Address<span>SUBSCRIBE</span></p>
        </div>
      </div>
      <div class="kraya-footer__moduleBarWrapper__socialMedia">
        <div class="kraya-footer__SocialMedia-follow">
          <h2>FOLLOW KRAYA</h2>
        </div>
        <div class="kraya-footer__socialMedia-links">
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </div>
      </div>
    </section>
    <section class="kraya-footer__container">
      <div class="kraya-footer__container__flexContainer">
        <ul>
          <li class="kraya-footer__link-headings">ABOUT</li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">News</a></li>
        </ul>
        <ul>
          <li class="kraya-footer__link-headings">SUPPORT</li>
          <li><a href="#">Payment</a></li>
          <li><a href="#">Shipping</a></li>
          <li><a href="#">Cancellation &amp; Return</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
        <ul>
          <li class="kraya-footer__link-headings">POLICY</li>
          <li><a href="#">Terms of use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Intellectual Property</a></li>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Security</a></li>
        </ul>
        <ul>
          <li class="kraya-footer__link-headings">MAIL US</li>
          <li>
            <a href="#"
              >17187 N. Laurel Park Dr., Ste. 110 Livonia, MI 48152 USA</a
            >
          </li>
        </ul>
      </div>
      <!-- <div class="kraya-footer__contactInfo">
        <h2>1800 123 4567</h2>
        <small>Service hours: 09:00-21:00</small>
        <p class="chat_support">CHAT SUPPORT</p>
        <div>
          <p class="payments">Payment Methods</p>
          <img src="../images/p1.png" alt="" class="payment-images" />
          <img src="../images/p2.png" alt="" class="payment-images" />
          <img src="../images/p3.png" alt="" class="payment-images" />
          <img src="../images/p4.png" alt="" class="payment-images" />
          <img src="../images/p5.png" alt="" class="payment-images" />
        </div>
      </div> -->
    </section>
    <section class="kraya-footerr__legalNotice">
      <p class="kraya-footerr__copyright">
        Copyright © 2010 - 2018 commerce factory. All Rights Reserved
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.kraya-footer {
  background-color: #1d1d1d;
  color: #b7bdc1;
  margin-top: 50px;
  bottom: 0;
  height: auto;
}

.kraya-footer__moduleBarWrapper {
  display: flex;
  border-bottom: 1px solid #555555;
  width: 90%;
  margin: 0 auto;
  padding: 2em 0;
  justify-content: space-between;
}

.kraya-footerr__moduleBar {
  display: flex;
}
/* .kraya-footer__tagline {
  line-height: 4.5px;
  margin: 1.5rem;
  margin-left: 0;
} */

.kraya-footer__tagline__heading {
  font-size: 20px;
  padding-bottom: 5px;
}

.kraya-footer__tagline__text {
  opacity: 0.7;
  font-size: 12px;
}

.kraya-footer__emailForm {
  width: 25rem;
}

.kraya-footer__emailForm p {
  border: 1px solid #aaaaaa;
  opacity: 0.5;
  margin-left: 3em;
  padding: 0.5rem;
}

.kraya-footer__emailForm p span {
  opacity: 1;
  float: right;
}

.kraya-footer__moduleBarWrapper__socialMedia {
  display: flex;
}
.kraya-footer__SocialMedia-follow {
  /* line-height: 1px;
  margin: 1.5rem; */
  padding-top: 0.5em;
}

.kraya-footer__SocialMedia-follow h2 {
  font-size: 20px;
}

.kraya-footer__SocialMedia-follow small {
  opacity: 0.7;
  font-size: 12px;
}

.kraya-footer__socialMedia-links {
  padding-top: 0.5em;
  padding-left: 2em;
}

.kraya-footer__socialMedia-links .fa {
  width: 32.28px;
  height: 32.28px;
  margin-left: 5px;
}

.kraya-footer__container {
  display: flex;
  border-bottom: 1px solid #aaaaaa;
  width: 90%;
  padding: 2em 0;
  margin: 0 auto;
}

.kraya-footer__container__flexContainer {
  display: flex;
}
.kraya-footer__container__flexContainer ul:nth-child(1) {
  /* margin-left: 10px; */
  padding: 0;
}
.kraya-footer__container__flexContainer ul li {
  text-decoration: none;
  list-style: none;
  padding: 0.6rem;
  padding-left: 0;
  font-size: 14px;
}

.kraya-footer__container__flexContainer ul {
  padding-left: 6rem;
}

.kraya-footer__container__flexContainer ul li a {
  text-decoration: none;
  color: #aaaaaa;
  font-size: 13px;
}

.kraya-footer__link-headings {
  font-weight: 700;
}

.kraya-footer__contactInfo {
  margin-left: 1.8rem;
}

.kraya-footer__contactInfo .chat_support {
  border: 1px solid #f2f2f2;
  padding: 0.5rem;
  text-align: center;
}

.kraya-footerr__legalNotice {
  width: 90%;
  margin: 0 auto;
}
.kraya-footerr__copyright {
  padding: 1.75rem;
  padding-left: 0;
  margin: 0 auto;
  font-size: 12px;
}
</style>
