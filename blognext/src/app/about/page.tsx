import "../styles/about.css";
// import placeholder from "./assets/imgs/placeholder.png";
import Image from "next/image";

const about = () => {
  return (
    <>
      <div className="abt">
        <div className="abt-left ">
          <h1 className="heading">
            <b>About Us</b>
          </h1>
          <p className="abt-para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
            blanditiis nihil nisi voluptatum est porro mollitia omnis aspernatur
            consequatur assumenda quaerat, aliquid magnam temporibus
            perferendis. Aliquid commodi exercitationem dolorem repellat? Nemo,
            vitae fugiat tempore nesciunt quos veniam temporibus nihil
            cupiditate dolore pariatur architecto ea repellat qui laborum
            maiores voluptatibus perspiciatis consectetur quo quidem adipisci
            aliquid dolores commodi ad? Quia, obcaecati? Cupiditate molestiae ab
            quo similique architecto reprehenderit ipsa ipsam consequuntur eaque
            asperiores, blanditiis nihil repellendus, rerum animi. Recusandae,
            repellat accusamus pariatur accusantium voluptas voluptatum
            molestias
          </p>
        </div>
        <div className="abt-right">
          <Image
            src="/assets/imgs/blog_placeholder.png"
            alt="Placeholder"
            width={500}
            height={300}
          />
        </div>
      </div>

      <div className="contact">
        <h1 className="margin">
          <b>Contact Us</b>
        </h1>
        <div className="row margin">
          <div className="col-md-6 col-sm-12">
            email, social icons, phone numbers, copywrite links
          </div>
          <div className="col-md-6 col-sm-12 ">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control bg-dark border-dark"
                  id="name"
                  aria-describedby=""
                  placeholder="Enter name here"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control bg-dark border-dark"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email here"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="text-box" className="form-label">
                  Your query
                </label>
                <textarea
                  name="text-box"
                  id="text-box"
                  className="form-control bg-dark border-dark"
                  maxLength={1000}
                  placeholder="Max 1000 words"
                  rows={10}
                ></textarea>
              </div>
              <button type="submit" className="btn bg-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
