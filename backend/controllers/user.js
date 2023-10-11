const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// Fonction pour connecter un utilisateur existant
exports.login = (req, res, next) => {
    // Rechercher l'utilisateur dans la base de données par son email
    User.findOne({ email: req.body.email })
        .then((user) => {
            // Vérifier si l'utilisateur existe
            if (user === null) {
                res.status(401).json({
                    message: "Перевірте ваш логін/пароль",
                });
            } else {
                // Comparer le mot de passe fourni avec le mot de passe stocké
                bcrypt
                    .compare(req.body.password, user.password)
                    .then((valid) => {
                        // Vérifier si le mot de passe est valide
                        if (!valid) {
                            res.status(401).json({
                                message:
                                    "Перевірте ваш логін/пароль",
                            });
                        } else {
                            // Créer un token JWT contenant l'identifiant de l'utilisateur
                            const token = jwt.sign(
                                { userId: user._id },
                                process.env.JWT_SECRET, // Utiliser la clé secrète définie dans les variables d'environnement
                                { expiresIn: "24h" }
                            );

                            res.status(200).json({
                                userId: user._id,
                                token: token,
                            });
                        }
                    })
                    .catch((error) => res.status(500).json({ error }));
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
