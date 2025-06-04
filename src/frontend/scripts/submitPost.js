import { HOST } from "../../util/config";
/*function submitPost() {
  const boxA = document.getElementById("box-put");

const boxB = document.getElementById("box-putb");
const boxC = document.getElementById("box-putc");
  if (!boxA) {
    alert("Input field not found!");
    return;
  }
  if (boxA.value.trim() === '' ||
      boxB.value.trim() === '' ||
      boxC.value.trim() === '') {
    alert("A POST NEEDS A TITLE, BODY, AND DESCRIPTION!");
  } else {
    const title = document.getElementById("box-put").value;
    const  content = document.getElementById("box-putb").value;
    const description = document.getElementById("box-putc").value;
    const popup = window.open('http://localhost:3000/get-all17b', '_blank');
    popup.close();
  }
} */


  function RemovePost() {
      window.location.reload();
  }

  const submitPost = async () => {
    const title = document.getElementById("box-put").value;
    const content = document.getElementById("box-putb").value;
    const description = document.getElementById("box-putc").value;

    const response = await fetch(`${HOST}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content, description })
    });

    if (response.ok) {
      alert('Post created successfully!');
      window.location.reload();
    } else {
      alert('A blog needs a title, body, and description!');
    }
  }

  


// button and alerts work now , but it is needed to make the sql code it is sended dynamic so blogs can be unquie