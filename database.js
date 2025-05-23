import Database from "better-sqlite3";
import * as db from './data/database.sqlite'

db.prepare = new Database(`CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY, title STRING, content STRING)`).run()


export const getRecipes = () => db.prepare('SELECT * FROM recipes').all()
export const getRecipe = (id) => db.prepare('SELECT * FROM recipes WHERE id = ?').get(id)
export const saveRecipe = (title, content) => db.prepare('INSERT INTO recipes (title, content) VALUES (?, ?)').run(title, content)
export const deleteRecipe = (id) => db.prepare('DELETE FROM recipes WHERE id = ?').run(id)

const recipes = [
    {title: "Gulas", content: "leves"},
    {title: "Alma", content: "leves"},
    {title: "Bab", content: "leves"},
    {title: "Borsó", content: "leves"}
]

for (const recipe of recipes) saveRecipe(recipe.title, recipe.content)