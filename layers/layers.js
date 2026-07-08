var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sleman_joint_1 = new ol.format.GeoJSON();
var features_sleman_joint_1 = format_sleman_joint_1.readFeatures(json_sleman_joint_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sleman_joint_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sleman_joint_1.addFeatures(features_sleman_joint_1);
var lyr_sleman_joint_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sleman_joint_1, 
                style: style_sleman_joint_1,
                popuplayertitle: 'sleman_joint',
                interactive: true,
    title: 'sleman_joint<br />\
    <img src="styles/legend/sleman_joint_1_0.png" /> 32700 - 38500<br />\
    <img src="styles/legend/sleman_joint_1_1.png" /> 38500 - 56200<br />\
    <img src="styles/legend/sleman_joint_1_2.png" /> 56200 - 74500<br />\
    <img src="styles/legend/sleman_joint_1_3.png" /> 74500 - 105300<br />\
    <img src="styles/legend/sleman_joint_1_4.png" /> 105300 - 140300<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_sleman_joint_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sleman_joint_1];
lyr_sleman_joint_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'Jumlah Pen': 'Jumlah Pen', 'Jumlah P_1': 'Jumlah P_1', 'Jumlah P_2': 'Jumlah P_2', });
lyr_sleman_joint_1.set('fieldImages', {'WADMKC': 'TextEdit', 'Jumlah Pen': 'TextEdit', 'Jumlah P_1': 'TextEdit', 'Jumlah P_2': 'TextEdit', });
lyr_sleman_joint_1.set('fieldLabels', {'WADMKC': 'no label', 'Jumlah Pen': 'no label', 'Jumlah P_1': 'no label', 'Jumlah P_2': 'no label', });
lyr_sleman_joint_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});