var $range = $(".js-range-slider"),
    instance,
    min = 1,
    max = 10;

const alpabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}


$range.ionRangeSlider({
    skin: "big",
    type: "double",
    min: min,
    max: max,
    from: 2,
    to: 4,
    grid: true,
    grid_num: 10,        // default 4 (set number of grid cells)
    grid_snap: true,

    onChange: function (data) {
        let min = data['from_pretty'];
        let max = data['to_pretty'];
        let output_text = '';
        let input_text = $('#input').val()


        if ($('#contactChoice1').is(':checked')) {
            input_text = input_text.toUpperCase();
            input_text = input_text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\n'"]/g, "");
            console.log(input_text)
            for (let i = 0; i < input_text.length; i++) {
                let fragment = '';
                for (let i = 0; i < getRandomIntInclusive(min, max); i++) {
                    fragment = fragment + arrayRandElement(alpabet);
                }
                output_text += input_text[i] + '<fr>' + fragment + '</fr>';
            }
            console.log(output_text);
            $('#output').html(output_text + '.'); // for textarea
        } else {
            input_text = input_text.replace(/[\n]/g, "");
            input_text = input_text.split(' ');
            console.log('input_text =', input_text)
            for (let i = 0; i < input_text.length; i++) {
                let fragment = '';
                for (let i = 0; i < getRandomIntInclusive(min, max); i++) {
                    fragment = fragment + arrayRandElement(alpabet);
                }
                if (input_text[i].length <= 2) {
                    input_text[i] = '<i>' + input_text[i] + '</i>'
                }
                output_text += input_text[i] + fragment;
            }
            console.log(output_text);
            $('#output').html(output_text); // for textarea


        }
    }
});

instance = $range.data("ionRangeSlider");

$('#input').on('input', function () {
    console.log('change');
    let min = instance['result']['from'];
    let max = instance['result']['to'];
    let output_text = '';
    let input_text = $('#input').val().toUpperCase()
    input_text = input_text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\n'"]/g, "");

    if ($('#contactChoice1').is(':checked')) {
        let input_text = $('#input').val().toUpperCase();
        input_text = input_text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\n'"]/g, "");
        for (let i = 0; i < input_text.length; i++) {
            let fragment = '';
            for (let i = 0; i < getRandomIntInclusive(min, max); i++) {
                fragment = fragment + arrayRandElement(alpabet);
            }
            // output_text += input_text[i] + fragment;
            output_text += input_text[i] + '<fr>' + fragment + '</fr>';
        }
        console.log(output_text);
        $('#output').html(output_text + '.');
        // $('#output').text(output_text + '.') // for span
    } else {
        let input_text = $('#input').val()
        input_text = input_text.replace(/[\\n]/g, "");
        input_text = input_text.split(' ')
        for (let i = 0; i < input_text.length; i++) {
            let fragment = '';
            for (let i = 0; i < getRandomIntInclusive(min, max); i++) {
                fragment = fragment + arrayRandElement(alpabet);
            }
            // output_text += input_text[i] + fragment;
            if (input_text[i].length <= 2) {
                input_text[i] = '<i>' + input_text[i] + '</i>'
            }
            output_text += input_text[i] + fragment;
        }
        console.log(output_text);
        $('#output').html(output_text + '.');
    }
});
