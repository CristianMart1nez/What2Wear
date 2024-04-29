# PROYECT What2Wear


![What2Wear](https://github.com/CristianMart1nez/What2Wear/assets/162847236/0db64b37-e7f2-4a05-a9da-c3446afa392d)

## Summary:
Project Name: What2Wear

- Vision: Simplify the daily clothing choice by providing an intuitive and efficient platform for organizing outfits, saving time, and fostering personal style expression.

- Purpose: The purpose of our application is to free people from the burden of having to think about what to wear every day. We want to simplify this process by providing a platform where users can plan, organize and discover fashionable outfits quickly and easily. We believe that by eliminating the stress associated with choosing what to wear, we can allow our users to focus on what really matters in their lives.

- Commitment: We are committed to providing our users with an exceptional experience in every interaction with our application. This means that we strive to maintain high quality standards in terms of design, functionality and customer service. We are committed to continuous improvement, actively listening to our users' feedback and adapting our application to meet their evolving needs. 

## About "What2Wear":
What2Wear is your ultimate companion for effortless outfit organization. We understand the daily struggle of deciding what to wear, which is why we've crafted a solution to streamline this process. With What2Wear, you can say goodbye to the endless hours spent rummaging through your wardrobe.

Our platform offers a user-friendly interface designed to make outfit planning both simple and enjoyable. Whether you're preparing for work, a special event, or a casual day out, What2Wear has you covered.

Explore our curated collection of clothing items, mix and match effortlessly, and save your favorite combinations for future reference. What2Wear ensures that you always look and feel your best, no matter the occasion.

Join the What2Wear community today and discover a new way to express your style with ease.


## Our Services:

- At What2Wear, we offer a range of services tailored to simplify your outfit organization process and enhance your style experience:

- Outfit Planning: Seamlessly plan your outfits for any occasion with our intuitive interface. Mix and match clothing items effortlessly to create the perfect look.

- Wardrobe Organization: Keep your wardrobe organized and clutter-free by digitally cataloging your clothing items. Easily categorize, search, and manage your wardrobe collection.

User Profiles:
- Admin: Full management and supervision.
- User: Users can create unique outfits using clothing items, preview them in 'My Outfits', and save them to appear on their profiles.
## Mobile design.
## Web design

## Tables:
![Tables](https://github.com/CristianMart1nez/What2Wear/assets/162847236/29936002-de5a-4a6d-bb41-9a240afcb5bd)


## Relationships between tables:
- A user can have multiple items of clothing in his or her closet
- Each item of clothing is associated with many users 
- Each set of clothing is associated with a specific user who created it, except for predefined sets.
- Each clothing set is associated with a specific user who created it.
- associate multiple items of clothing to a set of clothes
  
## Endpoints:
All Endpoints are located under the path /api/.
### User Signup/Login

| METHOD | ENDPOINT          | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                               | RETURNS               |
|--------|-------------------|-------|------|--------------------------|-------------------------------------------|------------------------|
| POST   | /register | -     | client | New client Signup           | first_name, email, password | { token: token }       |
| POST   | /login  | -       | - | User Login            | email, password                           | { token: token }       |


### Cloting Endpoints

| METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS               |
|--------|------------------|-------|------|--------------------------|-------------------------------------------------|------------------------|
| GET    | /cloting         | NO    | -    | Get all cloting          | Query params                                    | [{cloting}]            |
| GET    | /cloting/:id     | NO    | -    | Get one cloting          | -                                               | {cloting}              |
| POST   | /cloting/:id     | YES   | admin| Create one cloting       | -                                               | {user}                 |
| PUT    | /cloting         | NO    | -    | Get all cloting          | Query params                                    | [{cloting}]            |
| DELETE | /cloting/:id     | YES   | admin| Delete cloting           | Query params                                    | [{cloting}]            |

### Outfit Endpoints

| METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS               |
|--------|------------------|-------|------|--------------------------|-------------------------------------------------|------------------------|
| GET    | /outfit         | YES    | user - admin| Get all outfits          | Query params                                    | [{outfit}]      |
| GET    | /outfit/:id     | YES    | user - admin| Get one outfits          | -                                               | {outfit}        |
| POST   | /outfit/:id     | YES    | user - admin| Create one outfits       | -                                               | {outfit}        |
| PUT    | /outfit         | YES    | user - admin| Get all outfits          | Query params                                    | [{outfit}]      |
| DELETE | /outfit/:id     | YES    | user - admin| Delete outfits           | Query params                                    | [{outfit}]      |

### User Endpoints

| METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS               |
|--------|------------------|-------|------|--------------------------|-------------------------------------------------|------------------------|
| GET    | /user            | YES   | admin| Get all users            | Query params                                    | [{user}]               |
| GET    | /user/:id        | YES   | admin| Get one user             | -                                               | {user}                 |
| GET    | /user/profile    | YES   | -    | Get own profile          | -                                               | {user}                 |
| POST   | /user            | YES   | admin| Create one user          | first_name, email, password, role               | {user}                 |
| PUT    | /user/:id        | YES   | admin| Update one user          | first_name, email, password, role               | {message: "User updated!"} |
| PUT    | /user/profile    | YES   | -    | Update user profile (client and developer only update own profile)         | first_name, email, password, role | {message: "Profile updated!"} |
| PUT    | /user/profile/password| YES   | -    | Reset user password (client and developer only reset own password)         | newPassword | {message: "Password updated!"} |
| DELETE | /user/:id        | YES   | admin | Delete one user          | -                                               | {message: "User deleted!"} |
| DELETE | /user/profile    | YES   | -    | Delete user profile (client and developer only delete own profile)         | -     | {message: "Profile deleted!"} |
