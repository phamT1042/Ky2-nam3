<%-- 
    Document   : index
    Created on : Mar 28, 2024, 10:33:10 AM
    Author     : Administrator
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Thêm sách </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles/index.css"> 
    </head>
    <body>
        <div class="main">
            <form class="form" method="post" action="addBook">
                <h1 style="margin-bottom: 30px"> Nhập thông tin sách </h1>

                <div class="form-element">
                    <label for="name"> Tên sách </label>
                    <input id="name" type="text" name="name" required/>
                </div>

                <div class="form-element">
                    <label for="author"> Tên tác giả </label>
                    <input id="author" type="text" name="author" required/>
                </div>

                <div class="form-element">
                    <label for="publicYear"> Năm sản xuất </label>
                    <input id="publicYear" type="text" name="publicYear" required/>
                </div>

                <button class="form-submit" type="submit"> Thêm </button>
                <button class="form-submit" type="button" onclick="location.href='./list.jsp'"> Xem danh sách </button>
            </form>
        </div>
    </body>
</html>

