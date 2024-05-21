var size = 0;
var placement = 'point';

var style_Stockagedeseauxsouterrainesmm_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("SGW");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 1000.000000 && value <= 10500.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(186,227,233,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10500.000000 && value <= 35000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(151,181,237,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 35000.000000 && value <= 37500.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(122,178,225,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 37500.000000 && value <= 50000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(45,47,130,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
