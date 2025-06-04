import { HOST } from "../../util/config";

async function getPosts() {
    try {
        // Fetch posts data
        const response = await fetch(`${HOST}/get-all`);
        const data = await response.json();
        
        // Get the container element
        const list = document.getElementById('Vis-container');
        
        // Clear existing content to avoid duplicates when refreshing
        list.innerHTML = '';
        
        // Add spacing to list items
        const style = document.createElement('style');
        style.textContent = `
            #Vis-container li {
                margin-bottom: 10px;
            }
            .post-item {
                margin-bottom: 20px;
                border-bottom: 1px solid #eee;
                padding-bottom: 15px;
            }
            .removal {
                margin-left: 10px;
                background-color: #ff4d4d;
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 40px;
                cursor: pointer;
            }
                .removal:hover{
                     background-color: rgb(255, 0, 0);
                    }       
        `;
        document.head.appendChild(style);
        
        // Display each post
        data.forEach((post) => {
            // Create a container for each post to group elements
            const postContainer = document.createElement('div');
            postContainer.classList.add('post-item');
            postContainer.setAttribute('data-post-id', post.id);
            
            // Create title link
            const labby = document.createElement('a');
            labby.innerText = post.title;
            labby.setAttribute('href', `file:///home/william/Desktop/hgyg/images/blog/blogger/indiv1.html?id=${post.id}`);
            labby.classList.add('testesty');

            // create content Element
            const looo = document.createElement('p');
            looo.innerText = post.content;

            // Create description element
            const loco = document.createElement('p');
            loco.innerText = post.description;
            
            // Create delete button
            const dolete = document.createElement('button');
            dolete.innerText = 'Remove';
            dolete.classList.add('removal');
            
            // Add event listener to delete button
            dolete.addEventListener('click', async () => {
                await deletePost(post.id, postContainer);
            });
            
            // Add elements to post container
            postContainer.appendChild(labby);
            postContainer.appendChild(dolete);
            postContainer.appendChild(loco);
            postContainer.appendChild(looo);
            // Add post container to the list
            list.appendChild(postContainer);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Function to delete a post
async function deletePost(postId, domElement) {
    try {
        const response = await fetch(`${HOST}/delete/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            // Remove the element from the DOM if deletion was successful
            domElement.remove();
            console.log(`Post ${postId} deleted successfully`);
        } else {
            console.error('Failed to delete post:', await response.text());
        }
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}

// Initialize the page
getPosts();
   

   
 




