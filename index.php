<html>

<head>    
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" ></script>
<jdoc:include type="head" />
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template;?>/css/algemeen_opmaak.css" type="text/css" />
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template;?>/css/projecten_viewer.css" type="text/css" />
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template;?>/css/emailform.css" type="text/css" />
<script type="text/javaScript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template;?>/js/video_achtergrond.js"></script>
<script type="text/javaScript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template;?>/js/menu_ui.js"></script>
<script type="text/javaScript" src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template;?>/js/foto_viewer_liquid_images.js"></script>
<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
</head>

  
  
    <body>
    <div id="honey_overlay">
      <div id="nav_bar">
        <div id="nav_area">
        <jdoc:include type="modules" name="top_menu" />
        </div>
        
        <div id="social_area">
        <jdoc:include type="modules" name="sub_menu" />
        </div>      
      </div>
      
      <div id="content">
        <div id="headline">
        <jdoc:include type="component" />
        <jdoc:include type="modules" name="sub_content0" />
        <jdoc:include type="modules" name="sub_content1" />
        </div>
        
                <div id="sub_line">
        </div>
      </div>
      <div style="clear: both;"></div>
        
    </div>

    </body>
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-40789483-1', 'bosserssoundenlight.nl');
  ga('send', 'pageview');

</script>

</html>