var dataSet = [
    [ "img/GT72_2QE_DOMINATOR_PRO2.jpg", "MSI GT72 2QE DOMINATOR PRO", "9S7-178144-1245", "74,736,000 VND", "2" ],
    [ "img/GT80_2DQ_TITAN1.jpg", "MSI GT80 2DQ TITAN", "9S7-181212-084", "57,639,000 VND", "1" ],
    [ "img/GT70_2PC_DOMINATOR1.jpg", "MSI GT70 2PE DOMINATOR PRO", "9S7-1763A2-1685", "55,899,000 VND", "3" ],
    [ "img/GT72S_6QE.jpg", "MSI GT72S 6QE Dominator Pro G ", "9S7-178211-097", "54,188,000 VND", "1" ],
    [ "img/GT72_2QD_DOMINATOR1.jpg", "MSI GT72 2QE DOMINATOR PRO", "9S7-178131-466", "48,188,000 VND", "4" ],
    [ "img/GT60_2PC_DOMINATOR1.jpg", "GT60 2PE DOMINATOR PRO", "9S7-16F442-807", "40,999,000 VND", "6" ],
    [ "img/GT70_2PC_DOMINATOR1.jpg", "MSI GT70 2PE DOMINATOR PRO", "9S7-1763A2-1273", "40,999,000 VND", "2" ],
    [ "img/14.png", "MSI GT72 2QE Dominator Pro", "9S7-178131-1411", "38,888,000 VND", "4" ],
    [ "img/GT72_2PC1.jpg", "MSI GT72 2PC DOMINATOR", "9S7-178111-084", "37,799,000 VND", "2" ],
    [ "img/GS70_2QE_1.jpg", "MSI GS70 2QE STEALTH PRO - SILVER EDITION", "9S7-177311-423", "37,799,000 VND", "6" ],
    [ "img/Red1.jpg", "MSI GS70 2QE STEALTH PRO RED EDITION", "9S7-177316-207", "37,799,000 VND", "3" ],
    [ "img/3649.png", "MSI GP62 6QE(Leopard Pro)", "878XVN", "20,888,000 VND", "5" ],
    [ "img/3650.png", "MSI PE60 6QD", "879XVN", "22,399,000 VND", "8" ],
    [ "img/3651.png", "MSI CX62 6QD", "257XVN", "16,399,000 VND", "2" ],
    [ "img/3325.jpeg", "Dell Inspiron 7559", "70071890", "19,089,000 VND", "1" ],
    [ "img/2526.jpeg", "Dell Inspiron 3559", "70073151", "12,890,000 VND", "10" ],
    [ "img/2972.jpeg", "Dell Inspiron 7359", "C3I7117W", "25,090,000 VND", "3" ],
    [ "img/1997.jpeg", "Dell Vostro 3458", "8W9P21", "13,190,000 VND", "2" ],
    [ "img/7559A.jpg", "Dell Inspiron 7559A", "P41F002-TI781004W10", "24,090,000 VND", "6" ],
    [ "img/Y7Y4K1.jpg", "Dell Inspiron 3452", "Y7Y4K1", "7,290,000 VND", "3" ],
    [ "img/F63M01.jpg", "Dell Latitude 3450-BLACK", "F63M01", "10,390,000 VND", "8" ],
    [ "img/57780.jpg", "Dell Vostro 14 5480", "70057780", "15,390,000 VND", "2" ],
    [ "img/70064639.jpg", "Dell Inspiron 5459", "WX9KG1", "14,839,000 VND", "9" ],
    [ "img/a110.jpg", "Dell Vostro 3558-Black", "VTI33011", "9,690,000 VND", "8" ],
    [ "img/1044.jpeg", "Dell XPS 13 9343", "1T7N43", "37,499,000 VND", "3" ],
    [ "img/2974.jpeg", "Dell XPS 13 9343", "70055805", "27,190,000 VND", "4" ],
    [ "img/2002.jpeg", "Dell Inspiron 5548A ", "P41F001-TI78104", "18,390,000 VND", "2" ],
    [ "img/1037.jpeg", "Dell Inspiron 5548B", "P39F001-TI78104W81", "20,290,000 VND", "5" ],
    [ "img/1034.jpeg", "Dell Inspiron 5448", "RJNPG3", "14,690,000 VND", "1" ],
    [ "img/2527.jpeg", "Dell Inspiron 15 N5558", "M5I5359W", "14,390,000 VND", "1" ],
    [ "img/2611.jpeg", "Dell Inspiron 3458", "TXTGH2", "8,990,000 VND", "7" ],
    [ "img/2659.jpeg", "Dell Inspiron N5458A", "P64G001-TI54100", "13,790,000 VND", "1" ],
    [ "img/2836.jpeg", "Dell Inspiron 3558", "P9DYT1", "11,490,000 VND", "4" ],
    [ "img/3126.jpeg", "Dell Inspiron N5559", "M5I5452W", "15,190,000 VND", "8" ],
    [ "img/3266.jpeg", "Dell Inspiron 5458", "70069879", "16,190,000 VND", "1" ]
];
 
(function() {
    console.log('hello');
    $('#example').DataTable( {
        data: dataSet,
        columns: [
            { title: "Image",
                "render": function(data, type, row) {
                    return '<img class="image-icon" src="'+data+'" />';
                }

             },
            { title: "Name" },
            { title: "Code" },
            { title: "Price" },
            { title: "Number" }
        ]
    } );
})();