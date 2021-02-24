<style>
    <?php echo readfile("./assets/css/couponPopup.css") ?>
</style>

<div class="cpopup">
    <div class="cpopov"></div>
    <!-- Deal / Code <Popup : Start -->
    <?php if (isset($_GET['deal']) || isset($_GET['code'])) : ?>
        <div class="Wrp">
            <div class="popup">
                <div class="pop-logo flex">
                    <img src="./assets/images/muck-logo.png" alt="">
                </div>
                <div class="popContent">
                    <span role="button" class="closes">&times;</span>
                    <h2 class="pop-hdng">10% Off Everything Plus Free Shipping & Free Return</h2>

                    <!-- Deal content <start> -->
                    <?php if (isset($_GET['deal'])) : ?>
                        <p class="pop-txt">No Code Required for This Deal</p>
                        <span role="button" class="d-btn">Go To Deal</span>

                    <?php endif; ?>
                    <!-- Deal content <end> -->

                    <!-- Code content <start> -->
                    <?php if (isset($_GET['code'])) : ?>
                        <p class="pop-txt">Copy the code, paste it into the checkout box,
                            and you will be suprised.</p>
                        <div class="input">
                            <input id="input_output" value="FIRST10" readonly="readonly" type="text" class="code"></input>
                            <span class="cpy-btn" role="button">Copy</span>
                        </div>
                    <?php endif; ?>
                    <!-- Code content <end> -->
                    <div class="terms">
                        <h2 class="trm-hdng">Terms & Conditions</h2>
                        <ol class="trm-list">
                            <li>T&C's apply, see retailers website for more information.</li>
                            <li>All brands reserve the right to remove any offer without giving prior notice.</li>
                            <li>https://www.centreofexcellence.com</li>
                        </ol>
                        <p class="trm-p">Expires : 28 February 2021 </p>
                    </div>
                </div>
            </div>
        </div>
    <?php endif ?>
    <!-- Deal / Code <Popup : End -->

    <!-- Terms <start> -->
    <?php if (isset($_GET['terms'])) : ?>
        <div class="tpopup">
            <div class="tpopov"></div>
            <div class="Wrp">
                <div class="term-pop">
                    <div class="t-top">
                        <h2>Terms & Conditions</h2>
                        <span role="button" class="closed">&times;</span>
                    </div>
                    <ol class="list">
                        <li>T&C's apply, see retailers website for more information.</li>
                        <li>All brands reserve the right to remove any offer without giving prior notice.</li>
                        <li>https://www.centreofexcellence.com</li>
                    </ol>
                    <p>Expires : 28 February 2021 </p>
                </div>
            </div>
        </div>
    <?php endif ?>
</div>