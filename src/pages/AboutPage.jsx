import { Box, Typography } from "@mui/material";

const AboutPage = () => {
    return (
        <Box>
            <h1>About Page</h1>
            <h3>Here you can find all the information about the website</h3>
            <hr />
            <Typography width={"100%"} border={5} color={"#ccc"} component={"img"} src="/images/NotLoggedInNavBar.png" />
            <Typography width={"100%"} border={5} color={"#ccc"} component={"img"} src="/images/LightNotLoggedInNavBar.png" />
            <h4>This is the navigation bar when you are not logged in.
                <br />Clicking on the "About" button will get you to this page.
                <br />The "About" button will get you to this page.
                <br />Clicking on the moon icon will change the website to dark mode and changes to a sun icon, and clicking the sun icon will change the website to light mode.
                <br />The "Register" button will take you to the register page.
                <br />The "Login" button will take you to the login page.
                <br />You can search any card using the search field.
            </h4>
            <hr />
            <Typography width={"100%"} border={5} color={"#ccc"} component={"img"} src="/images/NavBar.png" />
            <Typography width={"100%"} border={5} color={"#ccc"} component={"img"} src="/images/LightNavBar.png" />
            <h4>This is the navigation bar when you are logged in.
                <br />The "About" button will get you to this page.
                <br />The "Sandbox" button will show up only if you are an admin and will take you to the sandbox page.
                <br />The "My Cards" button will show up only if you are a business account and will take you to your cards page.
                <br />The "Fav Cards" button will show up only if you are logged in and will take you to your favorite cards page.
                <br />The "Logout" button will show up only if you are logged in and will sign you out of the website.
                <br />Clicking on the moon icon will change the website to dark mode and changes to a sun icon, and clicking the sun icon will change the website to light mode.
                <br />Clicking the profile picture icoin will take you to your profile page and there you can edit your information.
                <br />You can search any card using the search field.
            </h4>
            <hr />
            <Typography width={"100%"} border={5} color={"#ccc"} component={"img"} src="/images/HomePage.png" />
            <h4>This is the home page where you can see all the business cards.
                <br />If you click on the card you will be moved to the business page where you can see all the information on the business.
                <br />If you press on the call button you will be moved to a calling page using the business number.
                <br />A like button will show up if you are logged in.
                <br />An edit button will show up if the card you are viewing is your card.
                <br />A delete button will show up if the card you are viewing is your card, or you are an admin which in this case can delete any card.
            </h4>
            <hr />
            <Typography width={"100%"} border={5} color={"#ccc"} component={"img"} src="/images/MyCards.png" />
            <h4>This is the my cards page where you can see all the business cards that you created.
                <br />Clicking the green "+" button in the bottom right corner will take you to create a new card page.
            </h4>
            <hr />
            <Typography width={"100%"} border={5} color={"#ccc"} component={"img"} src="/images/CreateCard.png" />
            <h4>This is the create a new card page where you can add a new card of your business.</h4>
            <hr />
            <Typography width={"100%"} border={5} color={"#ccc"} component={"img"} src="/images/FavCards.png" />
            <h4>This is the my cards page where you can see all the business cards that you liked.</h4>
            <hr />
            <Typography width={"100%"} border={5} color={"#ccc"} component={"img"} src="/images/Register.png" />
            <h4>This is the register page where you can create a new account.</h4>
            <hr />
            <Typography width={"100%"} border={5} color={"#ccc"} component={"img"} src="/images/Login.png" />
            <h4>This is the login page where you can log in to the website.</h4>
            <hr />
        </Box>
    );
};

export default AboutPage;