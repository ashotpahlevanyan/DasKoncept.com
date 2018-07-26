var jssorSliders = {

};

$(document).ready(function(){
	var sliderNameCheck="";
	var canvas = new ScrollingCanvas({
		contentsEl : $('#layout')
	});
	var navItems = $('.a-link');
	var currentactivemenu=0;
	var activesession;
	for(var i=0; i<navItems.length; i++)
	{
		navItems.eq(i).bind('click', function(evt){
			var hreflink=$(evt.currentTarget).attr('href');
			hreflink=hreflink.replace(/\//g,"");
			hreflink=hreflink.replace(/\//g,"");
			if(hreflink=="")
				hreflink="home";

			sliderNameCheck = "jssor_" + hreflink;
			if(slidersIdList.indexOf(sliderNameCheck) != -1) {
				if(!jssorSliders[sliderNameCheck]) {
					jssorSliders[sliderNameCheck] = jssor_1_slider_init(sliderNameCheck);
				}
				//console.log(jssorSliders);
			}
			// if(slidersIdListAutoplay.indexOf(sliderNameCheck) != -1) {
			// 	if(!jssorSliders[sliderNameCheck]) {
			// 		jssorSliders[sliderNameCheck] = jssor_1_slider_init(sliderNameCheck);
			// 	}
			// 	//console.log(jssorSliders);
			// }
			canvas.scrollToID(hreflink);
			activesession=hreflink;
			evt.preventDefault();
			evt.stopPropagation();
			return false;
		});
	}

	$('#layout').bind('contentChanged', function(event, id){
		if(id!="" && id!=undefined){
			var navItems4 = $('.a-link');
			navItems4.removeClass("active");
			for(var isa=0; isa<navItems4.length; isa++)
			{
				var hreflink4=navItems4.eq(isa).attr('href');
				hreflink4=hreflink4.replace(/\//g,"");
				hreflink4=hreflink4.replace(/\//g,"");
				if(hreflink4=="")
					hreflink4="home";

				if(hreflink4==id){
					window.location.hash = '#data-'+id;

					navItems4.eq(isa).addClass("active");
				}
			}
		}
	});

	var currentlink=$(location).attr('href');
	currentlink=currentlink.split("#");
	for(var i=0; i<navItems.length; i++)
	{
		var hreflink=navItems.eq(i).attr('href');

			if(hreflink==currentlink[0]){
				currentactivemenu=i;
			}
	}
	navItems.eq(currentactivemenu).trigger('click');


	var navItems2 = $('a[href^=#]');

	for(var i=0; i<navItems2.length; i++)
	{
		navItems2.eq(i).bind('click', function(evt){
			var hreflink=$(evt.currentTarget).attr('href');
			hreflink=hreflink.replace(/#/g,"");
			hreflink=hreflink.replace(/data-/g,"");
			canvas.scrollToID(hreflink);
			evt.stopPropagation();
			return false;
		});
	}
	window.addEventListener("popstate", function(e) {
			var hreflink=location.hash;
			hreflink=hreflink.replace(/#/g,"");
			hreflink=hreflink.replace(/data-/g,"");
			if(hreflink=="")
				hreflink="home";
			canvas.scrollToID(hreflink);
	});

	//rungsom();


});

var ScrollingCanvas = $.Class.create({
	/******* PROPERTIES *******/
	_el:null,
	_contentsEl:null,
	_currentEl:null,

	/******* CONSTRUCTOR ********/
	initialize: function(properties){
		this._contentsEl = properties.contentsEl;

		this._el = $('<div></div>');
		this._el.css({
			'overflow'			: 'hidden',
			'position'			: 'absolute'
		});
		this._el.insertBefore(this._contentsEl);

		this._contentsEl.remove();
		this._el.append(this._contentsEl);

		this.rearrange();
		$(window).bind('resize', {self : this}, function(evt){
			evt.data.self.rearrange();
		});
	},

	scrollToID:function(id){
		var content = this._contentsEl.find('#'+id);

		if(!content) return;

		this._currentEl = content;
		this._contentsEl.stop();
		if(id!="events"){
			this._contentsEl.animate({
				'marginLeft'		: ((this._contentsEl.offset().left - content.offset().left) + ((this._el.width() - content.width()) / 2)) + 'px',
				'marginTop'			: ((this._contentsEl.offset().top - content.offset().top) + ((this._el.height() - content.height()) / 2)) + 'px'
			}, 1500, 'easeOutQuint');
		}
		else{
			this._contentsEl.animate({
				'marginLeft'		: ((this._contentsEl.offset().left - content.offset().left - 150) + ((this._el.width() - content.width()) / 2)) + 'px',
				'marginTop'			: ((this._contentsEl.offset().top - content.offset().top) + ((this._el.height() - content.height()) / 2)) + 'px'
			}, 1500, 'easeOutQuint');
		}

		$('html,body').stop();

		$('html,body').animate({
			scrollTop		: 0
		}, 1500, 'easeOutQuint');



		this._contentsEl.trigger('contentChanged',[id]);
		/****/
	},

	rearrange: function(){
		var width = $(window).width();
		var height = $(window).height();
		if(width < 955) width = 955;
		if(height < 600) height = 600;

		//resize
		this._el.css({
			'width'		: width + 'px',
			'height'	: height + 'px'
		});

		//spacing between each panel
		var containerWidth = 0;
		var panels = this._el.find('div[class=panel]');
		for(var i=0; i<panels.length; i++)
		{
			//var margin = 150; Math.round((width - panels.eq(i).width()) / 2);
			if (i==0){var margin = -1000;}
			else if (i==1){var margin = -250;}
			else if (i==2){var margin = 100;}
			else if (i==3){var margin = -1350;}
			else if (i==4){var margin = 450;}
			else if (i==5){var margin = 800;}

			panels.eq(i).css({
				'marginLeft'		: margin + 'px',
				'marginRight'		: margin + 'px'
			});

			containerWidth += panels.eq(i).width() + (margin * 2);
		}
		this._contentsEl.width(containerWidth);

		if(this._currentEl) this.scrollToID(this._currentEl.attr('id'));
	}

});