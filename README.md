<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <!--
  Customize this policy to fit your own app's needs. For more guidance, please refer to the docs:
      https://cordova.apache.org/docs/en/latest/
  Some notes:
    * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
    * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
      * Enable inline JS: add 'unsafe-inline' to default-src
  -->
  <meta http-equiv="Content-Security-Policy"
    content="default-src * 'self' 'unsafe-inline' 'unsafe-eval' data: content:">
  <meta name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">

  <meta name="theme-color" content="#fff">
  <meta name="format-detection" content="telephone=no">
  <meta name="msapplication-tap-highlight" content="no">
  <title>Cuestionario</title>




  <link rel="stylesheet" href="framework7/framework7-bundle.min.css">
  <link rel="stylesheet" href="css/icons.css">
  <link rel="stylesheet" href="css/app.css">
</head>

<body>
  <div id="app">
    <!-- Your main view, should have "view-main" class -->
    <div class="view view-main view-init safe-areas">
      <div class="page" data-name="home">
        <!-- Top Navbar -->
        <div class="navbar navbar-large">
          <div class="navbar-bg"></div>
          <div class="navbar-inner">

            <div class="title sliding">ApManga</div>

            <div class="title-large">
              <div class="title-large-text">ApManga</div>
            </div>
          </div>
        </div>
        <!-- Bottom Toolbar -->
        <div class="toolbar toolbar-bottom">
          <div class="toolbar-inner">
            <!-- Toolbar links -->
            <a href="/pregunta0/" class="disabled"><i class="f7-icons">arrow_left</i></a>
            <a href="/pregunta1/" class=""><i class="f7-icons">arrow_right</i></a>
          </div>
        </div>
        <!-- Scrollable page content-->
        <div class="page-content">
          <div class="block-title ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis optio fugit, culpa, necessitatibus numquam
            eos animi fuga incidunt maxime quae pariatur delectus dolores? Repellat aspernatur eum consectetur provident
            accusamus eos nihil vitae tempore perspiciatis mollitia ea ipsum nisi quis assumenda facilis, cupiditate
            qui. Laboriosam aut tempora ullam quos eum alias!

          </div>
          <div class="block-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ducimus ab
            doloremque odio aspernatur repellendus illum amet illo, assumenda harum ipsum expedita quasi facere nisi,
            magnam porro similique, provident reprehenderit repudiandae quae dolorem maiores. Itaque quia molestias nam
            vel deserunt voluptatum autem tenetur sunt obcaecati ab inventore nihil, unde iste laudantium eligendi
            aliquid natus voluptate minus expedita culpa rerum. Iusto exercitationem quaerat est quo nostrum quia
            praesentium sed iste, rerum, ullam neque, totam quasi voluptatum accusantium sapiente saepe dolor amet!
            Nihil consequuntur ea voluptates eaque fugiat unde itaque, vitae quae possimus ipsam eveniet quidem, nisi
            quos quis cumque! Eius.</div>
          <div class="block block-strong">
            <div class="row">
              <div class="col-25"></div>

              <div class="col-50">
                <a href="#" class="button button-raised button-fill login-screen-open"
                  data-login-screen="#my-login-screen">Login</a>
              </div>
              <div class="col-25"></div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>


  <!-- Popup -->


  <!-- Login Screen -->
  <div class="login-screen" id="my-login-screen">
    <div class="view">
      <div class="page">
        <div class="page-content login-screen-content">
          <div class="login-screen-title">Login</div>
          <div class="list">
            <ul>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Username</div>
                  <div class="item-input-wrap">

                    <input type="text" name="username" placeholder="Tu nombre de usuario" />
                  </div>
                </div>
              </li>
              <li class="item-content item-input">
                <div class="item-inner">
                  <div class="item-title item-label">Contrase??a</div>
                  <div class="item-input-wrap">

                    <input type="password" name="password" placeholder="Tu contrase??a" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="list">
            <ul>
              <li>

                <a href="#" class="item-link list-button login-button">Iniciar sesi??n</a>

              </li>
            </ul>
            <div class="block-footer">Some text about login information.<br />Click "Sign In" to close Login Screen
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!-- CORDOVA_PLACEHOLDER_DONT_REMOVE -->
  <!-- Framework7 library -->
  <script src="framework7/framework7-bundle.min.js"></script>
  <!-- Cordova APIs 
  <script src="js/cordova-app.js"></script>-->

  <!-- App routes -->
  <script src="js/routes.js"></script>
  <!-- App store -->
  <script src="js/store.js"></script>
  <!-- App scripts -->
  <script src="js/app.js"></script>

</body>

</html>
