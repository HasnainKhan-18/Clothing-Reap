<!-- Footer <start> -->
<footer class="footer">
    <div class="Wrp">
        <div class="ftr-wrp">
            <div class="ftr-logo">
                <img src="./assets/images/svg/Logo-White.svg" alt="">
            </div>
            <nav class="nav-lnks">
                <h2>Browser</h2>
                <a class="nv-link" href="http://localhost/clothing-reap/events.php">Events</a>
                <a class="nv-link" href="http://localhost/clothing-reap/sitemap.php">Stores</a>
                <a class="nv-link" href="http://localhost/clothing-reap/categories.php">Categories</a>
                <a class="nv-link" href="http://localhost/clothing-reap/contact-us.php">Contact Us</a>
            </nav>
            <nav class="nav-lnks">
                <h2>Help</h2>
                <a class="nv-link" href="http://localhost/clothing-reap/blog.php">Blog</a>
                <a class="nv-link" href="">Use Coupon</a>
                <a class="nv-link" href="">Why Contact Us?</a>
            </nav>
            <nav class="nav-lnks">
                <h2>About</h2>
                <a class="nv-link" href="http://localhost/clothing-reap/about-us.php">About Us</a>
                <a class="nv-link" href="http://localhost/clothing-reap/privacy-policy.php">Privacy Policy</a>
                <a class="nv-link" href="">Terms & Conditions</a>
            </nav>
            <nav class="nav-lnks">
                <h2>Social Media</h2>
                <div class="icn-wrp">
                    <a class="icon" href="">
                        <img src="./assets/images/svg/facebook (3).svg" alt="">
                    </a>
                    <a class="icon" href="">
                        <img src="./assets/images/svg/twitter.svg" alt="">
                    </a>
                    <a class="icon" href="">
                        <img src="./assets/images/svg/instagram.svg" alt="">
                    </a>
                </div>
            </nav>
        </div>
    </div>
    <div class="clsng-ftr">
        <div class="Wrp">
            <p>© 2021 clothingreap.co.uk All Rights Reserved<br><em>ll discount codes labelled as <b>'EXCLUSIVE'</b> must not be copied in any form whatsoever without first gaining written permission. All details correct at time of publishing.</em></p>
        </div>
    </div>
</footer>
<!-- Footer <end> -->

<!-- coupon popup <start> -->
<?php if (in_array("terms" || "deal" || "code", $_GET)) :
    require_once("./couponPopup.php");
endif; ?>
<!-- coupon popup <end> -->