function truncateNodeTitle(){var e=$(window).width(),t=48;e>450&&(t=60),e>600&&(t=100),$(".node-teaser .node-title").succinct({size:t})}