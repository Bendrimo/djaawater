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
var format_Productivitdeseauxsouterrainesls_1 = new ol.format.GeoJSON();
var features_Productivitdeseauxsouterrainesls_1 = format_Productivitdeseauxsouterrainesls_1.readFeatures(json_Productivitdeseauxsouterrainesls_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Productivitdeseauxsouterrainesls_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Productivitdeseauxsouterrainesls_1.addFeatures(features_Productivitdeseauxsouterrainesls_1);
var lyr_Productivitdeseauxsouterrainesls_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Productivitdeseauxsouterrainesls_1, 
                style: style_Productivitdeseauxsouterrainesls_1,
                popuplayertitle: "Productivité des eaux souterraines (l/s)",
                interactive: false,
    title: 'Productivité des eaux souterraines (l/s)<br />\
    <img src="styles/legend/Productivitdeseauxsouterrainesls_1_0.png" /> <0.1<br />\
    <img src="styles/legend/Productivitdeseauxsouterrainesls_1_1.png" /> 0.5-1<br />\
    <img src="styles/legend/Productivitdeseauxsouterrainesls_1_2.png" /> 1-5<br />\
    <img src="styles/legend/Productivitdeseauxsouterrainesls_1_3.png" /> 5-20<br />'
        });
var format_Stockagedeseauxsouterrainesmm_2 = new ol.format.GeoJSON();
var features_Stockagedeseauxsouterrainesmm_2 = format_Stockagedeseauxsouterrainesmm_2.readFeatures(json_Stockagedeseauxsouterrainesmm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stockagedeseauxsouterrainesmm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stockagedeseauxsouterrainesmm_2.addFeatures(features_Stockagedeseauxsouterrainesmm_2);
var lyr_Stockagedeseauxsouterrainesmm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stockagedeseauxsouterrainesmm_2, 
                style: style_Stockagedeseauxsouterrainesmm_2,
                popuplayertitle: "Stockage des eaux souterraines(mm)",
                interactive: false,
    title: 'Stockage des eaux souterraines(mm)<br />\
    <img src="styles/legend/Stockagedeseauxsouterrainesmm_2_0.png" /> <1000<br />\
    <img src="styles/legend/Stockagedeseauxsouterrainesmm_2_1.png" /> 1000 - 25000<br />\
    <img src="styles/legend/Stockagedeseauxsouterrainesmm_2_2.png" /> 25000 - 50000<br />\
    <img src="styles/legend/Stockagedeseauxsouterrainesmm_2_3.png" /> > 50000<br />'
        });
var format_Profondeurdeseauxsouterrainesm_3 = new ol.format.GeoJSON();
var features_Profondeurdeseauxsouterrainesm_3 = format_Profondeurdeseauxsouterrainesm_3.readFeatures(json_Profondeurdeseauxsouterrainesm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Profondeurdeseauxsouterrainesm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Profondeurdeseauxsouterrainesm_3.addFeatures(features_Profondeurdeseauxsouterrainesm_3);
var lyr_Profondeurdeseauxsouterrainesm_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Profondeurdeseauxsouterrainesm_3, 
                style: style_Profondeurdeseauxsouterrainesm_3,
                popuplayertitle: "Profondeur des eaux souterraines(m)",
                interactive: false,
    title: 'Profondeur des eaux souterraines(m)<br />\
    <img src="styles/legend/Profondeurdeseauxsouterrainesm_3_0.png" /> 25- 50<br />\
    <img src="styles/legend/Profondeurdeseauxsouterrainesm_3_1.png" /> 50 -100<br />\
    <img src="styles/legend/Profondeurdeseauxsouterrainesm_3_2.png" /> 100 - 250<br />\
    <img src="styles/legend/Profondeurdeseauxsouterrainesm_3_3.png" /> >250<br />'
        });
var format_geoData_4 = new ol.format.GeoJSON();
var features_geoData_4 = format_geoData_4.readFeatures(json_geoData_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geoData_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geoData_4.addFeatures(features_geoData_4);
var lyr_geoData_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geoData_4, 
                style: style_geoData_4,
                popuplayertitle: "geoData",
                interactive: false,
                    title: '<img src="styles/legend/geoData_4.png" /> geoData'
                });

lyr_GoogleMaps_0.setVisible(true);lyr_Productivitdeseauxsouterrainesls_1.setVisible(true);lyr_Stockagedeseauxsouterrainesmm_2.setVisible(false);lyr_Profondeurdeseauxsouterrainesm_3.setVisible(true);lyr_geoData_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Productivitdeseauxsouterrainesls_1,lyr_Stockagedeseauxsouterrainesmm_2,lyr_Profondeurdeseauxsouterrainesm_3,lyr_geoData_4];
lyr_Productivitdeseauxsouterrainesls_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Stockagedeseauxsouterrainesmm_2.set('fieldAliases', {'fid': 'fid', 'SGW': 'SGW', });
lyr_Profondeurdeseauxsouterrainesm_3.set('fieldAliases', {'fid': 'fid', 'prf': 'prf', });
lyr_geoData_4.set('fieldAliases', {'name': 'name', 'name_ar': 'name_ar', 'name_ber': 'name_ber', 'density': 'density', 'city_code': 'city_code', });
lyr_Productivitdeseauxsouterrainesls_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_Stockagedeseauxsouterrainesmm_2.set('fieldImages', {'fid': 'TextEdit', 'SGW': 'TextEdit', });
lyr_Profondeurdeseauxsouterrainesm_3.set('fieldImages', {'fid': 'TextEdit', 'prf': 'TextEdit', });
lyr_geoData_4.set('fieldImages', {'name': 'TextEdit', 'name_ar': 'TextEdit', 'name_ber': 'TextEdit', 'density': 'KeyValue', 'city_code': 'KeyValue', });
lyr_Productivitdeseauxsouterrainesls_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Stockagedeseauxsouterrainesmm_2.set('fieldLabels', {'fid': 'no label', 'SGW': 'no label', });
lyr_Profondeurdeseauxsouterrainesm_3.set('fieldLabels', {'fid': 'no label', 'prf': 'no label', });
lyr_geoData_4.set('fieldLabels', {'name': 'no label', 'name_ar': 'no label', 'name_ber': 'no label', 'density': 'no label', 'city_code': 'no label', });
lyr_geoData_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});