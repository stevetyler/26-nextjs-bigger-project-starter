import MeetupList from "../components/meetups/MeetupList";

const dummy_meetups = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
    {   
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address 10, 12345 Some City",
    description: "This is a second meetup!",
  }
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups}/>
}

export default HomePage;

// reserved name, only works in page components
// called at build time on server side
export async function getStaticProps() {
  // all code here is never exposed to the client
  // eg fetching sensitive data from a database

  // fetch data from an API
  return {
    props: {
      meetups: dummy_meetups
    },
    revalidate: 10
  }
}