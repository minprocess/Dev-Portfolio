import React from 'react';

export default function Contact() {

  // SEE src/utils/helpers for
  // 
  // 

  return (
    <div className="container">
      <div className="col=md-5">
        <h4><strong>Contact Us</strong></h4>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name"/>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="tel" className="form-control" placeholder="Phone"/>
          </div>
          <textarea className="form-control" cols="30" rows="3" placeholder="Message"/>
          <Link className="btn btn-outline-primary text-uppercass">
            <i className="fa fa-paper-plane-o" aria-hidden="true"/>
            <i className="fab fa-telegram-plane"/>&nbsp;Send
        </Link>
        </form>
      </div>
    </div>
  );
/*  
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
    </div>
  );
*/
}
