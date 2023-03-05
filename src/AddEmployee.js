import React from 'react'

export const AddEmployee = () => {
  return (
        <form className='container' name="myForm" action="" method="GET">
            <div>
                <h1>
                    Add Employee Details:
                </h1>
                <br>
                </br>

            </div>
            <div></div>
                <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">
</input>
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">
    </input>
  
    <input type="submit" value="Submit">
    </input>
    </form>

  )
}
