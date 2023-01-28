### Logging of development process
##### Here i will note down all the finding, issues and error encountred during development process.

### **Issues**

- **Error:**  `django.db.migrations.exceptions.InconsistentMigrationHistory: Migration admin.0001_initial is applied before its dependency mail.0001_initial on database 'default'`. <br>

   **Cause:** This error often cause when we define `User Model` in a django app, If we make migrations of whole project and migrate than Django creates `User Model` by defination of default admin `User Model`. And if we specifically run command `python manage.py makemigrations appname` and migrate then it conflicts with already existing user model in database. ****Incomplete answer**
 
   **Solution:** Either delete whole database and run command `python manage.py makemigrations appname`. <br>
