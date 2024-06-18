package dao;

import context.DBConnect;
import java.sql.*;
import model.User;

public class UserDAO {

    private Connection conn = null;
    private PreparedStatement ps = null;
    private ResultSet rs = null;

    public boolean checkLogin(User user) {
        try {
            String query = "SELECT * FROM account WHERE username = ? AND password = ?";
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(query);
            ps.setString(1, user.getUsername());
            ps.setString(2, user.getPassword());
            rs = ps.executeQuery();

            if (rs.next()) {
                return true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            rs = null;
            ps = null;
        }
        return false;
    }

    public String addUser(User user) {
        try {
            String checkQuery = "SELECT * FROM account WHERE username = ?";
            conn = new DBConnect().getConnection();
            ps = conn.prepareStatement(checkQuery);
            ps.setString(1, user.getUsername());
            rs = ps.executeQuery();
            if (rs.next()) 
                return "Username đã tồn tại";

            String insertQuery = "INSERT INTO account values (?, ?, ?)";
            ps = conn.prepareStatement(insertQuery);
            ps.setString(1, user.getUsername());
            ps.setString(2, user.getPassword());
            ps.setString(3, user.getEmail());
            int affectedRows = ps.executeUpdate();

            if (affectedRows > 0) return "Đăng ký thành công";
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            rs = null;
            ps = null;
        }
        return "Đăng ký thất bại, có lỗi xảy ra";
    }
}
