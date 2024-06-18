/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package model;

import java.io.Serializable;

/**
 *
 * @author Administrator
 */
public class Book implements Serializable {
    private String name;
    private String author;
    private String publicYear;

    public Book(String name, String author, String publicYear) {
        this.name = name;
        this.author = author;
        this.publicYear = publicYear;
    }

    public String getName() {
        return name;
    }

    public String getAuthor() {
        return author;
    }

    public String getPublicYear() {
        return publicYear;
    }
    
    
}
