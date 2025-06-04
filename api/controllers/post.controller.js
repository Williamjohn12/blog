import {
    getAllPosts,
    getPostById,
    deletePostById,
    createPost,
} from "../models/post.model.js";

const postController = {
    getAll: async (req, res) => {
        try {
            const posts = await getAllPosts();
            res.status(200).json(posts);
        } catch (error) {
            console.error("Error fetching posts:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const post = await getPostById(id);

            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            }

            res.status(200).json(post);
        } catch (error) {
            console.error("Error fetching post by ID:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const success = await deletePostById(id);

            if (!success) {
                return res.status(404).json({ message: "Post not found or already deleted" });
            }

            res.status(200).json({ message: "Post deleted successfully" });
        } catch (error) {
            console.error("Error deleting post:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    },

    create: async (req, res) => {
        try {
            const { title, content, description } = req.body;

            if (!title || !content || !description) {
                return res.status(400).json({ message: "All fields are required" });
            }

            const newPost = await createPost({ title, content, description });
            res.status(201).json(newPost);
        } catch (error) {
            console.error("Error creating post:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
};

export default postController;
