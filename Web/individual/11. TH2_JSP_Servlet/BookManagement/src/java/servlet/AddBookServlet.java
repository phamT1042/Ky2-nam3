/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlet;

import jakarta.servlet.ServletContext;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;
import model.Book;

/**
 *
 * @author Administrator
 */
public class AddBookServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        String name = request.getParameter("name");
        String author = request.getParameter("author");
        String publicYear = request.getParameter("publicYear");

        Book book = new Book(name, author, publicYear);

        ServletContext context = getServletContext();
        List<Book> bookList = (List<Book>) context.getAttribute("bookList");
        if (bookList == null) {
            bookList = new ArrayList<>();
            context.setAttribute("bookList", bookList);
        }
        bookList.add(book);
        
        response.sendRedirect("index.jsp");
    }

}
