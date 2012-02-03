(function() {
	tinymce.create('tinymce.plugins.accessibleyoutube', {
		init : function(ed, url) {
			ed.addCommand('accessibleyoutube', function() {
				ed.windowManager.open({
					file : url + '/window.php',
					width : 420,
					height : 300,
					inline : 1
				}, {
					plugin_url : url, // Plugin absolute URL
					some_custom_arg : 'custom arg' // Custom argument
				});
			});
            
			ed.addButton('accessibleyoutube', {
				title : 'accessibleyoutube.desc',
				cmd : 'accessibleyoutube',
				image : url + '/image_add.png'
			});

			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('accessibleyoutube', n.nodeName == 'IMG');
			});
		},
		createControl : function(n, cm) {
			return null;
		},

		getInfo : function() {
			return {
				longname : 'AccessibleYouTube',
				author : 'Jannick Bolten',
				authorurl : 'http://www.jannickbolten.nl',
				infourl : 'http://www.jannickbolten.nl',
				version : "1.0"
			};
		}
	});
	tinymce.PluginManager.add('accessibleyoutube', tinymce.plugins.accessibleyoutube);
})();
