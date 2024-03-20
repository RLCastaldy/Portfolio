// TODO: Modify this function so that it accepts props from the parent component
export default function Content(props) {
    const contentStyle = {
      width: '18rem',
    };
  
    // Helper function that generates a random width for our placeholder images
    const randomWidth = () => {
      const number = Math.random() * (300 - 200) + 200;
      return number.toString().split('.')[0];
    };
  
    // TODO: Update the return statement to display the data we received as props
    return (
      <div className="container">
        <div className="content" style={contentStyle}>
          <div className="content-body">
            <h5 className="content-title">Name: {props.name}</h5>
            <p className="content-text">Description: {props.description}</p>
            <a href="#" className="btn btn-primary">
              Hire {props.name}
            </a>
          </div>
        </div>
      </div>
    );
  }