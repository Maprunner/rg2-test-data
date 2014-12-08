var CoursePage = function() {

	this.body = element(by.id('rg2-course-list'));
	this.coursesTab = element(by.id('rg2-courses-tab'));
  this.list = element.all(by.css('.courselist'));
	  
	this.showCoursesTab = function() {
		this.coursesTab.element(by.id('ui-id-2')).click();
		expect(this.body.isDisplayed()).toBe(true);
	};
	
	this.showAllCourses = function() {
    element(by.css('.allcourses')).click();
	};

	this.hideAllCourses = function() {
    element(by.css('.allcourses')).click();
	};
	
};

module.exports = new CoursePage();