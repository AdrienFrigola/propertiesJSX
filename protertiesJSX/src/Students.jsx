import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            {/* Display name */}
            <p>Name: {props.name}</p>
            {/* Display age */}
            <p>Age: {props.age}</p>
            {/* Display student status */}
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// Define prop types for Student component
Student.propTypes = {
    name: PropTypes.string, // Name should be a string
    age: PropTypes.number, // Age should be a number
    isStudent: PropTypes.bool, // isStudent should be a boolean
}

// Set default props for Student component
Student.defaultProps = {
    name: "Guest", // Default name is "Guest"
    age: 0, // Default age is 0
    isStudent: false, // Default student status is false
}

export default Student
