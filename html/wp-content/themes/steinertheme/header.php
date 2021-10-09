<!DOCTYPE html>
<html lang="en">

<head>

    <?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

<?php $menuItems = wp_get_nav_menu_items('nav'); ?>

    <nav>
        <div class="left-nav">
        <?php if (has_custom_logo()) : ?>
            <div class="site-logo"><?php the_custom_logo(); ?></div>
        <?php else : ?>
            <a class="site-logo-text" href="<?= site_url(); ?>"> <?php bloginfo('name'); ?></a>
        <?php endif; ?></div>
        <div class="right-nav">
                <ul class="upper-text">
                    <li><a href="default.asp">Länkar</a></li>
                    <li><a href="https://portal.idunsoft.se">Idunsoft</a></li>
                    <li><a href="contact.asp">Sök</a>
            <div class="site-logo"></div></li>
                </ul>
                <ul class="lower-text">
                    <?php foreach ($menuItems as $item) : ?>
                    <li><a href="<?= $item->url ?>"><?= $item->title ?></a></li>
                    <!-- <li><a href="news.asp">Om skolan</a></li>
                    <li><a href="contact.asp">Ansökan</a></li>
                    <li><a href="about.asp">Kontakt</a></li> -->
                    <?php endforeach; ?>
                </ul>
        </div>
    </nav>