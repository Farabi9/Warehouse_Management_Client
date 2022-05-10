import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Blogs</h2>
           <div>
           <h3>
            Difference between javascript and nodejs?
            </h3>
            <h5>
                Ans: JavaScript is a simple programming language <br /> that runs in any browser JavaScript Engine. <br /> Whereas Node JS is an interpreter or running environment for a JavaScript <br /> programming language. <br /> NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be <br /> run on the server-side.
            </h5>
           </div>
           <div>
               <h3>
               When should you use nodejs and when should you use mongodb?
               </h3>
               <h5>
                   Ans: Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for <br /> traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
                   MongoDB is built on a <br /> scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving <br /> data schemas. As a document database, MongoDB makes it easy for developers to store structured or <br /> unstructured data. It uses a JSON-like format to store documents.

               </h5>
            
           </div>
           <div>
               <h3>
               Differences between sql and nosql databases?
               </h3>
               <h5>
                   Ans: SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
               </h5>
           </div>
           <div>
               <h3>
               What is the purpose of jwt and how does it work?
               </h3>
               <h5>
                   Ans:JSON Web Token  is an open standard  that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
               </h5>
           </div>
        </div>
    );
};

export default Blog;