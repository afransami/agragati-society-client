export const saveUser = (user) => {  

    const currentUser = {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    } 
    console.log(user);

    fetch(`http://localhost:5000/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  


  export const saveMemberDetails = (dataTotal) => {  
    fetch("http://localhost:5000/membersForm", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataTotal),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };



