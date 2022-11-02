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
        let input_text = $('#input').val().toUpperCase()
        input_text = input_text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\n '"]/g, "");

        for (let i = 0; i < input_text.length; i++) {
            let fragment = '';
            for (let i = 0; i < getRandomIntInclusive(min, max); i++) {
                fragment = fragment + arrayRandElement(alpabet);
            }
            output_text += input_text[i] + fragment;
        }
        console.log(output_text);
        $('#output').val(output_text + '.'); // for textarea
        // $('#output').text(output_text + '.') // for span
    }
});

instance = $range.data("ionRangeSlider");

$('#input').on('input', function () {
    console.log('change');
    let min = instance['result']['from'];
    let max = instance['result']['to'];
    let output_text = '';
    let input_text = $('#input').val().toUpperCase()
    input_text = input_text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\n '"]/g, "");

    for (let i = 0; i < input_text.length; i++) {
        let fragment = '';
        for (let i = 0; i < getRandomIntInclusive(min, max); i++) {
            fragment = fragment + arrayRandElement(alpabet);
        }
        output_text += input_text[i] + fragment;
    }
    console.log(output_text);
    $('#output').val(output_text + '.');
    // $('#output').text(output_text + '.') // for span
});
