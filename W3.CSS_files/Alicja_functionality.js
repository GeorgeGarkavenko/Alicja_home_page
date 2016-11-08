function collapse_navbar() {
            var x = document.getElementById("collapsed_menue");
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else {
                x.className = x.className.replace(" w3-show", "");
            }
}

function hide_menue() {
            document.getElementById("collapsed_menue").style.display = "none";
}

function add_item() {
            
            var list = document.getElementById("comments_list"),
            email = document.getElementById("email").value,
            comment = document.getElementById("comment").value,
            gender = document.getElementById("radio_mail").checked ?
                "img_male.png"
                :
                "img_female.png"
            ;
            
            
            list.innerHTML += `
            
            <li class="w3-padding-16">
              <span onclick="this.parentElement.style.display='none'"
             class="w3-closebtn w3-padding w3-margin-right w3-medium">&times;</span>
              <img src="W3.CSS_files/${gender}" class="w3-left w3-circle w3-margin-right" style="width:60px">
              <span class="w3-xlarge">${email}</span><br>
              <span>${comment}</span>
            </li>
            `;
            
        }