import com.m2i.poe.media.Book;
import com.m2i.poe.media.EntityManagerFactorySingleton;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

public class JPAMain {

    public static void main(String[] args) {
        EntityManager em = EntityManagerFactorySingleton.getEntityManager();

        Book b = em.find(Book.class,1);
        System.out.println(b.getTitle());

        Book c = new Book();
        c.setTitle("monLivreTest");
        c.setPrice(1200);

    Book d = em.find(Book.class, 7);


        EntityTransaction tx = em.getTransaction();
        tx.begin();
        //em.persist(c);
        em.remove(d);
        tx.commit();
        //System.out.println("update OK!");
        System.out.println("remove OK!");
    }
}
