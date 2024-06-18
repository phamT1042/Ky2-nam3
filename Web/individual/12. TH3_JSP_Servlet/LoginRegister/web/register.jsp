<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Register form </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style/index.css">
    </head>
    <body>
        <div class="main">

            <form class="form" action="register" method="post">
                <h1 style="margin-bottom: 30px"> Nhập thông tin đăng ký </h1>

                <div class="form-element">
                    <label for="fullname"> Username </label>
                    <input id="fullname" type="text" name="username" required/>
                </div>
            
                <div class="form-element">
                    <label for="email"> Email </label>
                    <input id="email" type="email" name="email" required/>
                </div>
                
                <div class="form-element">
                    <label for="password"> Password </label>
                    <input id="password" type="password" name="password" required/>
                </div>
                
                <p><i>${message}</i></p>

                <button class="form-submit" type="submit"> Đăng ký </button>
                hoặc <a href="index.jsp" class="form-submit"> Đăng nhập </a>
            </form>
        </div>
    </body>
</html>
