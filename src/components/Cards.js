import React, { useState } from "react";
import Card from "./Card.js";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  //it returns you a list of courses recieved from API response
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      console.log("printing courses");
      console.log(courses);
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    }
    else {
        //main sirf specific category data array paas krunga
        return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {!courses ? (
        <p>No Data Found</p>
      ) : (
        getCourses().map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />
          );
        })
      )}
    </div>
  );
};

export default Cards;
