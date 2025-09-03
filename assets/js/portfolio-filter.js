// Portfolio filtering functionality
(function($) {
    'use strict';

    $(document).ready(function() {
        // Initialize portfolio filtering
        initPortfolioFilter();
    });

    function initPortfolioFilter() {
        const $filterButtons = $('.portfolio-filter .btn');
        const $portfolioItems = $('.portfolio-item');

        // Handle filter button clicks
        $filterButtons.on('click', function(e) {
            e.preventDefault();
            
            const $button = $(this);
            const filterValue = $button.data('filter');

            // Update active state
            $filterButtons.removeClass('active');
            $button.addClass('active');

            // Filter portfolio items
            filterPortfolioItems(filterValue, $portfolioItems);
        });
    }

    function filterPortfolioItems(filterValue, $portfolioItems) {
        if (filterValue === '*') {
            // Show all items
            $portfolioItems.removeClass('filtered-out').show();
        } else {
            // Hide items that don't match the filter
            $portfolioItems.each(function() {
                const $item = $(this);
                if ($item.hasClass(filterValue.substring(1))) {
                    $item.removeClass('filtered-out').show();
                } else {
                    $item.addClass('filtered-out');
                    // Use setTimeout to allow CSS transition to complete before hiding
                    setTimeout(() => {
                        if ($item.hasClass('filtered-out')) {
                            $item.hide();
                        }
                    }, 300);
                }
            });
        }
    }

    // Smooth animations for portfolio items
    function animatePortfolioItems() {
        const $portfolioItems = $('.portfolio-item');
        
        $portfolioItems.each(function(index) {
            const $item = $(this);
            setTimeout(() => {
                $item.addClass('animated fadeInUp');
            }, index * 100);
        });
    }

    // Initialize animations when page loads
    $(window).on('load', function() {
        animatePortfolioItems();
    });

})(jQuery);