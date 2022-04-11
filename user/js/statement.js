$("#statementForm").submit(function(t) {
    var e = $(this),
       
        em = $(this).find('input[name="EMAIL"]'),
        r = $(this).find($('input[type="text"]'));

        var file_data = $('.typefile').prop('files')[0];
        var form_data = new FormData();

        form_data.append('inputs', e.serialize());
        form_data.append('file', file_data);

        if(em.val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test(em.val())) {
                em.removeClass("red");
            } else {
                em.addClass("red");
            }
        }

        if(n.val().replace(/\s+/g, "")) {
            n.removeClass("red");
        } else {
            n.addClass("red");
        }

        if(em.val() != '') {
            if(n.val().replace(/\s+/g, "") && pattern.test(em.val())){
                $.ajax({
                    type: "POST",
                    dataType: 'text',
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,
                    url: "/bitrix/templates/kvartirovod/ajax/statement.php",
                    success: function(t) {
                        "1" == t ? e.addClass("success") : "0" == t && e.addClass("error")
                    },
                    error: function() {
                        e.addClass("error")
                    }
                })
            }
        } else {
            if(n.val().replace(/\s+/g, "")){
                $.ajax({
                    type: "POST",
                    dataType: 'text',
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: form_data,
                    url: "/bitrix/templates/kvartirovod/ajax/statement.php",
                    success: function(t) {
                        "1" == t ? e.addClass("success") : "0" == t && e.addClass("error")
                    },
                    error: function() {
                        e.addClass("error")
                    }
                })
            }
        }

        t.preventDefault()
});