import express from 'express'
import * as db from './util/database.js'

const app = express()
app.use(express.json())
const PORT = 8080

app.get('/recipes', (req, res) => {
    try {
        const data = db.getRecipes(recipes)
        res.status(200).json(recipes)
    } catch (err) {
        res.status(500).json({message: `${err}`})
    }
})

app.get('/recipes/:id', (req, res) => {
    const data = db.getRecipe(req.params.id)
    if (!data) {
        return res.status(404).json({message: 'Recipe not found'})
    }
    res.status(200).json(recipe)
})

app.post('/recipes', (req, res) => {
    const data = db.saveRecipe(req.body)
    if (data.changes != 1) {
        return res.status(501).json({message: 'Invalid'})
    }
    const savedRecipe = db.saveRecipe({title, content})
    if (!savedRecipe) {
        return res.status(400).json({message: 'Invalid exists'})
    }
    res.status(200).json(id, title, content)
}) 

app.delete('/recipes/:id', (req, res) => {
    const data = db.deleteRecipe(req.params.id)
    if (!data) {
        return res.status(404).json({message: 'Recipe not found'})
    }
    res.status(204).json({message: 'Delete successful'})
})

app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
})