/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package servlet;

import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 *
 * @author Administrator
 */
public class Login extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
        String url = "/index.jsp";

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        String message;
        if ("abc".equals(username) && "123".equals(password)) {
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
