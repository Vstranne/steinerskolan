<?php wp_footer(); ?>

<?php $menuItems = wp_get_nav_menu_items('nav'); ?>

<footer>
    <div class="left-footer">
    <?php if (has_custom_logo()) : ?>
            <div class="site-logo-footer"><?php the_custom_logo(); ?></div>
        <?php else : ?>
            <a class="site-logo-text" href="<?= site_url(); ?>"> <?php bloginfo('name'); ?></a>
        <?php endif; ?>
        <ul>
            <li>Tallhöjdsgatan 1, 416 74 Göteborg</li>
            <li>rudolf@steinerskolan.se</li>
            <li>031-21 46 32</li>
        </ul>
    </div>
    <div class="right-footer">
    <ul class="text-left">
        <?php foreach ($menuItems as $item) : ?>
            <li><a href="<?= $item->url ?>"><?= $item->title ?></a></li>
        <?php endforeach; ?>
    </ul>
    <ul class="text-right">
        <li><a href="contact.asp">Karriär</a></li>
        <li><a href="https://portal.idunsoft.se">Idunsoft</a></li>
        <a href="https://www.facebook.com/rudolfsteinerskolanGBGsforaldraforening/"><div class="icon-container"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/facebook.png" alt=""></a>
        <a href="https://www.instagram.com/rudolfsteinerskolangoteborg/"><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/instagram.png" alt=""></a></div>
    </ul>
    </div>
</footer>

</body>

</html>