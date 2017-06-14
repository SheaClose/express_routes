var user = {
  name: "Jacob",
  location: "Gunter",
  occupations: ["Teacher","Developer"],
  hobbies: [
    {
      name: "Jiujitsu",
      type: "Athletics"
    },
    {
      name: "Swimming",
      type: "Athletics"
    },
    {
      name: "Watch Movies",
      type: "Entertainment"
    }
  ],
  family: [
    {
      name: "Courtney",
      relation: "Wife",
      gender: "Female"
    },
    {
      name: "Charlie",
      relation: "Son",
      gender: "Male"
    },{
      name: "Lucy",
      relation: "Daughter",
      gender: "Female"
    }
  ],
  restaurants: [
    {
      name: "Razzoo's",
      type: "Cajun",
      rating: 8
    },
    {
      name: "Bone Daddy's",
      type: "BBQ",
      rating: 7
    },
    {
      name: "McDonald's",
      type: "Fast Food",
      rating: 1
    }
  ]
}
module.exports = user;
