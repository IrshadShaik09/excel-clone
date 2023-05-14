$(document).ready(function () {
    let cellcontainer = $(".input-cel-container");
    for (let i = 0; i <= 100; i++) {

        let ans = "";

        let n = i;

        while (n > 0) {
            let rem = n % 26;
            if (rem == 0) {
                ans = "z" = ans;
                n = Math.floor(n / 26) - 1;

            }
            else {
                ans = String.fromCharCode(rem - 1 + 65) + ans;
                n = Math.floor(n / 26);
            }
        }
        let coloumn = $('<div class="coloumn-name" id="colcod-${ans} colid-{i}">${ans}</div>');
        $(".coloumn-name-container").append(coloumn);
    }

});


