<template>
    <!-- MON HEADER GÉNÉRAL À TOUTES MES PAGES WEB  -->
    <div>
        <div class="site-mobile-menu">
        <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
            </div>
        </div>
        <div class="site-mobile-menu-body"></div>
        </div>

        <header class="site-navbar py-1" role="banner">

        <div class="container">
            <div class="row align-items-center">
            <div class="col-6 col-xl-2">
                <h1 class="mb-0">
                    <router-link to="/" class="text-black h2 mb-0"> Neighborhoodz </router-link>
                </h1>
            </div>
            <div class="col-10 col-md-8 d-none d-xl-block">
                <nav class="site-navigation position-relative text-right text-lg-center" role="navigation">
                <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
                    <li class="has-children">
                    <a href="/">Locations</a>
                    <ul class="dropdown">
                    <!-- À REMPLIR QUAND AVEC UNE BOUCLE DE MES CATÉGORIES -->
                        <li><a href="#">Catégorie location 1</a></li>
                        <li><a href="#">Catégorie location 2</a></li>
                        <li><a href="#">Catégorie location 3</a></li>
                        <li><a href="#">Catégorie location 4</a></li>
                    </ul>
                    </li>
                    <!-- MES AUTRES PAGES  -->
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                    <!-- <li><a href="/admin">ADMIN</a></li> -->
                    <li><router-link to="/Admin">ADMIN</router-link></li>
                </ul>
                </nav>
            </div>
            <!-- MES ICONES SOCIAL MEDIA -->
            <div class="col-6 col-xl-2 text-right">
                <div class="d-none d-xl-inline-block">
                <ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                    <li><a href="#" class="pl-3 pr-3 text-black"><span class="icon-twitter"></span></a></li>
                    <li><a href="#" class="pl-3 pr-3 text-black"><span class="icon-facebook"></span></a></li>
                    <li><a href="#" class="pl-3 pr-3 text-black"><span class="icon-instagram"></span></a></li>
                </ul>
                </div>
                <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;">
                <a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a>
                </div>
            </div>
            </div>
        </div>
        </header>
    </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
