// If one needs to side-load scripts for any reason into browser, here are the functions for console.

function loadScript(scriptSrc) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptSrc;
    document.head.appendChild(script);
}

loadScript("/scripts/doctype/js_includes_doctype.jsx?v=07-10-2019_1243&lp=Tue_Jun_04_05_26_19_PDT_2019&c=6_63");

loadScript('/scripts/classes/doctype/GlideList2.js');
