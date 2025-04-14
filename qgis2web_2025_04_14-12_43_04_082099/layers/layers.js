var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_jalannangglo_1 = new ol.format.GeoJSON();
var features_jalannangglo_1 = format_jalannangglo_1.readFeatures(json_jalannangglo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalannangglo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalannangglo_1.addFeatures(features_jalannangglo_1);
var lyr_jalannangglo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalannangglo_1, 
                style: style_jalannangglo_1,
                popuplayertitle: 'jalan nangglo',
                interactive: true,
                title: '<img src="styles/legend/jalannangglo_1.png" /> jalan nangglo'
            });
var format_hitungtitik_2 = new ol.format.GeoJSON();
var features_hitungtitik_2 = format_hitungtitik_2.readFeatures(json_hitungtitik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hitungtitik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hitungtitik_2.addFeatures(features_hitungtitik_2);
var lyr_hitungtitik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hitungtitik_2, 
                style: style_hitungtitik_2,
                popuplayertitle: 'hitung titik',
                interactive: true,
                title: '<img src="styles/legend/hitungtitik_2.png" /> hitung titik'
            });
var format_hitungtitik_3 = new ol.format.GeoJSON();
var features_hitungtitik_3 = format_hitungtitik_3.readFeatures(json_hitungtitik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hitungtitik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hitungtitik_3.addFeatures(features_hitungtitik_3);
var lyr_hitungtitik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hitungtitik_3, 
                style: style_hitungtitik_3,
                popuplayertitle: 'hitung titik',
                interactive: true,
                title: '<img src="styles/legend/hitungtitik_3.png" /> hitung titik'
            });
var format_JalurTransjakarta_4 = new ol.format.GeoJSON();
var features_JalurTransjakarta_4 = format_JalurTransjakarta_4.readFeatures(json_JalurTransjakarta_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalurTransjakarta_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalurTransjakarta_4.addFeatures(features_JalurTransjakarta_4);
var lyr_JalurTransjakarta_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalurTransjakarta_4, 
                style: style_JalurTransjakarta_4,
                popuplayertitle: 'Jalur Transjakarta',
                interactive: true,
                title: '<img src="styles/legend/JalurTransjakarta_4.png" /> Jalur Transjakarta'
            });
var format_Pusat_Perbelanjaan_5 = new ol.format.GeoJSON();
var features_Pusat_Perbelanjaan_5 = format_Pusat_Perbelanjaan_5.readFeatures(json_Pusat_Perbelanjaan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pusat_Perbelanjaan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pusat_Perbelanjaan_5.addFeatures(features_Pusat_Perbelanjaan_5);
var lyr_Pusat_Perbelanjaan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pusat_Perbelanjaan_5, 
                style: style_Pusat_Perbelanjaan_5,
                popuplayertitle: 'Pusat_Perbelanjaan',
                interactive: true,
                title: '<img src="styles/legend/Pusat_Perbelanjaan_5.png" /> Pusat_Perbelanjaan'
            });
var format_titikbanjirdariberita_6 = new ol.format.GeoJSON();
var features_titikbanjirdariberita_6 = format_titikbanjirdariberita_6.readFeatures(json_titikbanjirdariberita_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikbanjirdariberita_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikbanjirdariberita_6.addFeatures(features_titikbanjirdariberita_6);
var lyr_titikbanjirdariberita_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_titikbanjirdariberita_6, 
                style: style_titikbanjirdariberita_6,
                popuplayertitle: 'titik banjir dari berita',
                interactive: true,
                title: '<img src="styles/legend/titikbanjirdariberita_6.png" /> titik banjir dari berita'
            });
var format_kel3titik16_7 = new ol.format.GeoJSON();
var features_kel3titik16_7 = format_kel3titik16_7.readFeatures(json_kel3titik16_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel3titik16_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel3titik16_7.addFeatures(features_kel3titik16_7);
var lyr_kel3titik16_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kel3titik16_7, 
                style: style_kel3titik16_7,
                popuplayertitle: 'kel 3 titik 16',
                interactive: true,
                title: '<img src="styles/legend/kel3titik16_7.png" /> kel 3 titik 16'
            });
var format_Buffered_8 = new ol.format.GeoJSON();
var features_Buffered_8 = format_Buffered_8.readFeatures(json_Buffered_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_8.addFeatures(features_Buffered_8);
var lyr_Buffered_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_8, 
                style: style_Buffered_8,
                popuplayertitle: 'Buffered',
                interactive: true,
                title: '<img src="styles/legend/Buffered_8.png" /> Buffered'
            });
var format_Clipped_9 = new ol.format.GeoJSON();
var features_Clipped_9 = format_Clipped_9.readFeatures(json_Clipped_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_9.addFeatures(features_Clipped_9);
var lyr_Clipped_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_9, 
                style: style_Clipped_9,
                popuplayertitle: 'Clipped',
                interactive: true,
                title: '<img src="styles/legend/Clipped_9.png" /> Clipped'
            });
var format_PELABUHAN_PT_50K_10 = new ol.format.GeoJSON();
var features_PELABUHAN_PT_50K_10 = format_PELABUHAN_PT_50K_10.readFeatures(json_PELABUHAN_PT_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PELABUHAN_PT_50K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PELABUHAN_PT_50K_10.addFeatures(features_PELABUHAN_PT_50K_10);
var lyr_PELABUHAN_PT_50K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PELABUHAN_PT_50K_10, 
                style: style_PELABUHAN_PT_50K_10,
                popuplayertitle: 'PELABUHAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PELABUHAN_PT_50K_10.png" /> PELABUHAN_PT_50K'
            });
var format_INDUSTRI_PT_50K_11 = new ol.format.GeoJSON();
var features_INDUSTRI_PT_50K_11 = format_INDUSTRI_PT_50K_11.readFeatures(json_INDUSTRI_PT_50K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDUSTRI_PT_50K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDUSTRI_PT_50K_11.addFeatures(features_INDUSTRI_PT_50K_11);
var lyr_INDUSTRI_PT_50K_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDUSTRI_PT_50K_11, 
                style: style_INDUSTRI_PT_50K_11,
                popuplayertitle: 'INDUSTRI_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/INDUSTRI_PT_50K_11.png" /> INDUSTRI_PT_50K'
            });
var format_DERMAGA_PT_50K_12 = new ol.format.GeoJSON();
var features_DERMAGA_PT_50K_12 = format_DERMAGA_PT_50K_12.readFeatures(json_DERMAGA_PT_50K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERMAGA_PT_50K_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERMAGA_PT_50K_12.addFeatures(features_DERMAGA_PT_50K_12);
var lyr_DERMAGA_PT_50K_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DERMAGA_PT_50K_12, 
                style: style_DERMAGA_PT_50K_12,
                popuplayertitle: 'DERMAGA_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/DERMAGA_PT_50K_12.png" /> DERMAGA_PT_50K'
            });
var format_TERMINALBUS_PT_50K_13 = new ol.format.GeoJSON();
var features_TERMINALBUS_PT_50K_13 = format_TERMINALBUS_PT_50K_13.readFeatures(json_TERMINALBUS_PT_50K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TERMINALBUS_PT_50K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERMINALBUS_PT_50K_13.addFeatures(features_TERMINALBUS_PT_50K_13);
var lyr_TERMINALBUS_PT_50K_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERMINALBUS_PT_50K_13, 
                style: style_TERMINALBUS_PT_50K_13,
                popuplayertitle: 'TERMINALBUS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/TERMINALBUS_PT_50K_13.png" /> TERMINALBUS_PT_50K'
            });
var format_KANTORPLN_PT_50K_14 = new ol.format.GeoJSON();
var features_KANTORPLN_PT_50K_14 = format_KANTORPLN_PT_50K_14.readFeatures(json_KANTORPLN_PT_50K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTORPLN_PT_50K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORPLN_PT_50K_14.addFeatures(features_KANTORPLN_PT_50K_14);
var lyr_KANTORPLN_PT_50K_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KANTORPLN_PT_50K_14, 
                style: style_KANTORPLN_PT_50K_14,
                popuplayertitle: 'KANTORPLN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/KANTORPLN_PT_50K_14.png" /> KANTORPLN_PT_50K'
            });
var format_LAYANANKESEHATAN_PT_50K_15 = new ol.format.GeoJSON();
var features_LAYANANKESEHATAN_PT_50K_15 = format_LAYANANKESEHATAN_PT_50K_15.readFeatures(json_LAYANANKESEHATAN_PT_50K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAYANANKESEHATAN_PT_50K_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAYANANKESEHATAN_PT_50K_15.addFeatures(features_LAYANANKESEHATAN_PT_50K_15);
var lyr_LAYANANKESEHATAN_PT_50K_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAYANANKESEHATAN_PT_50K_15, 
                style: style_LAYANANKESEHATAN_PT_50K_15,
                popuplayertitle: 'LAYANANKESEHATAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/LAYANANKESEHATAN_PT_50K_15.png" /> LAYANANKESEHATAN_PT_50K'
            });
var format_PUSKESMAS_PT_50K_16 = new ol.format.GeoJSON();
var features_PUSKESMAS_PT_50K_16 = format_PUSKESMAS_PT_50K_16.readFeatures(json_PUSKESMAS_PT_50K_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMAS_PT_50K_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMAS_PT_50K_16.addFeatures(features_PUSKESMAS_PT_50K_16);
var lyr_PUSKESMAS_PT_50K_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSKESMAS_PT_50K_16, 
                style: style_PUSKESMAS_PT_50K_16,
                popuplayertitle: 'PUSKESMAS_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PUSKESMAS_PT_50K_16.png" /> PUSKESMAS_PT_50K'
            });
var format_PENDIDIKAN_PT_50K_17 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_17 = format_PENDIDIKAN_PT_50K_17.readFeatures(json_PENDIDIKAN_PT_50K_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_50K_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_50K_17.addFeatures(features_PENDIDIKAN_PT_50K_17);
var lyr_PENDIDIKAN_PT_50K_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_50K_17, 
                style: style_PENDIDIKAN_PT_50K_17,
                popuplayertitle: 'PENDIDIKAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_50K_17.png" /> PENDIDIKAN_PT_50K'
            });
var format_JEMBATAN_PT_50K_18 = new ol.format.GeoJSON();
var features_JEMBATAN_PT_50K_18 = format_JEMBATAN_PT_50K_18.readFeatures(json_JEMBATAN_PT_50K_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_PT_50K_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_PT_50K_18.addFeatures(features_JEMBATAN_PT_50K_18);
var lyr_JEMBATAN_PT_50K_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JEMBATAN_PT_50K_18, 
                style: style_JEMBATAN_PT_50K_18,
                popuplayertitle: 'JEMBATAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_PT_50K_18.png" /> JEMBATAN_PT_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_jalannangglo_1.setVisible(true);lyr_hitungtitik_2.setVisible(true);lyr_hitungtitik_3.setVisible(true);lyr_JalurTransjakarta_4.setVisible(true);lyr_Pusat_Perbelanjaan_5.setVisible(true);lyr_titikbanjirdariberita_6.setVisible(true);lyr_kel3titik16_7.setVisible(true);lyr_Buffered_8.setVisible(true);lyr_Clipped_9.setVisible(true);lyr_PELABUHAN_PT_50K_10.setVisible(true);lyr_INDUSTRI_PT_50K_11.setVisible(true);lyr_DERMAGA_PT_50K_12.setVisible(true);lyr_TERMINALBUS_PT_50K_13.setVisible(true);lyr_KANTORPLN_PT_50K_14.setVisible(true);lyr_LAYANANKESEHATAN_PT_50K_15.setVisible(true);lyr_PUSKESMAS_PT_50K_16.setVisible(true);lyr_PENDIDIKAN_PT_50K_17.setVisible(true);lyr_JEMBATAN_PT_50K_18.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_jalannangglo_1,lyr_hitungtitik_2,lyr_hitungtitik_3,lyr_JalurTransjakarta_4,lyr_Pusat_Perbelanjaan_5,lyr_titikbanjirdariberita_6,lyr_kel3titik16_7,lyr_Buffered_8,lyr_Clipped_9,lyr_PELABUHAN_PT_50K_10,lyr_INDUSTRI_PT_50K_11,lyr_DERMAGA_PT_50K_12,lyr_TERMINALBUS_PT_50K_13,lyr_KANTORPLN_PT_50K_14,lyr_LAYANANKESEHATAN_PT_50K_15,lyr_PUSKESMAS_PT_50K_16,lyr_PENDIDIKAN_PT_50K_17,lyr_JEMBATAN_PT_50K_18];
lyr_jalannangglo_1.set('fieldAliases', {'id': 'id', 'nama_jln': 'nama_jln', });
lyr_hitungtitik_2.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', 'NUMPOINTS': 'NUMPOINTS', });
lyr_hitungtitik_3.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', 'NUMPOINTS': 'NUMPOINTS', });
lyr_JalurTransjakarta_4.set('fieldAliases', {'KORIDOR': 'KORIDOR', 'JURUSAN': 'JURUSAN', 'status': 'status', });
lyr_Pusat_Perbelanjaan_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMA': 'NAMA', 'JENIS': 'JENIS', 'KELURAHAN': 'KELURAHAN', 'KECAMATAN': 'KECAMATAN', 'KOTA_ADMIN': 'KOTA_ADMIN', 'ALAMAT': 'ALAMAT', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_titikbanjirdariberita_6.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'label': 'label', });
lyr_kel3titik16_7.set('fieldAliases', {'name': 'name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Buffered_8.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fid': 'fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'adatgl': 'adatgl', 'dmax': 'dmax', 'fngair': 'fngair', 'jnssng': 'jnssng', 'klssng': 'klssng', 'ltksgi': 'ltksgi', 'namws': 'namws', 'status': 'status', 'ukrsgi': 'ukrsgi', 'wmax': 'wmax', 'dbtmxs': 'dbtmxs', 'namdas': 'namdas', 'shape_leng': 'shape_leng', });
lyr_Clipped_9.set('fieldAliases', {'name': 'name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_PELABUHAN_PT_50K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ADMPEL': 'ADMPEL', 'JNSPEL': 'JNSPEL', 'FGSPEL': 'FGSPEL', 'PJAPEL': 'PJAPEL', 'LAMPEL': 'LAMPEL', 'STUPEL': 'STUPEL', 'KONKON': 'KONKON', 'LUAS': 'LUAS', 'KMXPEL': 'KMXPEL', 'KMNPEL': 'KMNPEL', 'STPPEL': 'STPPEL', 'SRPPEL': 'SRPPEL', 'ALJPEL': 'ALJPEL', 'REMARK': 'REMARK', 'KLSPEL': 'KLSPEL', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KODPEL': 'KODPEL', });
lyr_INDUSTRI_PT_50K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KLSBBK': 'KLSBBK', 'KLSTKI': 'KLSTKI', 'KLSPRD': 'KLSPRD', 'KLSBMT': 'KLSBMT', 'KLSLOK': 'KLSLOK', 'KLSPRO': 'KLSPRO', 'KLSKOM': 'KLSKOM', 'KLSMOD': 'KLSMOD', 'KLSJNS': 'KLSJNS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_DERMAGA_PT_50K_12.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'PMLDRM': 'PMLDRM', 'OPRDRM': 'OPRDRM', 'LGTDRM': 'LGTDRM', 'LBRDRM': 'LBRDRM', 'LUAS': 'LUAS', 'KDLDRM': 'KDLDRM', 'KSTDRM': 'KSTDRM', 'STRDRM': 'STRDRM', 'REMARK': 'REMARK', 'FGSDRM': 'FGSDRM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TERMINALBUS_PT_50K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KODTRM': 'KODTRM', 'MGTTRM': 'MGTTRM', 'STATRM': 'STATRM', 'KATTRM': 'KATTRM', 'TIPTRM': 'TIPTRM', 'LUAS': 'LUAS', 'THBTRM': 'THBTRM', 'THOTRM': 'THOTRM', 'THSTRM': 'THSTRM', 'KONKON': 'KONKON', 'JLBTRM': 'JLBTRM', 'KEBTRM': 'KEBTRM', 'JLDTRM': 'JLDTRM', 'KEDTRM': 'KEDTRM', 'PARTRM': 'PARTRM', 'KEPTRM': 'KEPTRM', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KANTORPLN_PT_50K_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_LAYANANKESEHATAN_PT_50K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', });
lyr_PUSKESMAS_PT_50K_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_PENDIDIKAN_PT_50K_17.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_JEMBATAN_PT_50K_18.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'JBTJMB': 'JBTJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_jalannangglo_1.set('fieldImages', {'id': 'TextEdit', 'nama_jln': 'TextEdit', });
lyr_hitungtitik_2.set('fieldImages', {'Id': '', 'kecamatan': '', 'NUMPOINTS': '', });
lyr_hitungtitik_3.set('fieldImages', {'Id': 'Range', 'kecamatan': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_JalurTransjakarta_4.set('fieldImages', {'KORIDOR': '', 'JURUSAN': '', 'status': '', });
lyr_Pusat_Perbelanjaan_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMA': 'TextEdit', 'JENIS': 'TextEdit', 'KELURAHAN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KOTA_ADMIN': 'TextEdit', 'ALAMAT': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_titikbanjirdariberita_6.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'label': 'TextEdit', });
lyr_kel3titik16_7.set('fieldImages', {'name': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Buffered_8.set('fieldImages', {'ogc_fid': '', 'fid': '', 'objectid': '', 'namobj': '', 'fcode': '', 'remark': '', 'metadata': '', 'srs_id': '', 'adatgl': '', 'dmax': '', 'fngair': '', 'jnssng': '', 'klssng': '', 'ltksgi': '', 'namws': '', 'status': '', 'ukrsgi': '', 'wmax': '', 'dbtmxs': '', 'namdas': '', 'shape_leng': '', });
lyr_Clipped_9.set('fieldImages', {'name': '', 'Longitude': '', 'Latitude': '', });
lyr_PELABUHAN_PT_50K_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'ADMPEL': 'TextEdit', 'JNSPEL': 'TextEdit', 'FGSPEL': 'TextEdit', 'PJAPEL': 'TextEdit', 'LAMPEL': 'TextEdit', 'STUPEL': 'TextEdit', 'KONKON': 'TextEdit', 'LUAS': 'TextEdit', 'KMXPEL': 'TextEdit', 'KMNPEL': 'TextEdit', 'STPPEL': 'TextEdit', 'SRPPEL': 'TextEdit', 'ALJPEL': 'TextEdit', 'REMARK': 'TextEdit', 'KLSPEL': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KODPEL': 'TextEdit', });
lyr_INDUSTRI_PT_50K_11.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KLSBBK': '', 'KLSTKI': '', 'KLSPRD': '', 'KLSBMT': '', 'KLSLOK': '', 'KLSPRO': '', 'KLSKOM': '', 'KLSMOD': '', 'KLSJNS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_DERMAGA_PT_50K_12.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'PMLDRM': 'TextEdit', 'OPRDRM': 'TextEdit', 'LGTDRM': 'TextEdit', 'LBRDRM': 'TextEdit', 'LUAS': 'TextEdit', 'KDLDRM': 'TextEdit', 'KSTDRM': 'TextEdit', 'STRDRM': 'TextEdit', 'REMARK': 'TextEdit', 'FGSDRM': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_TERMINALBUS_PT_50K_13.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KODTRM': 'TextEdit', 'MGTTRM': 'TextEdit', 'STATRM': 'TextEdit', 'KATTRM': 'TextEdit', 'TIPTRM': 'TextEdit', 'LUAS': 'TextEdit', 'THBTRM': 'TextEdit', 'THOTRM': 'TextEdit', 'THSTRM': 'TextEdit', 'KONKON': 'TextEdit', 'JLBTRM': 'TextEdit', 'KEBTRM': 'TextEdit', 'JLDTRM': 'TextEdit', 'KEDTRM': 'TextEdit', 'PARTRM': 'TextEdit', 'KEPTRM': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_KANTORPLN_PT_50K_14.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_LAYANANKESEHATAN_PT_50K_15.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'SRS_ID': '', 'METADATA': '', 'LKALMT': '', 'TPLYST': '', });
lyr_PUSKESMAS_PT_50K_16.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'SRS_ID': '', 'REMARK': '', 'METADATA': '', 'KWKPKM_': '', 'KMPPKM_': '', 'JPLPKM_': '', 'PKMKODE_': '', 'PKMKAT_': '', 'PKMLMT_': '', });
lyr_PENDIDIKAN_PT_50K_17.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_JEMBATAN_PT_50K_18.set('fieldImages', {'NAMOBJ': '', 'TIPJMB': '', 'FGSJMB': '', 'TONJMB': '', 'TGGJMB': '', 'LBRJMB': '', 'MATJMB': '', 'STRJMB': '', 'DEKJMB': '', 'BTSJMB': '', 'AYUJMB': '', 'JBTJMB': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_jalannangglo_1.set('fieldLabels', {'id': 'no label', 'nama_jln': 'no label', });
lyr_hitungtitik_2.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'no label', 'NUMPOINTS': 'no label', });
lyr_hitungtitik_3.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'no label', 'NUMPOINTS': 'no label', });
lyr_JalurTransjakarta_4.set('fieldLabels', {'KORIDOR': 'no label', 'JURUSAN': 'no label', 'status': 'no label', });
lyr_Pusat_Perbelanjaan_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAMA': 'no label', 'JENIS': 'no label', 'KELURAHAN': 'no label', 'KECAMATAN': 'no label', 'KOTA_ADMIN': 'no label', 'ALAMAT': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', });
lyr_titikbanjirdariberita_6.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'label': 'no label', });
lyr_kel3titik16_7.set('fieldLabels', {'name': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Buffered_8.set('fieldLabels', {'ogc_fid': 'no label', 'fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'adatgl': 'no label', 'dmax': 'no label', 'fngair': 'no label', 'jnssng': 'no label', 'klssng': 'no label', 'ltksgi': 'no label', 'namws': 'no label', 'status': 'no label', 'ukrsgi': 'no label', 'wmax': 'no label', 'dbtmxs': 'no label', 'namdas': 'no label', 'shape_leng': 'no label', });
lyr_Clipped_9.set('fieldLabels', {'name': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_PELABUHAN_PT_50K_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'ADMPEL': 'no label', 'JNSPEL': 'no label', 'FGSPEL': 'no label', 'PJAPEL': 'no label', 'LAMPEL': 'no label', 'STUPEL': 'no label', 'KONKON': 'no label', 'LUAS': 'no label', 'KMXPEL': 'no label', 'KMNPEL': 'no label', 'STPPEL': 'no label', 'SRPPEL': 'no label', 'ALJPEL': 'no label', 'REMARK': 'no label', 'KLSPEL': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KODPEL': 'no label', });
lyr_INDUSTRI_PT_50K_11.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KLSBBK': 'no label', 'KLSTKI': 'no label', 'KLSPRD': 'no label', 'KLSBMT': 'no label', 'KLSLOK': 'no label', 'KLSPRO': 'no label', 'KLSKOM': 'no label', 'KLSMOD': 'no label', 'KLSJNS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_DERMAGA_PT_50K_12.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'PMLDRM': 'no label', 'OPRDRM': 'no label', 'LGTDRM': 'no label', 'LBRDRM': 'no label', 'LUAS': 'no label', 'KDLDRM': 'no label', 'KSTDRM': 'no label', 'STRDRM': 'no label', 'REMARK': 'no label', 'FGSDRM': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TERMINALBUS_PT_50K_13.set('fieldLabels', {'NAMOBJ': 'no label', 'KODTRM': 'no label', 'MGTTRM': 'no label', 'STATRM': 'no label', 'KATTRM': 'no label', 'TIPTRM': 'no label', 'LUAS': 'no label', 'THBTRM': 'no label', 'THOTRM': 'no label', 'THSTRM': 'no label', 'KONKON': 'no label', 'JLBTRM': 'no label', 'KEBTRM': 'no label', 'JLDTRM': 'no label', 'KEDTRM': 'no label', 'PARTRM': 'no label', 'KEPTRM': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_KANTORPLN_PT_50K_14.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_LAYANANKESEHATAN_PT_50K_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'LKALMT': 'no label', 'TPLYST': 'no label', });
lyr_PUSKESMAS_PT_50K_16.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_PENDIDIKAN_PT_50K_17.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_JEMBATAN_PT_50K_18.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'JBTJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_JEMBATAN_PT_50K_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});