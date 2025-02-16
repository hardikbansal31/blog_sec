import styles from "../styles/about.module.css";
// import placeholder from "./assets/imgs/placeholder.png";
import Image from "next/image";

const about = () => {
  return (
    <>
      <div className={styles.abt}>
        <div className={`${styles.abtleft}`}>
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
        <div className={styles.abtright}>
          <Image
            src="/assets/imgs/blog_placeholder.png"
            alt="Placeholder"
            width={500}
            height={300}
          />
        </div>
      </div>

      <div className={styles.contact}>
        <div className="row margin">
          <div className="col-md-6 col-sm-12" >
            <h1 className="margin">
              <b>Our Mission</b>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In et
              commodi debitis fugit odio perferendis amet, sapiente inventore
              cumque eum vitae itaque earum placeat animi eius obcaecati, dicta
              cupiditate temporibus. Perspiciatis, obcaecati aut perferendis
              blanditiis soluta magnam ipsam quasi architecto? Ad magni,
              blanditiis facilis velit consectetur repellendus odit itaque
              architecto ab inventore doloremque earum. Laboriosam
              exercitationem accusantium provident blanditiis excepturi! Eveniet
              inventore magnam rerum veniam nesciunt quaerat optio reprehenderit
              ut molestiae, aspernatur totam nisi esse officiis quo, laudantium
              eligendi corporis debitis repellendus saepe illum placeat
              similique, maxime ratione! Voluptas, dolores. Velit, at! Error
              inventore temporibus quasi quis ea atque, obcaecati veniam nostrum
              provident voluptatem laborum officiis tempora animi a libero?
              Debitis blanditiis voluptatem corporis nemo quisquam est ipsa
              obcaecati quam. Iusto molestias velit minima consectetur
              distinctio ullam explicabo ad eius nostrum illo. Optio quas atque
              fuga molestias tempora, odit porro laboriosam. Quia odit ipsam
              quidem quod cumque quas impedit maxime? Mollitia quidem deleniti
              officiis sit dolorem. Labore adipisci officia cupiditate facilis.
              Cupiditate ea quaerat ad. Eveniet facilis incidunt maiores
              eligendi, magnam aspernatur possimus fuga, enim molestias deserunt
              nesciunt ipsa ex. Dignissimos, quos laborum provident quaerat
              cumque est quas cupiditate.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <h1>
              <b>Queries</b>
            </h1>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control bg-dark border-dark"
                  id="name"
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
