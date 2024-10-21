// Exercise 1: Check if jQuery is loaded
$(document).ready(function () {
    $('#checkJQuery').click(function () {
        // Check if jQuery is loaded
        if (typeof jQuery !== 'undefined') {
            alert("jQuery is loaded and ready!");
        } else {
            alert("jQuery is not loaded.");
        }
    });
});

// Exercise 2: Scroll to the top if page is too long
$('#scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});

// Exercise 3: Animate width and height of a button
$('#animateButton').click(function () {
    $(this).animate({
        width: '300px',
        height: '100px'
    }, 1000);
});

// Exercise 4: FadeIn boxes
$('#fadeInBoxes').click(function () {
    $('.box').fadeIn(1000);
});

// Exercise 5: Clickable button after checking the box
$('#checkMe').change(function () {
    $('#submitButton').prop('disabled', !this.checked);
});

// Exercise 6: Let users print some documents
$('#printPage').click(function () {
    window.print();
});

// Exercise 7: Don't let username be too long
$('#username').keyup(function () {
    if ($(this).val().length > 10) {
        $('#usernameWarning').show();
    } else {
        $('#usernameWarning').hide();
    }
});

// Exercise 8: Forget to bold words
$('#boldText').css('font-weight', 'bold');

// Exercise 9: Adding new division
$('#addDivision').click(function () {
    $('#container').append('<div>New Division Added!</div>');
});

// Exercise 10: Select values from JSON object using jQuery
$('#getJSON').click(function () {
    let data = {
        "name": "John",
        "age": 30,
        "city": "New York"
    };
    alert("Name: " + data.name + ", Age: " + data.age + ", City: " + data.city);
});

// Exercise 11: Add element within ul list
$('#addItem').click(function () {
    $('#myList').append('<li>New Item</li>');
});

// Exercise 12: Know what user puts into textbox
$('#showTextBox').click(function () {
    alert($('#textBox').val());
});

// Exercise 13: Change input value
$('#changeValue').click(function () {
    $('#changeInput').val('New Value');
});
