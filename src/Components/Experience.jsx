import experience from "../Data/experience.json";

const Experience = () => {
  return (
    <div>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <div
              key={data.id}
              className="ex-items text-center my-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="left">
                <img
                  src={`/Assets/${data.imageSrc}`}
                  alt="img"
                  width="150px"
                  height="100px"
                />
              </div>
              <div className="right">
                <h2>{data.role}</h2>
                <h5>
                  <span style={{ color: "yellowgreen" }}>
                    {data.startDate} {data.endDate}
                  </span>{" "}
                  <span style={{ color: "yellow" }}>{data.location}</span>
                </h5>
                {data.experiences.map((newData, i) => {
                  return (
                    <span style={{ color: "yellow" }} key={i}>
                      <h6>{newData}</h6>
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
