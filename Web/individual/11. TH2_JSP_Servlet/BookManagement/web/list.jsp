<%-- 
    Document   : list
    Created on : Mar 28, 2024, 10:33:25 AM
    Author     : Administrator
--%>

<%@page import="java.util.List"%>
<%@page import="model.Book"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Danh sách </title>
        <link rel="stylesheet" href="styles/index.css"> 
    </head>
    <body>
        <div class="main">
            <div class="form" style="width: auto">
                <h1 style="margin-bottom: 32px">Danh sách sách</h1>
                <table border="1">
                    <tr>
                        <th style="padding: 5px">Tên sách</th>
                        <th style="padding: 5px">Tác giả</th>
                        <th style="padding: 5px">Năm xuất bản</th>
                    </tr>
                    <% ServletContext context = request.getServletContext();
                        List<Book> bookList = (List<Book>) context.getAttribute("bookList");
                        if (bookList != null) {
                        for (Book book : bookList) {%>
                    <tr>
                        <td style="padding: 5px"><%= book.getName()%></td>
                        <td style="padding: 5px"><%= book.getAuthor()%></td>
                        <td style="padding: 5px"><%= book.getPublicYear()%></td>
                    </tr>
                    <%    }
            }%>
                </table>
                
                <button class="form-submit" type="button" onclick="location.href='./index.jsp'"> Trở về </button>
            </div>
        </div>
    </body>
</html>
