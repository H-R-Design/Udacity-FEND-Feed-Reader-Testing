/* Re-submitted feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* All tests are placed within the $() function
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds',() => {
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not empty.
         */
        it('Feeds are defined', () =>{
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /*Test that loops through each feed and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Each feed has a URL link',() =>{
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(0);
            });
        });
        /* Test that loops through each feed and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Each feed has a name',()=>{
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    describe('The Menu',() =>{
        /* Test that ensures the menu element is hidden by default.
         */
        it('Menu is hidden by default',() =>{
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
       /* Test that ensures the menu changes (toggles in and out of view)
          */
        it('Menu- open and close toggle works',() =>{
            menuIcon= document.querySelector(".menu-icon-link");
            //First click would open the menu icon to view the menu
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            //Second click would close the menu icon to remove menu from view 
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries',() =>{
        /* Test that ensures when the loadFeed
         * function is called there is at least a single entry element
         */
        beforeEach(function (done){
           loadFeed(0,done);
        });
        it('Has at least 1 entry when loadFeed function is called',() =>{
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

   describe('New Feed Selection', function(){
        /* A test that ensures when a new feed is loaded by the loadFeed function, 
         * the content actually changes.
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
        it('New feed is different to previous feeds',()=>{
           var secondFeedEntry = document.querySelector('.feed').innerHTML;
            expect(firstFeedEntry).not.toBe(secondFeedEntry);
        });
    });
}());

