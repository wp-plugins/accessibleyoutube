function init() {
	tinyMCEPopup.resizeToInnerSize();
}

function getValueFromCheckbox() {
    var titeltonen = document.getElementById('yt_titeltonen');
    if(titeltonen.checked = true)
    {
        return "ja";
    }
    else {
        return "";
    }
}
function get_titeltonen()
{
    for(var i = 0; i < document.accessibleyoutube.yt_titeltonen.length; i++)
    {
        if(document.accessibleyoutube.yt_titeltonen[i].checked){
            return document.accessibleyoutube.yt_titeltonen[i].value;
            break;
        }
    }
}
function ay_linktoevoegen() {
	var linktekst = "";
	
    var yt_link            = document.getElementById('yt_id');
    var yt_width            = document.getElementById('yt_width');
    var yt_height            = document.getElementById('yt_height');
    var yt_titel            = document.getElementById('yt_titel');
    var yt_type            = document.getElementById("yt_type");
    var keuze               = yt_type.options[yt_type.selectedIndex].value; 
    var titel_tonen        = getValueFromCheckbox();

	if (yt_link)
    		linktekst = "[accessibleyoutube id=\"" + yt_link.value + "\" type=" + keuze + " width=" + yt_width.value +" height=" + yt_height.value + " title=\"" + yt_titel.value + "\" showtitle=" + titel_tonen + "]";
	else
		tinyMCEPopup.close();

	if(window.tinyMCE) {
		//TODO: For QTranslate we should use here 'qtrans_textarea_content' instead 'content'
		window.tinyMCE.execInstanceCommand('content', 'mceInsertContent', false, linktekst);
		//Peforms a clean up of the current editor HTML. 
		//tinyMCEPopup.editor.execCommand('mceCleanup');
		//Repaints the editor. Sometimes the browser has graphic glitches. 
		tinyMCEPopup.editor.execCommand('mceRepaint');
		tinyMCEPopup.close();
	}
	return;
}