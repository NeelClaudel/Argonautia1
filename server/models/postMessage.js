import mongoose from "mongoose";
// ici on utilise la deps mongoose pour créer un schéma correspondant au poste
//
//
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
//const or var
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;

//ce modele est utiliser pour recuperer les informations que l'utilisateur souhaite afficher dans le poste
//via la dependance mongoose
//on détermine ici le schéma de donné que qui sera utiliser dans la base de donnée
