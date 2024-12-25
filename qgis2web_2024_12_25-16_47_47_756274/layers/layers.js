var wms_layers = [];

var format_2563_0 = new ol.format.GeoJSON();
var features_2563_0 = format_2563_0.readFeatures(json_2563_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2563_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2563_0.addFeatures(features_2563_0);
var lyr_2563_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2563_0, 
                style: style_2563_0,
                popuplayertitle: 'คะแนนเลือกตั้งนายก 2563 รายตำบล',
                interactive: false,
    title: 'คะแนนเลือกตั้งนายก 2563 รายตำบล<br />\
    <img src="styles/legend/2563_0_0.png" /> 0.20 - 0.29<br />\
    <img src="styles/legend/2563_0_1.png" /> 0.29 - 0.38<br />\
    <img src="styles/legend/2563_0_2.png" /> 0.38 - 0.47<br />\
    <img src="styles/legend/2563_0_3.png" /> 0.47 - 0.56<br />\
    <img src="styles/legend/2563_0_4.png" /> 0.56 - 0.65<br />'
        });
var format_175_1 = new ol.format.GeoJSON();
var features_175_1 = format_175_1.readFeatures(json_175_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_175_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_175_1.addFeatures(features_175_1);
var lyr_175_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_175_1, 
                style: style_175_1,
                popuplayertitle: 'คะแนน 175 หมู่บ้าน',
                interactive: true,
                title: '<img src="styles/legend/175_1.png" /> คะแนน 175 หมู่บ้าน'
            });

lyr_2563_0.setVisible(true);lyr_175_1.setVisible(true);
var layersList = [lyr_2563_0,lyr_175_1];
lyr_2563_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'P_CODE': 'P_CODE', 'A_CODE': 'A_CODE', 'T_CODE': 'T_CODE', 'P_NAME_T': 'ตำบล', 'P_NAME_E': 'P_NAME_E', 'A_NAME_T': 'อำเภอ', 'A_NAME_E': 'A_NAME_E', 'T_NAME_T': 'ตำบล', 'T_NAME_E': 'T_NAME_E', 'jim_%': 'jim_%', });
lyr_175_1.set('fieldAliases', {'fid_l08_vi': 'fid_l08_vi', 'p_code': 'p_code', 'a_code': 'a_code', 't_code': 't_code', 'v_code': 'v_code', 'p_name_t': 'p_name_t', 'p_name_e': 'p_name_e', 'a_name_t': 'อำเภอ', 'a_name_e': 'a_name_e', 't_name_t': 'ตำบล', 't_name_e': 't_name_e', 'v_name_t': 'ชื่อหมู่บ้าน', 'v_name_e': 'v_name_e', 'source_dat': 'source_dat', 'fid_l05_ta': 'fid_l05_ta', 'tambon_t': 'tambon_t', 'tambon_e': 'tambon_e', 'amphoe_t': 'amphoe_t', 'amphoe_e': 'amphoe_e', 'changwat_t': 'changwat_t', 'changwat_e': 'changwat_e', 'ta_id': 'ta_id', 're_nesdb': 're_nesdb', 're_royin': 're_royin', 'oid_': 'oid_', 'objectid': 'objectid', 'admin_code': 'admin_code', 'p_code_1': 'p_code_1', 'a_code_1': 'a_code_1', 't_code_1': 't_code_1', 'v_code_1': 'หมู่ที่', 'p_name_t_1': 'p_name_t_1', 't_name_e_1': 't_name_e_1', 'v_name_t_1': 'v_name_t_1', 'v_name_e_1': 'v_name_e_1', 'v_num': 'หมู่ที่', 'source_n_1': 'source_n_1', 'source_d_1': 'source_d_1', '175village_SUM of นายจักรพันธ์': 'คะแนนนายกจิม', '175village_SUM of นายสิทธิชัย': 'คะแนนสิทธิชัย', '175village_SUM of นายมารุต': 'คะแนนมารุต', '175village_jim%': 'เปอร์เซ็นต์นายกจิม', });
lyr_2563_0.set('fieldImages', {'OBJECTID': 'Range', 'P_CODE': 'TextEdit', 'A_CODE': 'TextEdit', 'T_CODE': 'TextEdit', 'P_NAME_T': 'TextEdit', 'P_NAME_E': 'TextEdit', 'A_NAME_T': 'TextEdit', 'A_NAME_E': 'TextEdit', 'T_NAME_T': 'TextEdit', 'T_NAME_E': 'TextEdit', 'jim_%': 'TextEdit', });
lyr_175_1.set('fieldImages', {'fid_l08_vi': 'TextEdit', 'p_code': 'TextEdit', 'a_code': 'TextEdit', 't_code': 'TextEdit', 'v_code': 'TextEdit', 'p_name_t': 'TextEdit', 'p_name_e': 'TextEdit', 'a_name_t': 'TextEdit', 'a_name_e': 'TextEdit', 't_name_t': 'TextEdit', 't_name_e': 'TextEdit', 'v_name_t': 'TextEdit', 'v_name_e': 'TextEdit', 'source_dat': 'DateTime', 'fid_l05_ta': 'TextEdit', 'tambon_t': 'TextEdit', 'tambon_e': 'TextEdit', 'amphoe_t': 'TextEdit', 'amphoe_e': 'TextEdit', 'changwat_t': 'TextEdit', 'changwat_e': 'TextEdit', 'ta_id': 'TextEdit', 're_nesdb': 'TextEdit', 're_royin': 'TextEdit', 'oid_': 'TextEdit', 'objectid': 'TextEdit', 'admin_code': 'TextEdit', 'p_code_1': 'TextEdit', 'a_code_1': 'TextEdit', 't_code_1': 'TextEdit', 'v_code_1': 'TextEdit', 'p_name_t_1': 'TextEdit', 't_name_e_1': 'TextEdit', 'v_name_t_1': 'TextEdit', 'v_name_e_1': 'TextEdit', 'v_num': 'TextEdit', 'source_n_1': 'TextEdit', 'source_d_1': 'DateTime', '175village_SUM of นายจักรพันธ์': 'TextEdit', '175village_SUM of นายสิทธิชัย': 'TextEdit', '175village_SUM of นายมารุต': 'TextEdit', '175village_jim%': 'TextEdit', });
lyr_2563_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'P_CODE': 'hidden field', 'A_CODE': 'hidden field', 'T_CODE': 'hidden field', 'P_NAME_T': 'hidden field', 'P_NAME_E': 'hidden field', 'A_NAME_T': 'inline label - visible with data', 'A_NAME_E': 'hidden field', 'T_NAME_T': 'inline label - visible with data', 'T_NAME_E': 'hidden field', 'jim_%': 'hidden field', });
lyr_175_1.set('fieldLabels', {'fid_l08_vi': 'hidden field', 'p_code': 'hidden field', 'a_code': 'hidden field', 't_code': 'hidden field', 'v_code': 'hidden field', 'p_name_t': 'hidden field', 'p_name_e': 'hidden field', 'a_name_t': 'inline label - always visible', 'a_name_e': 'hidden field', 't_name_t': 'inline label - always visible', 't_name_e': 'hidden field', 'v_name_t': 'inline label - visible with data', 'v_name_e': 'hidden field', 'source_dat': 'hidden field', 'fid_l05_ta': 'hidden field', 'tambon_t': 'hidden field', 'tambon_e': 'hidden field', 'amphoe_t': 'hidden field', 'amphoe_e': 'hidden field', 'changwat_t': 'hidden field', 'changwat_e': 'hidden field', 'ta_id': 'hidden field', 're_nesdb': 'hidden field', 're_royin': 'hidden field', 'oid_': 'hidden field', 'objectid': 'hidden field', 'admin_code': 'hidden field', 'p_code_1': 'hidden field', 'a_code_1': 'hidden field', 't_code_1': 'hidden field', 'v_code_1': 'inline label - always visible', 'p_name_t_1': 'hidden field', 't_name_e_1': 'hidden field', 'v_name_t_1': 'hidden field', 'v_name_e_1': 'hidden field', 'v_num': 'hidden field', 'source_n_1': 'hidden field', 'source_d_1': 'hidden field', '175village_SUM of นายจักรพันธ์': 'inline label - always visible', '175village_SUM of นายสิทธิชัย': 'inline label - always visible', '175village_SUM of นายมารุต': 'inline label - always visible', '175village_jim%': 'inline label - always visible', });
lyr_175_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});