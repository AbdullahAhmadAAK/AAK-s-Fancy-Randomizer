function Random() {
        var lower_limit = document.getElementById("lower_limit").value;
        var upper_limit = document.getElementById("upper_limit").value;
        var number_outputs = document.getElementById("number_outputs").value;
        // var unique_buttons = document.querySelector(
        //   'input[name="unique_checkbox"]'
        // ).value;

        let unique = document.forms[0];
        let unique_type = "";
        let order_type = "";
        let counter = 0;

        for (i = 0; i < unique.length; i++) {
          if (unique[i].checked && counter == 0) {
            unique_type = unique[i].value;
            counter++;
          } else if (unique[i].checked && counter == 1) {
            order_type = unique[i].value;
            counter++;
          }
        }

        var rnd = [];

        for (let i = 0; i < number_outputs; i++) {
          if (
            unique_type == "unique" &&
            upper_limit - lower_limit - 1 >= number_outputs &&
            upper_limit > lower_limit
          ) {
            let temp =
              (Math.floor(Math.random() * 1000000000000) %
                (upper_limit - lower_limit + 1)) +
              +lower_limit;
            if (rnd.includes(temp)) {
              i--;
              continue;
            } else {
              rnd.push(temp);
            }
          } else if (unique_type == "nonunique") {
            rnd.push(
              (Math.floor(Math.random() * 1000000000000) %
                (upper_limit - lower_limit + 1)) +
                +lower_limit
            );
          }
        }

        if (order_type == "ascending") {
          rnd.sort(function (a, b) {
            return a - b;
          });
        } else if (order_type == "descending") {
          rnd.sort(function (a, b) {
            return b - a;
          });
        }

        document.getElementById("tb").value = rnd;
}

function copyText() {

        // Get the text field
        var copyText = document.getElementById("tb");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
}