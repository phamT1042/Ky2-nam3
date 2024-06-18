<%@page import="model.Book"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Chỉnh sửa sách </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles/index.css"> 
    </head>
    <body>
        <div class="main">
            <form class="form" method="post" action="updateBook">
                <h1 style="margin-bottom: 30px"> Chỉnh sửa thông tin sách </h1>

                <input type="hidden" name="id" value="<%= ((Book) request.getAttribute("book")).getId()%>"/>
                
                <div class="form-element">
                    <label for="name"> Tên sách </label>
                    <input id="name" type="text" name="name" value="<%= ((Book) request.getAttribute("book")).getName()%>" required/>
                </div>

                <div class="form-element">
                    <label for="author"> Tên tác giả </label>
                    <input id="author" type="text" name="author" value="<%= ((Book) request.getAttribute("book")).getAuthor()%>" required/>
                </div>

                <div class="form-element">
                    <label for="publicYear"> Năm sản xuất </label>
                    <input id="publicYear" type="text" name="publicYear" value="<%= ((Book) request.getAttribute("book")).getPublicYear()%>" required/>
                </div>

                <button class="form-submit" type="submit"> Cập nhật </button>
                <button class="form-submit" type="button" onclick="location.href='./list.jsp'"> Hủy </button>
            </form>
        </div>
    </body>
</html>