/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds',() => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('Feeds are defined', () =>{
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Each feed has a URL link',() =>{
            for(i = 1; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });
        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Each feed has a name',()=>{
            for(i = 1; i < allFeeds.length; i++ ){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* Write a new test suite named "The menu" */
    describe('The Menu',() =>{
        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Menu is hidden by default',() =>{
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
       /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('Menu- open and close toggle works',() =>{
            menuIcon= document.querySelector(".menu-icon-link");
            //First click would open the menu icon to view the menu
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);

            //Second click would close the menu icon to remove menu from view 
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });
    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries',() =>{
        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function (done){
           loadFeed(0, () =>{
               done();
           });
        });
        it('Has at least 1 entry when loadFeed function is called',() =>{
            expect($('.entry.feed')).toBeDefined();
        });
    });
    /*Write a new test suite named "New Feed Selection" */
   describe('New Feed Selection', function(){
        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var firstFeedEntry;
        beforeEach(function (done){
            loadFeed(0,()=>{
                firstFeedEntry = document.querySelector('.feed').innerHTML;
            loadFeed(1, ()=>{
                done();
                });
             });
         });
        it('New feed is different to previous feeds',function (done){
           var secondFeedEntry = document.querySelector('.feed').innerHTML;
            expect(firstFeedEntry).not.toBe(secondFeedEntry);
            done();
        });
    });
}());