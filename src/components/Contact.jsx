import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
     
    // const [result, setResult] = React.useState("");

    const handleSubmitMessage = async(event) =>{

        event.preventDefault()

        const formData = new FormData(event.target);

        formData.append("access_key", "2e78d586-95c4-4cac-8549-780f82495b0b");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          
          Swal.fire({
            title: "Thanks for contacting!",
            text: "We got your message!",
            icon: "success"
          });
          event.target.reset();
        } else {
          console.log("Error", data);
         
        }
      };

   

    
  return (
    <div className="pt-32 mb-10" name="contact">
      <h2 className="text-center text-4xl font-semibold text-sky-500">
       Contact Me
      </h2>
      <div>
      <form onSubmit={handleSubmitMessage} className="card-body w-1/2 mx-auto" >
        <h2 className="text-white mb-10">Feel free to inquire or connect via my social accounts for any queries..</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
         
          <input type="name" name="name" placeholder="Your Name" className="input input-bordered hover:outline hover:outline-[#00eeff] outline outline-1 text-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email Address" className="input input-bordered hover:outline hover:outline-[#00eeff] outline outline-1  text-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Messaage</span>
          </label>
          <textarea placeholder="Your Message" name="message" className="input input-bordered border   hover:outline hover:outline-[#00eeff] outline outline-1 h-24 text-white"></textarea>
         
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary text-xl hover:outline hover:outline-white hover:bg-[#00eeff]">Contact</button>
        </div>
      </form>


      </div>
    </div>
  );
};

export default Contact;
