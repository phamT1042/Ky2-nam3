<%-- 
    Document   : index
    Created on : Mar 28, 2024, 10:05:22 AM
    Author     : Administrator
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Login form </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles/index.css"> 
    </head>
    <body>
        <div class="main">

            <form class="form" action="login" method="post">
                <h1 style="margin-bottom: 30px"> Nhập thông tin </h1>

                <div class="form-element">
                    <label for="fullname"> Username </label>
                    <input id="fullname" type="text" name="username" required/>
                </div>

                <div class="form-element">
                    <label for="password"> Password </label>
                    <input id="password" type="password" name="password" required/>
                </div>
                
                <p><i>${message}</i></p>

                <button class="form-submit" type="submit"> Đăng nhập </button>
            </form>
        </div>
    </body>
</html>
