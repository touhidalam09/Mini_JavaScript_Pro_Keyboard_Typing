var alphabet_keyboard = {};

alphabet_keyboard[65] = 'a';
alphabet_keyboard[66] = 'b';
alphabet_keyboard[67] = 'c';
alphabet_keyboard[68] = 'd';
alphabet_keyboard[69] = 'e';
alphabet_keyboard[70] = 'f';
alphabet_keyboard[71] = 'g';
alphabet_keyboard[72] = 'h';
alphabet_keyboard[73] = 'i';
alphabet_keyboard[74] = 'j';
alphabet_keyboard[75] = 'k';
alphabet_keyboard[76] = 'l';
alphabet_keyboard[77] = 'm';
alphabet_keyboard[78] = 'n';
alphabet_keyboard[79] = 'o';
alphabet_keyboard[80] = 'p';
alphabet_keyboard[81] = 'q';
alphabet_keyboard[82] = 'r';
alphabet_keyboard[83] = 's';
alphabet_keyboard[84] = 't';
alphabet_keyboard[85] = 'u';
alphabet_keyboard[86] = 'v';
alphabet_keyboard[87] = 'w';
alphabet_keyboard[88] = 'x';
alphabet_keyboard[89] = 'y';
alphabet_keyboard[90] = 'z';
alphabet_keyboard[32] = 'space';
alphabet_keyboard[13] = 'Enter';


var score_success = 0;
var score_error = 0;
var str = '';

///////////////   Random word build    ///////////////////////

//WORD Builder function when press enter 
function workBuilder() {
    let ran_word_size = Math.floor(Math.random() * 10) + 3;
    let ran_alpha_arr = [];
    for (let j = 0; j < ran_word_size; j++) {
        let index = Math.floor(Math.random() * (90 - 65)) + 65;
        ran_alpha_arr[j] = alphabet_keyboard[index];
    }
    str = ran_alpha_arr.join('').trim();
    document.getElementById('board').innerHTML = str;
}


function colorChangeIntervale(charecter_keycode_value) {
    setTimeout(function() {
        document.getElementById(alphabet_keyboard[charecter_keycode_value]).style.background = "black";
    }, 800);
}


///////////////////  action apply when keypress   ////////////////////////////
document.onkeydown = function(e) {

        var key_press = String.fromCharCode(e.keyCode);
        var key_code = e.keyCode;

        if (key_code == 13) {
            workBuilder();
            document.getElementById('success').innerHTML = score_success;
            document.getElementById('error').innerHTML = score_error;

        }
        let first_Charecter = str.charAt(0);
        //console.log('String: ' + str);
        //console.log('First String: ' + first_Charecter);
        let charecter_keycode_value = parseInt(first_Charecter.toUpperCase().charCodeAt());
        if ((key_code === charecter_keycode_value)) {
            //console.log("Keycode: " + charecter_keycode_value);
            score_success = score_success + 1;
            let updated_Str = str.substr(1);
            str = updated_Str;
            //console.log('Updated String: ' + updated_Str);
            document.getElementById('board').innerHTML = updated_Str;
            document.getElementById(alphabet_keyboard[charecter_keycode_value]).style.background = "#32CD32";
            colorChangeIntervale(charecter_keycode_value);
        }
        if (((key_code >= 65) && (key_code <= 90)) && (key_code !== charecter_keycode_value)) {

            score_error = score_error + 1;
            document.getElementById(alphabet_keyboard[key_code]).style.background = 'red';
            colorChangeIntervale(key_code);
        }
        if (key_code == 13) {
            document.getElementById('Enter').style.background = 'green';
            // send as a argument 32 cuz alphabet_keyboard index 32 is space intailize
            colorChangeIntervale(13);
        }
        if ((key_code == 32) && (key_code === charecter_keycode_value)) {
            document.getElementById('space').style.background = 'green';
            // send as a argument 32 cuz alphabet_keyboard index 32 is space intailize
            colorChangeIntervale(32);
        }
        if ((key_code == 32) && (key_code !== charecter_keycode_value)) {
            document.getElementById('space').style.background = 'red';
            // send as a argument 32 cuz alphabet_keyboard index 32 is space intailize
            colorChangeIntervale(32);
        }
        document.getElementById('kp').innerHTML = key_press;
        document.getElementById('kc').innerHTML = key_code;
        console.log("-------------------------------------------------");


    }
    /////////////////////////////////////////////////