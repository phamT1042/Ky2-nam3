package servlet;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Book;

import java.io.IOException;
import java.util.List;

public class UpdateBookServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");
        String name = request.getParameter("name");
        String author = request.getParameter("author");
        String publicYear = request.getParameter("publicYear");
        
        ServletContext context = getServletContext();
        List<Book> bookList = (List<Book>) context.getAttribute("bookList");
        
        for (Book book : bookList) {
            if (book.getId().equals(id)) {
                book.setName(name);
                book.setAuthor(author);
                book.setPublicYear(publicYear);
                break;
            }
        }

        response.sendRedirect("list.jsp");
    }
}