div.classe
crea giá la classe in default

DRY don't repeat yourself

https://picsum.photos/200/ random pictures

how to create a columng of pictures:
<div class="row">
  <div class="column">
    <img src="img_snow.jpg" alt="Snow" style="width:100%">
  </div>
  <div class="column">
    <img src="img_forest.jpg" alt="Forest" style="width:100%">
  </div>
  <div class="column">
    <img src="img_mountains.jpg" alt="Mountains" style="width:100%">
  </div>
</div>

.row {
  display: flex;
}

.column {
  flex: 33.33%;
  padding: 5px;
}