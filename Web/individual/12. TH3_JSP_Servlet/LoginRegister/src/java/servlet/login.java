/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlet;

import dao.UserDAO;
import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.User;

@WebServlet(name = "login", urlPatterns = {"/login"})
public class login extends HttpServlet {
    
    private UserDAO userDAO = new UserDAO();
    
    @Override
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        User user = new User(username, password);

        String message;
        if (userDAO.checkLogin(user)) {
            message = "Đăng nhập thành công";
        } else {
            message = "Đăng nhập thất bại, sai mật khẩu hoặc tài khoản";
        }

        request.setAttribute("message", message);

        getServletContext()
                .getRequestDispatcher("/index.jsp")
                .forward(request, response);
    }

}
