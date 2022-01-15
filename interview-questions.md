# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a block in Ruby?

Your answer: Ruby blocks contain the logic for anonymous functions within methods. This is pretty much all I know, I won't claim I understand them fully.

Researched answer: Ruby blocks are the actual anonymous functions which can be passed into methods. They are usually enclosed by a do-end statement or curly braces. They can have arguments, which are contained between pipes (||).

2. What is a gem?

Your answer: A gem is a package, or group of depdendencies, for Ruby which enables greater functionality. Gems are generally open-source (convenient since Ruby is also open-source). They are installed via RubyGems, a package manager.

Researched answer: Ruby Gems are open-source, the format for which is governed by a standard code structure which includes the lib directory (where the code is actually stored), the test or spec directory (contains tests for the code), usually a Rakefile (automatically runs tests and generates code), an executable file in the bin directory, a readme file, and the gemspec, which contains pertinent info about the gem itself.

3. What is Ruby on Rails?

Your answer: Ruby on Rais is a full-stack framework based on the Ruby language, which offers a quick means of making a full stack website. In place of versatility, Rails emphasizes specialization and quick turn around time for web development. It uses the Model-View-Controller layout for website development. It is often paired with other OOP-based languages, since Ruby is entirely OOP-based.

Researched answer: There are a number of noteable websites which are written in Rails: Github, Kickerstarter (kind of a scam website now but still noteworthy), Twitch, Instacart, Soundcloud, etc.

4. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a database where information is stored inside of instances, with different pieces of information pertaining to said instances being organized by named columns. They require primary keys so that there is a unique identifier for each instance, which can be used for manipulating or reading data (or any other CRUD action). I would assume there are other types of databases but I'm not sure what they are.

Researched answer: A relational database, or a Relational Database Management System (RDBMS), is a collection of data items with pre-defined relationships between them. Items are organized by columns and rows. They are based on the relational model, which emphasizes maintaining data consistency across applications and database copies (or instances). There are four properties which define relational databases (under the acroynm A.C.I.D): Atomicity, Consistency, Isolation, and Durability. Atomicity defines all of the elements that make up a complete database transaction. Consistency defines the rules for maintaining data points in the correct state after a transaction. Isolation keeps the effect of a transaction invisible to other until it is committed. Durability ensures that data changes become permanent once the transaction is committed. The other kind of database, called a non-relational database, does not use any tables, rows, or primary keys to store data. Each database is customized depending on the dataset being stored.

5. What are primary keys? Why are they important?

Your answer: Primary keys are unique identifiers for instances within a relational database. They are needed so that there is a way to reference any given instance w/o having any redundancy. They are especially useful for updating individual instances. A database can have as many primary keys as storage space allows.

Researched answer: The Active Record, in Rails, create a column naned id which is used for storing primary keys. It defaults to being an integer value, though it can be changed in Rails. UUIDs are a viable option to use in place of integers. They are random strings in a predefined format, which are considered more secure than integers.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: REST stands for Representational State Transfer. In following this convention, we termed the phrase RESTful routes, the convention for which is used to map HTTP methods and CRUD actions together. There are 7 RESTful routes: Index, which displays a list of all websites; New, which shows the form to create a new website; Create, which adds a new website to the database; Show, which shows info about the websites; Edit, which shows the edit form for a website; Update, which updates a website; and Destroy, which deletes a website.

2. JSON: JSON, which stands for Javascript Object Notation, is an opne standard file format and data interchange format which uses human-readable text to store and transmit data objects consisting of attribute-value pairs and arrays. It is typically used for transmitting data in web applications.

3. ERB: ERB, which stands for Embedded RuBy, is a program in Rails which generates HTML files with Ruby code embedded inside. These HTML files can be rendered front-end web pages, and so servers as a link between the front-end and the back-end of the application.

4. Params: Params is short for parameter, which is a placeholder within a method or a function used to pass arguements to the code block in order to create logical evaluations.

5. API: API stands for Application Programming Interface. It is a software intermediary which allows two applications to talk to each other. Some examples of uses for APIs include websites which collect data from other websites for display (kayak.com comes to mind), fingerprint authentication, etc.
