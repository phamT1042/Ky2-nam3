package servlet;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Book;

import java.io.IOException;
import java.util.List;

public class EditBookServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");

        ServletContext context = getServletContext();
        List<Book> bookList = (List<Book>) context.getAttribute("bookList");
        
        for (Book book : bookList) {
            if (book.getId().equals(id)) {
                request.setAttribute("book", book);
                break;
            }
        }

        request.getRequestDispatcher("edit.jsp").forward(request, response);
    }
}