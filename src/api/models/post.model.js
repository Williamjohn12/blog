import { getDbClient } from "../lib/db.js";

const client = getDbClient();

export const getAllPosts = async () => {
    const result = await client.query('SELECT * FROM "post" ');
    

    return result.rows;
}

export const getPostById = async (id) => {
    const result = await client.query('SELECT * FROM "post" WHERE id = $1', [id]);
    return result.rows[0];
}

export const deletePostById = async (id) => {
    const result = await client.query('DELETE FROM "post" WHERE id = $1', [id]);
    return result.rowCount > 0;
}

export const createPost = async (post) => {
    const result = await client.query(
        'INSERT INTO "post" (title, content, description) VALUES ($1, $2, $3) RETURNING *',
        [post.title, post.content, post.description]
    );
    return result.rows[0];
}
