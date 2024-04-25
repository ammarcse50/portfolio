import React from "react";

const Contact = () => {
  return (
    <div className="pt-32 mb-10" name="contact">
      <h2 className="text-center text-4xl mb-10 font-semibold text-sky-500">
       Contact Me
      </h2>
      <div>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>


      </div>
    </div>
  );
};

export default Contact;
