var tabActive=$.tab1;

function clickTabItem(e){
	// Movemos a la vista de ScrollableView
	$.tabs_views.scrollToView(e.source.idx-1);
};

function scrollTabsViews(e){
	var viewIdx = e.currentPage + 1;
	var tabItem = $.getView('tab'+viewIdx);
	$.removeClass(tabActive,"tab-item-active");
	$.addClass(tabItem,"tab-item-active");
	tabActive=tabItem;
	return moveTabsListScroll(viewIdx);
};

function moveTabsListScroll(viewIdx){
	return $.tabs_list.scrollTo((viewIdx-1)*100,0);
};
