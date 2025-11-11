Feature:authentification
    Scenario: login with valid credentials
        Given je suis sur la page de connexion "https://www.saucedemo.com/"
        When  user saisit son identifiant "standard_user"
        And user saisit son mot de passe "secret_sauce"
        And user clique sur le bouton de login
        Then user est redirige vers la page "https://www.saucedemo.com/inventory.html"
       