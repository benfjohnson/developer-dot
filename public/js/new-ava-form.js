function insertAvaForm()
{
    $(".avaform-wrapper").append("<div style='margin: 20px 20px 20px 20px; padding: 20px 20px 20px 20px;'><label>Request a Free AvaTax Sandbox Account</label><form><div class='form-group'><label for='name'>First Name / Given Name</label><input type='text' class='form-control' id='firstName' placeholder=''></div><div class='form-group'><label for='name'>Last Name / Family Name</label><input type='text' class='form-control' id='lastName' placeholder=''></div><div class='form-group'><label for='email'>Email Address</label><input type='email' class='form-control' id='email' placeholder='user@example.org'></div><div class='form-group'><label for='company'>Company</label><input type='text' class='form-control' id='company' placeholder='Company Name'></div><div class='form-group'><label for='phone'>Phone</label><input type='tel' class='form-control' id='phone' aria-describedby='emailHelp' placeholder='Phone Number'></div><button type='button' class='btn btn-primary' onclick='return submitShort();'>Submit</button></form><br/><div id='ava-form-alert' class='alert alert-warning fade in' style='display: none;'><span id='ava-form-info'></span></div></div>");
}

function submitShort()
{
    return submitForm($('#firstName').val(), $('#lastName').val(), $('#email').val(), $('#company').val(), $('#phone').val(), $('#ava-form-info'), $('#ava-form-alert'));
}

function submitForm(fn, ln, e, c, p, outputElement, alertElement)
{
    alertElement.hide();
    var payload = {
        firstName: fn,
        lastName: ln,
        email: e,
        company: c,
        phone: p
    };
    $.ajax({
        url: 'https://sandbox-rest.avatax.com/api/v2/accounts/freetrials/request',
        data: JSON.stringify(payload),
        contentType: 'application/json',
        error: function(err) {
            var avataxerror = $.parseJSON(err.responseText);
            outputElement.html(avataxerror.error.message);
            alertElement.attr('class', 'alert alert-warning fade in');
            alertElement.show();
        },
        dataType: 'json',
        success: function(data) {
            outputElement.html('Success!  Your account credentials have been sent to <strong>' + e + '</strong>.');
            alertElement.attr('class', 'alert alert-success fade in');
            alertElement.show();
        },
        type: 'POST'
    });
    return false;
}

// Populate forms on ready
$(
    function()
    {
        insertAvaForm();
    }
);