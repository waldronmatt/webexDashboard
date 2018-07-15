$(document).ready(function(){

    var form = $('#hostPin');
    form.submit(function(e) {
        // prevent form submission
        e.preventDefault();

        // submit the form via Ajax
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                // Inject the result in the HTML
                $('#form-result').html(result);
				$("input[type$='text']").val('');
            }
        });
    });
});

$(document).ready(function(){

    var form = $('#lock');
    form.submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                $('#form-result').html(result);
            }
        });
    });
});

$(document).ready(function(){

    var form = $('#unlock');
    form.submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                $('#form-result').html(result);
            }
        });
    });
});

$(document).ready(function(){

    var form = $('#instEnable');
    form.submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                $('#form-result').html(result);
            }
        });
    });
});

$(document).ready(function(){

    var form = $('#instDisable');
    form.submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                $('#form-result').html(result);
            }
        });
    });
});

$(document).ready(function(){

    var form = $('#disable');
    form.submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                $('#form-result').html(result);
            }
        });
    });
});

$(document).ready(function(){

    var form = $('#enable');
    form.submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                $('#form-result').html(result);
            }
        });
    });
});

$(document).ready(function(){

    var form = $('#anyone');
    form.submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                $('#form-result').html(result);
            }
        });
    });
});

$(document).ready(function(){

    var form = $('#choose');
    form.submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                $('#form-result').html(result);
				$("input[type$='text']").val('');
            }
        });
    });
});

$(document).ready(function(){

    var form = $('#callMe');
    form.submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                $('#form-result').html(result);
				$("input[type$='tel']").val('');
            }
        });
    });
});

$(document).ready(function(){

    var form = $('#callMeCell');
    form.submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                $('#form-result').html(result);
				$("input[type$='tel']").val('');
            }
        });
    });
});

$(document).ready(function(){

    var form = $('#videoSys');
    form.submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                $('#form-result').html(result);
				$("input[type$='text']").val('');
            }
        });
    });
});

$(document).ready(function(){

    var form = $('#audioPin');
    form.submit(function(e) {

        e.preventDefault();

        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            dataType: 'html',
            data: form.serialize(),
            success: function(result) {
                $('#form-result').html(result);
				$("input[type$='text']").val('');
            }
        });
    });
});