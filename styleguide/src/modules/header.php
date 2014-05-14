<header class="l-header header" role="banner">

  <div class="container">

    <div class="l-branding">

      <a href="#" title="Home" rel="home" class="logo"> <span class="element-invisible">Greenpeace Greenwire Nederland </span></a>

    </div>

    <div class="l-header-navigation">

      <div class="mobile-nav">
        <a id="main-menu-show" href="#primary-nav" data-nav="js-nav" class="nav-btn icon-menu">
          <span class="element-invisible">Show primary navigation</span>
        </a>
        <a id="secondary-menu-show" href="#secondary-nav" data-nav="js-nav2" class="nav-btn icon-user">
          <span class="element-invisible">Show secondary navigation</span>
        </a>
        <!--<a id="main-menu-hide" href="#" class="icon-menu"><span class="element-invisible">Hide Navigation</span></a>-->
      </div>

      <div id="primary-nav">
      <!-- remove .block for all header blocks so we can style the rest of the blocks with a single selector -->
        <div class="block-search">
          <?php include('modules/search.php'); ?>
        </div>

        <nav class="main-menu" role="navigation">
          <?php include('modules/main-menu.php'); ?>
        </nav>

      </div>

      <div id="secondary-nav">

      </div>


    </div> <!-- end l-header-navigation -->

  </div>

</header>
