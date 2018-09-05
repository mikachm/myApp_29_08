import com.m2i.poe.media.Book;
import com.m2i.poe.media.BookJPARepository;
import com.m2i.poe.media.Publisher;
import org.hibernate.hql.internal.ast.SqlASTFactory;
import org.junit.Test;

import java.sql.SQLException;
import java.text.Normalizer;
import java.util.List;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.instanceOf;


public class BookJPARepositoryTest {

    @Test
    public void monTest(){
        int i = 1;
        i += 1;
        assertEquals(2,i);
    }

    @Test
    public void getAllTest() throws SQLException{
        BookJPARepository repo = new BookJPARepository();
        List <Book> l = repo.getAll();
        assertNotNull(l);
        assertEquals(9, l.size()); /* test de la taille de la liste renvoyée*/
        //assertThat(lb, instanceOf(List <Book>));
    }

    @Test
    public void getByIdTest() throws  SQLException {
        BookJPARepository repo = new BookJPARepository();
        Book b = repo.getById(2);
        assertNotNull(b);
        assertEquals(2, b.getId());
        assertEquals(50, b.getPrice(), 0.001);

        /*Test de la valeur du titre*/
        /*Normalize*/
        /*ToUpperCase*/
        String s = b.getTitle();
        s = Normalizer.normalize(s, Normalizer.Form.NFD);
        s = s.replaceAll("[\\p{InCombiningDiacriticalMarks}]", "");
        s = s.toUpperCase();
        assertEquals("JAVA POUR LES DEBUTANTS", s);
    }

    @Test
    public void addTest() throws SQLException {
        BookJPARepository repo = new BookJPARepository();
        Book b = new Book();
        b.setTitle("le seigneur des anneaux");
        b.setPrice(50.5);
        repo.add(b);
    }

    @Test
    public void removeTest() throws SQLException {
        BookJPARepository repo = new BookJPARepository();
        Book b = repo.getById(16);
        assertNotNull(b);
        repo.remove(b);
        //b = repo.getById(12);
        //assertEquals(12, b.getId());
    }

    @Test
    public void updateTest() throws SQLException {
        BookJPARepository repo = new BookJPARepository();
        Book b = repo.getById(15);
        b.setPrice(35);
        repo.update(b);
    }
}
