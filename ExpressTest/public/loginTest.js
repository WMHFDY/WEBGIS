        //简单的登录 -  注册demo
        function login() {
            var name = document.getElementById("loginNme").innerText();
            var pwd = document.getElementById("loginPwd").innerText();

            $.post("./user/login", {
                    username: name,
                    pwd: pwd
                },
                function(data, status) {
                    alert("Data: " + data + "\nStatus: " + status);
                });
        }

        //简单的登录 -  注册demo
        function regist() {
            var name = document.getElementById("loginNme").innerText();
            var pwd = document.getElementById("loginPwd").innerText();

            $.post("./user/regist", {
                    username: name,
                    pwd: pwd
                },
                function(data, status) {
                    alert("Data: " + data + "\nStatus: " + status);
                });
        }