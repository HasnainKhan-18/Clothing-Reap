<?php
function getUriSegments()
{
    return explode("/", parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
}
function getUriSegment($n)
{
    $segs = getUriSegments();
    return count($segs) > 0 && count($segs) >= ($n - 1) ? $segs[$n] : '';
}
$fileName = basename(getUriSegment(2), ".php");
($fileName === 'index' || $fileName === '') && $fileName = 'home';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Clothing Reap</title>
    <meta name="description" content="Reveal Discount" />

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <!-- Favicon Icon -->
    <link rel="shortcut icon" href="./assets/images/svg/favicon.svg" />

    <!-- Same metaOG image -->
    <link rel="mask-icon" href="./assets/images/svg/favicon.svg">

    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1, initial-scale=1.0">

    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#F00037">

    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#F00037">

    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#F00037">
    <meta name="apple-mobile-web-app-title" content="Reveal Discount">

    <!-- Application Name -->
    <meta name="application-name" content="Reveal Discount">

    <!-- Open Graph -->
    <meta property="og:title" content="Reveal Discount" />
    <meta property="og:description" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />
    <meta property="og:site_name" content="Reveal Discount">

    <!-- Preload Fonts -->
    <link rel="preload" href="./assets/fonts/lato-regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="./assets/fonts/lato-bold.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="./assets/fonts/boiletplate.woff" as="font" type="font/woff" crossorigin>

    <!-- Preload Script -->
    <link rel="preload" href="./assets/js/<?php echo $fileName ?>.js" as="script" crossorigin>

    <!-- Page CSS -->
    <link rel="stylesheet" href="./assets/css/<?php echo $fileName ?>.css">

    <!-- If Video -->
    <!-- <meta property="og:video" content="https://www.youtube.com/watch?v=cxjT21T5yeQ" /> -->

    <!-- Telephone Number For Google Detection in Website -->
    <!-- <meta name="format-detection" content="telephone=no" /> -->

    <!-- Canonical Link -->
    <!-- <link href="" rel="canonical" /> -->
    <script>
        const app_url = `${window.origin}/bitbucket/front-end/revamp/revealdiscount/`
        const pageFile = "<?php echo $fileName ?>";
    </script>
</head>

<!-- To disable webp image add "nowebp" class at body -->
<!-- <body class="nowebp"> -->

<body>
    <!-- main wrapper <start> -->
    <main id="main">
        <!-- Header <component:start> -->
        <header class="header">
            <div class="bg">
                <div class="Wrp">
                    <div class="wrap">
                        <a href="http://localhost/clothing-reap/" class="logo">
                            <img src="./assets/images/svg/clothing-reap-logo.svg" alt="">
                        </a>
                        <a href="http://localhost/clothing-reap/" class="logo-wht">
                            <img src="./assets/images/svg/Logo-White.svg" alt="">
                        </a>
                        <div class="links">
                            <a class="nv-lnk" href="http://localhost/clothing-reap/categories.php">Categories</a>
                            <a class="nv-lnk" href="http://localhost/clothing-reap/blog.php">Blog</a>
                            <a class="nv-lnk" href="http://localhost/clothing-reap/events.php">Events</a>
                            <a class="nv-lnk" href="http://localhost/clothing-reap/sitemap.php">Stores</a>
                            <span role="button" class="srch-icn">
                                <img src="./assets/images/svg/srch-icn.svg" alt="">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Header <component:end> -->
    </main>
    <!-- main wrapper <End> -->
</body>