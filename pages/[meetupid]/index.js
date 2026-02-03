import MeetupDetail from "../../components/meetups/MeetupDetail";

function meetingDetails() {
  return (
        <MeetupDetail 
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg" 
            title="A First Meetup" 
            address="Some Address 5, 12345 Some City" 
            description="This is a first meetup!" 
        />
  );
}

// needed for dynamic pages that use getStaticProps to pre-render pages at build time
export async function getStaticPaths() {
  return {
    fallback: false, // why fallback is false: if user tries to access a page that was not pre-generated, they will get 404
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: 'A First Meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some Address 5, 12345 Some City',
        description: 'This is a first meetup!',
      },
    },
  };
}

export default meetingDetails;