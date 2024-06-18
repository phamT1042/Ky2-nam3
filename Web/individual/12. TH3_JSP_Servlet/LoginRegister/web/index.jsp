<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Login form </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style/index.css"> 
    </head>
    <body>
        <div class="main">

            <form class="form" action="login" method="post">
                <h1 style="margin-bottom: 30px"> Nhập thông tin </h1>

                <div class="form-element">
                    <label for="username"> Username </label>
                    <input id="username" type="text" name="username" required/>
                </div>

                <div class="form-element">
                    <label for="password"> Password </label>
                    <input id="password" type="password" name="password" required/>
                </div>
                
                <p><i>${message}</i></p>

                <div>
                    <button class="form-submit" type="submit"> Đăng nhập </button>
                    hoặc
                    <a href="register.jsp" class="form-submit"> Đăng ký </a>
                </div>
                
            </form>
        </div>
    </body>
</html>
