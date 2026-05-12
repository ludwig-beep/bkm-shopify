window.addEventListener('load', function(event) {
    // Step 1: Locate buttons and input fields
    const footerButton = document.getElementById('SubscribeSubmit--footer-block-3');
    const footerInput = document.getElementById('Email--footer-block-3');
    const popupButton = document.getElementById('SubscribeSubmit--popup-0');
    const popupInput = document.getElementById('Email--popup-0');

  console.log("FooterButton", footerButton);
  console.log("FooterInput", footerInput);
  console.log("popupButton", popupButton);
  console.log("popupInput", popupInput);

    // Step 2: Listen for click events on both buttons
    if (footerButton) {
        footerButton.addEventListener('click', function() {
            handleSubscribe(footerInput, 'Email--footer-block-3');
        });
    }

    if (popupButton) {
        popupButton.addEventListener('click', function() {
            handleSubscribe(popupInput, 'Email--popup-0');
        });
    }

    // Step 3: Check corresponding input field and validate email
    function handleSubscribe(inputField, buttonId) {
        if (!inputField) {
            console.log("Input field not found for " + buttonId);
            return;
        }

        const email = inputField.value;
        const emailRegex = /^[^\s@]+@[^\s@]+$/;

        if (emailRegex.test(email)) {
            const event_data = {
                timestamp: new Date().toISOString(),
                buttonId: buttonId,
                email: email
            };
            Shopify.analytics.publish('subscription', event_data);
            console.log("Subscription event published to Shopify analytics for " + buttonId);
        } else {
            console.log("Invalid email address for " + buttonId);
        }
    }
});