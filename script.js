window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

    //scroll to form

    

    /*var firstsec = document.getElementById('request__quote');
    var secondsec = document.getElementById('form');
    var lastScrollTop = 0;
    window.onscroll = function(){
       var st = window.pageYOffset || document.documentElement.scrollTop; 
       if (st > lastScrollTop){
          secondsec.scrollIntoView({behavior: "smooth"});
       } else {
          firstsec.scrollIntoView({behavior: "smooth"});
       }
       lastScrollTop = st <= 0 ? 0 : st; 
    } */

    /*function scrollToTargetAdjusted(){
        var element = document.getElementById('form');
        var headerOffset = 45;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition - headerOffset;
    
        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
    }*/

/*contact form*/
function sendEmail() {
    var Fname = window.document.getElementById("fname").value 
    var Lname = window.document.getElementById("lname").value
    var Email = window.document.getElementById("email").value
    var Subject = window.document.getElementById("subject").value
    var Msg = window.document.getElementById("message").value
    
    if (Fname.length < 2 || Lname.length < 2) {
        window.alert('Please verify your first and last name and try again.')
    } else if (Msg.length < 2) {
        window.alert('Please write at least two letters in "Message".')
    } 
    }

    
    