const mongoose = require("mongoose");

const thingSchema = mongoose.Schema({
    name: { type: String, required: true }, /* nom de la sauce */
    manufacturer: { type: String, required: true }, /* fabricant de la sauce */
    mainPepper: { type: String, required: true }, /* le principal ingrédient épicé de la sauce */
    imageUrl: { type: String }, /* l'URL de l'image de la sauce téléchargée par l'utilisateur */
    heat: { type: Number, }, /* nombre entre 1 et 10 décrivant la sauce */
    likes: { type: Number, default: 0 }, /* nombre d'utilisateurs qui aiment (= likent) la sauce */
    dislikes: { type: Number, default: 0 }, /* nombre d'utilisateurs qui n'aiment pas (= dislike) la sauce */
    userId: { type: String }, /* l'identifiant MongoDB unique de l'utilisateur qui a créé la sauce */
    usersLiked: [String], /* tableau des identifiants des utilisateurs qui ont aimé (= liked) la sauce */
    usersDisliked:  [String],  /* tableau des identifiants des utilisateurs qui n'ont pas aimé (= disliked) la sauce */
})

module.exports = mongoose.model('Thing', thingSchema);