<template>
    <header class="container">
        <h1 class="container__logo">lumière</h1>
        <input type="checkbox" id="nav_toggle" class="nav_toggle" @click="toggleMenu">
        <nav :class="{ 'expanded': isMenuOpen }">
            <ul>
              <li><NuxtLink class="links__single_link" to="/">home</NuxtLink></li>
              <li><NuxtLink class="links__single_link" to="/about">about</NuxtLink></li>
              <li><NuxtLink class="links__single_link" to="/products">products</NuxtLink></li>
              <li><NuxtLink class="links__single_link" to="/where-to-buy">where to buy</NuxtLink></li>
              <li class="wishlist"><Nuxtlink>wishlist</Nuxtlink></li>
              <li><Nuxtlink><img class="fav-icon" src="/assets/empty-fav.png"></Nuxtlink></li>
            </ul>
        </nav>
         <label for="nav_toggle" class="nav_toggle_label">
            <span></span>
        </label>
    </header>
</template>


<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/main.scss";

.container {
  text-align: center;
  width: 100%; 
  &__logo {
  text-transform: uppercase;
  } 
}
.fav-icon {
  max-width: 25px;
  margin-left: 2rem;
  cursor: pointer;
  display:none;
}
.nav_toggle {
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
}
.nav_toggle_label {
  position: absolute;
  top: 45px;
  left: 0;
  margin-left: 1em;
  display: flex;
  align-items: center;
}
.nav_toggle_label span,
.nav_toggle_label span::before,
.nav_toggle_label span::after {
  display: block;
  background: #BCA06B;
  height: 4px;
  width: 2em;
  border-radius: 2px;
  position: relative;
  cursor: pointer;

}
.nav_toggle_label span::before,
.nav_toggle_label span::after {
  content: '';
  position: absolute;
}
.nav_toggle_label span::before {
  bottom: 5px;
   
}
.nav_toggle_label span::after {
  top: 5px;
}
nav {
  text-align: left;
  background: var(--background);
  width: 100%;
  height: 0;
  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 400ms ease-in-out;
}
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  margin-bottom: 1rem;
  margin-left: 1rem;
}
nav a {
  color: black;
  text-decoration: none;
  font-size: 1.1rem;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
}
nav a:hover {
  color: $light-brown;
}
.nav_toggle:checked ~ nav {
  transform: scale(1,1);
}
.nav_toggle:checked ~ nav a {
  opacity: 1;
  transition: opacity 250ms ease-in-out 250ms;
}
.expanded {
  height: auto; 
}


@media screen and (min-width: 768px) {
  .fav-icon {
    display: block;
  }
  .wishlist {
    display: none;
  }
  .nav_toggle_label {
    display: none;
  }

  .container {
    display: flex;
    align-items: center;
    padding: 0 5rem 0 2rem;
  }
  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: none;
    transform: scale(1,1);
    background: none;
  }
  nav ul {
    display: flex;
  }
  
  nav li {
    margin-left: 2rem;
    margin-bottom: 0;
  }
  nav a {
    opacity: 1;
    position: relative;
  }
  nav a::before {
    content: '';
    display: block;
    height: 5px;
    background: black;
    position: absolute;
    top: -.75em;
    left: 0;
    right: 0;
    transform: scale(0, 1);
    transition: transform ease-in-out 250ms;
  }
}

</style>