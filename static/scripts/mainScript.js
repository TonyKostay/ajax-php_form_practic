$('#sendForm').on('click',()=>{
    let userName = $("[name='userName']").val(),
        userPhone = $("[name='userPhone']").val(),
        userMail = $("[name='userMail']").val();
    if (userName.length<2 || userPhone.length<6 || userMail.length<5){
        $('.errors').text('Некорректные данные. Ошибка отправки.');
        return false;
    }
    $('.errors').text('');

    $.ajax({
        url: 'static/ajax/mail.php',
        type: 'POST',
        cache: false,
        data: {
            'name':userName,
            'phone':userPhone,
            'mail':userMail
        },
        dataType: 'html',
        beforeSend: ()=>{
            $('#sendForm').prop('disabled', true);
        },
        success: (data)=>{
            alert(data);
            $('#sendForm').prop('disabled', false);
            $("[name='userForm']").trigger('reset');
            $('.errors').text('Успешно');
        }

    })


})
