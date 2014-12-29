<?
  if (isset($_POST['tab'])) {
   $tab = $_POST["tab"];
  }

  $top_five = array(
    "model" => array(
      "kitty" => array(
        "image" => "img/home_top_5_dummy.jpg",
        "name" => "Modell Kitty",
        "user" => "FooBar",
        "text" => "Hello World .."
      )
    )
  );
?>

<? foreach ($top_five[$tab] as $key => $value): ?>
<li>
  <div class="act-item clearfix row">
    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10">
      <figure class="act-item-pic">
        <a href="#"><img src="<?= $value['image'];?>" alt=""></a>
      </figure>
      <div class="act-item-text">
        <a class="name" title="Rosé Bordell" href="index-top5_link.html"><?=$value['name'];?></a>
        <p class="rating sprites-stars stars-5"></p>
        <a href="#"><?=$value['user'];?></a> <?=$value['text'];?>
      </div>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
      <p class="act-item-more pull-right cat-item">
        <img src="img/morearr.jpg" alt="Arrow"> mehr
      </p>
    </div>
  </div>
</li>
<? endforeach; ?>