<template>
  <div id="app">
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            MyCompany
          </a>
          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            v-on:click="toggleNav"
            v-bind:class="{ 'is-active': isActive }"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': isActive }">

          <div class="navbar-end">
            <router-link to="/" class="navbar-item r-item">Home</router-link>
            <router-link to="faq" class="navbar-item r-item">Features</router-link>
            <router-link to="faq" class="navbar-item r-item">About</router-link>
            <router-link to="faq" class="navbar-item r-item">FAQ</router-link>
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary is-outlined">
                  <span class="icon">
                    <i class="fa fa-download"></i>
                  </span> 
                  <span>
                    JOIN NOW
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
    <router-view />

    <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>And this right here is a spiffy footer, where you can put stuff.</p>
          </div>
          <div class="column has-text-right">
            <a class="icon" href="#"><i class="fab fa-facebook-f
"></i></a>
            <a class="icon" href="#"><i class="fab fa-twitter
"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass' 
@import 'mq'

.navbar
  background-color: #383838
  a:hover
    color: gray
  .navbar-brand
    .navbar-item
      color: #fff
      font-weight: bold
  a.r-item
    color: #c1c1c1  
    padding: 0.5rem 1.75rem
    +mobile
      color: gray
      &:hover
        background-color: #f1f1f1
  .navbar-burger span
    background-color: #c1c1c1

footer
  background-color: $primary !important
  color: #fff

  .icon
    color: #fff
    margin-left: 20px
</style>
