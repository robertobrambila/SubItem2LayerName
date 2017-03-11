//SubItem2LayerName
//
//Roberto Brambila
//www.robertobrambila.com
// 

var layerSelected = app.activeDocument.activeLayer;

for ( i = 0;  i < layerSelected.pageItems.length; i++ ) {
  var newLayer = app.activeDocument.layers.add();
  newLayer.name = layerSelected.pageItems[i].name;
  layerSelected.pageItems[i].duplicate(newLayer, ElementPlacement.INSIDE);
}

layerSelected.visible = false;
alert("Done!");