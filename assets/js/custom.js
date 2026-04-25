/*==================================================================================
    Custom JS - Elite Theme Interactions
====================================================================================*/

$(document).ready(function(){

    // Set the copyright year
    var date = new Date();
    $("#copyRightYear").html(date.getFullYear());

    // Make a project tab active
    var projectTabs = $(".project-tab");
    projectTabs.on("click",function(e){
        for (let index = 0; index < projectTabs.length; index++) {
            projectTabs[index].classList.remove("active-project-tab");
        }
        e.currentTarget.classList.add("active-project-tab");
    });

    // ===== Elegant Preloader =====
    $(window).on("load", function() {
        setTimeout(function() {
            $(".elite-preloader").addClass("loaded");
        }, 800);
    });

    // Fallback: hide preloader after 3 seconds max
    setTimeout(function() {
        $(".elite-preloader").addClass("loaded");
    }, 3000);

    // ===== Scroll Reveal Animations =====
    function revealOnScroll() {
        $(".reveal-up").each(function(index) {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < viewportBottom - 80) {
                var el = $(this);
                setTimeout(function() {
                    el.addClass("revealed");
                }, index * 60);
            }
        });
    }

    $(window).on("scroll", revealOnScroll);
    revealOnScroll(); // Run on load

    // ===== Counter Animation =====
    var countersAnimated = false;
    function animateCounters() {
        if (countersAnimated) return;
        var statsSection = $(".elite-stats-strip");
        if (statsSection.length === 0) return;
        
        var sectionTop = statsSection.offset().top;
        var viewportBottom = $(window).scrollTop() + $(window).height();
        
        if (sectionTop < viewportBottom - 100) {
            countersAnimated = true;
            $(".elite-stat-number").each(function() {
                var $this = $(this);
                var target = parseInt($this.data("count"), 10);
                $({ count: 0 }).animate({ count: target }, {
                    duration: 2000,
                    easing: "swing",
                    step: function() {
                        $this.text(Math.floor(this.count));
                    },
                    complete: function() {
                        $this.text(target);
                    }
                });
            });
        }
    }

    $(window).on("scroll", animateCounters);
    animateCounters(); // Check on load

    // ===== Smooth nav link transitions =====
    $(".elite-nav a").on("mouseenter", function() {
        $(this).css("transition", "all 0.4s ease");
    });

    // ===== Parallax effect on hero scroll =====
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll < $(window).height()) {
            $(".elite-hero-bg").css("transform", "scale(" + (1.05 + scroll * 0.0001) + ") translateY(" + (scroll * 0.3) + "px)");
            $(".elite-hero-content").css("opacity", 1 - (scroll / ($(window).height() * 0.8)));
        }
    });

});