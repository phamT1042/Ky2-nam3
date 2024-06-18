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
    private String id;
    private String name;
    private String author;
    private String publicYear;

    public Book(String name, String author, String publicYear) {
        this.name = name;
        this.author = author;
        this.publicYear = publicYear;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public void setName(String name) {
        this.name = name;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setPublicYear(String publicYear) {
        this.publicYear = publicYear;
    }

    @Override
    public String toString() {
        return "Book{" + "id=" + id + ", name=" + name + ", author=" + author + ", publicYear=" + publicYear + '}';
    }
    
    
}
