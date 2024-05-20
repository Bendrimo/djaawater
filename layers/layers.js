var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_alp1_1 = new ol.format.GeoJSON();
var features_alp1_1 = format_alp1_1.readFeatures(json_alp1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alp1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alp1_1.addFeatures(features_alp1_1);
var lyr_alp1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alp1_1, 
                style: style_alp1_1,
                popuplayertitle: "alp1",
                interactive: false,
    title: 'alp1<br />\
    <img src="styles/legend/alp1_1_0.png" /> 5- 20<br />\
    <img src="styles/legend/alp1_1_1.png" /> 1- 5<br />\
    <img src="styles/legend/alp1_1_2.png" /> 0.5 -1<br />\
    <img src="styles/legend/alp1_1_3.png" /> <0.1<br />'
        });
var format_geoData_2 = new ol.format.GeoJSON();
var features_geoData_2 = format_geoData_2.readFeatures(json_geoData_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geoData_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geoData_2.addFeatures(features_geoData_2);
var lyr_geoData_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geoData_2, 
                style: style_geoData_2,
                popuplayertitle: "geoData",
                interactive: false,
                    title: '<img src="styles/legend/geoData_2.png" /> geoData'
                });

lyr_GoogleMaps_0.setVisible(true);lyr_alp1_1.setVisible(true);lyr_geoData_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_alp1_1,lyr_geoData_2];
lyr_alp1_1.set('fieldAliases', {'fid': 'fid', 'index': 'index', '_255_min': '_255_min', '_255_max': '_255_max', 'label': 'label', });
lyr_geoData_2.set('fieldAliases', {'name': 'name', 'name_ar': 'name_ar', 'name_ber': 'name_ber', 'density': 'density', 'city_code': 'city_code', });
lyr_alp1_1.set('fieldImages', {'fid': 'TextEdit', 'index': 'Range', '_255_min': 'TextEdit', '_255_max': 'TextEdit', 'label': 'TextEdit', });
lyr_geoData_2.set('fieldImages', {'name': 'TextEdit', 'name_ar': 'TextEdit', 'name_ber': 'TextEdit', 'density': 'KeyValue', 'city_code': 'KeyValue', });
lyr_alp1_1.set('fieldLabels', {'fid': 'no label', 'index': 'no label', '_255_min': 'no label', '_255_max': 'no label', 'label': 'no label', });
lyr_geoData_2.set('fieldLabels', {'name': 'no label', 'name_ar': 'no label', 'name_ber': 'no label', 'density': 'no label', 'city_code': 'no label', });
lyr_geoData_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});