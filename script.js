
//================================================== LOGIN PAGE ==================================================
if (window.location.pathname=="/html_sba/login.html")
{
    document.getElementById("login_button").addEventListener("click", validation);

    function validation()
    {
        username = document.getElementById("user").value;
        password = document.getElementById("pass").value;
        error_user = document.getElementById("bad_username");
        error_pass = document.getElementById("bad_password");
        user_flag = true;
        pass_flag = false;
        

        // Limit username length to 12 characters
        if (username.length > 12 || username.length < 1)
        {
            user_flag = false;
            error_user.innerHTML = "Please create a username that is 12 or less characters!";
        }
        else (username.length < 13 || username.length > 0)
        {
            user_flag = true;
            error_user.innerHTML = "";
        }

        // Check if password was entered
        if (password.length < 8)
        {
            pass_flag = false;
            error_pass.innerHTML = "Please create a password that is 8 or more characters!";
        }

        else
        {
            pass_flag = true;
            error_pass.innerHTML = "";
        }

        if (user_flag && pass_flag)
        {
            window.open("./index.html", "_self");
        }
    }
}


//================================================== MAIN PAGE ==================================================

if (window.location.pathname=="/html_sba/index.html")
{

    document.getElementById("calculate").addEventListener("click", get_stats);

    function get_stats()
    {
        var bmi = 0;
        var bfp = 0;
        var cal = 0;
        var user_sex = document.getElementById("sex").value;
        var user_weight = document.getElementById("weight").value;
        var user_age = document.getElementById("age").value;
        var user_height = document.getElementById("height").value;
    
        function bmi_calc(weight, height)
        {
            var result = 0;
            
            result = 703 * ( weight / Math.pow(height, 2));
            return result;
        }
    
        function bfp_calc(sex, age, bmi)
        {
            var result = 0;
    
            if (sex.toLowerCase() == "male")
            {
                result = 1.20 * bmi + 0.23 * age - 16.2;
            }
            else
            {
                result = 1.20 * bmi + 0.23 * age - 5.4;
            }
            return result;
        }
    
        // Katch-McArdle Formula
        function calories_burned(bfp, weight)
        {
            var result = 0;
            
            result = 370 + 21.6 * (1 - (bfp/100)) * (weight/2.205);
    
            return result;
        }

        bmi = bmi_calc(user_weight, user_height);
        bfp = bfp_calc(user_sex, user_age, bmi);
        cal = calories_burned(bfp, user_weight);

        document.getElementById("bmi").innerHTML = Math.floor(bmi);
        document.getElementById("bfp").innerHTML = Math.floor(bfp) + "%";
        document.getElementById("calories").innerHTML = Math.floor(cal);
    }

    // Populate recommended workout websites

    function populate_sites(websites)
    {
        section1 = document.getElementById("sites_1");
        section2 = document.getElementById("sites_2");

        for (i = 0; i < websites.length; i++)
        {
            let a = document.createElement("a");

            if (i % 2 == 0)
            {
                a.innerHTML = websites[i];
                a.href = websites[i];
                a.target = "_blank";
                section1.appendChild(a);
                console.log(a);
            }
            else
            {
                a.title = websites[i];
                a.href = websites[i];
                a.target = "_blank";
                section2.appendChild(a);
                console.log(a);
            }
        }
    }

    document.addEventListener("DOMContentLoaded", function()
    {
        var websites = ["https://www.fitnessblender.com/", "https://darebee.com/", "https://www.muscleandfitness.com/", "https://www.livestrong.com/", "https://dailyburn.com/landing", "https://lafitness.com/Pages/Default.aspx", "https://24hourfitness.com/", "https://www.self.com/", "https://www.prevention.com/"];
        
        populate_sites(websites);
    });
}

//================================================== CONTACT PAGE ==================================================

if (window.location.pathname=="/html_sba/contact.html")
{






}