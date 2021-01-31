# CineCup

CineCup is an online platform to entertain people and to get their honest opinion about films. We conduct several contests to identify the deserving movies for awards . Do checkout our platform live at [https://cinecup-9b0ac.web.app/](https://cinecup-9b0ac.web.app/).

The website is fully responsive and support dark theme too.

![Home page](https://github.com/Shikhar15606/CineCup/blob/main/screenshots/Screenshot%20(41).png?raw=true)

## Main features

- Authentication using Facebook , Google or signup using email.
- Reset password and email verification using mails.
- Search among millions of movies by default search page will be showing the trending movies.
- Share movie details through social media platforms like Whatsapp,Facebook and Twitter.
- Movies can be nominated and removed from Nominations whenever a contest is live.
- Not just one, site can be used to hold multiple contest and store their rankings.
- Watch trailers and teasers of millions of movies.
- Rate and review movie.
- Leaderboard has search bar which can be used to quickly search for a movie.
- Dark mode toggling.
- Anouncements on home page,new announcements can be added by admin using his dashboard
- Email notifications will be sent to registered emails of users whenever a contest is started or ended or  user's nominated movie is blacklisted 
- Blacklisting a movie, make other users admin just by one click (Only be done by admin on his dashboard).

## Tech Stack

- We have used **React** and **Redux** in the frontend.
- **Firebase** for most of the Backend and User Authentication.
- **Cloud Firestore** as our database.
- **Firebase Cloud Storage** for storing user profile pictures.
- Custom Rest API built using **Node** and **Express** [Github Repository](https://github.com/Shikhar15606/cinecup-backend).
- **JSON Web Token** for authentication with the Custom API.
- **TMDB** API for fetching the information about Films.

---

## Main features
- 



## Signup

- You can signup by providing your name, email id and password . You can also choose your own avtar, if you do not choose your avtar then we will provide you our common avtar.
- You have to verify your email after signup by clicking on the link sent at your email, otherwise you won't be able to login.

## Login

- You can login with your email id and password , or with your google or facebook accounts.
- Authentication is implemented using firebase and thus it is highly secure.

## Forget Password

- If you forget your password then you can change your password by providing your email id and we will mail you a link. You can enter your new password by clicking on the link.

## Search

- Search page lets you search among millions of movies.
- **Nominate** them if there is any live contest or share the movie details with your friends using the social media icons ,the sharing feature is added using [react-share](http://https://www.npmjs.com/package/react-share 'react-share') package .

![Search page](https://github.com/Shikhar15606/CineCup/blob/main/screenshots/Screenshot%20(30).png?raw=true)

## Dashboard

- This is user's dashboard where he can find the nominated movies for any contest and also remove them from nominations.
- There is a review section where all the reviews and rating of movies reviewed by user are listed , user can remove or edit those reviews using a popup.

## Admin Dashboard

- This section is only accessible by users having admin access.
- An admin can make an **Announcement** , **Blacklist** a movie , give **admin access** to other users or **start a new contest or stop it**.

![Admin Dashboard](https://github.com/Shikhar15606/CineCup/blob/main/screenshots/Screenshot%20(28).png?raw=true)
![Admin Dashboard](https://github.com/Shikhar15606/CineCup/blob/main/screenshots/Screenshot%20(29).png?raw=true)

## Leaderboard

- Leaderboard has all the movies nominated for a contest ranked according to votes .
- Movies having same number of votes gets the same ranks.

## Contest

- This section has all the contests that were held previously.
- Each contest has a detail page where you can get the final standings along with some party popper and special card carousal for top three rank holders.

![Contest Detail](https://github.com/Shikhar15606/CineCup/blob/main/screenshots/Screenshot%20(51).png?raw=true)

## Movie Detail

- Here you can get the movie details including description,movie runtime and the cast along with a video carousal with trailers and teasers.
- A review section to view all the reviews of particular movie and a review card to add review and rating for the movie.
- On clicking on a user it takes to a profile page where you can see all the reviews done by a particular user.

![Movie Detail](https://github.com/Shikhar15606/CineCup/blob/main/screenshots/Screenshot%20(43).png?raw=true)


![Movie Detail](https://github.com/Shikhar15606/CineCup/blob/main/screenshots/Screenshot%20(44).png?raw=true)
