---
date: "11/01/2021"
title: "Set Up an Existing Project (Bedrock)"
---

# How to setup an existing WordPress Project from a repo.

## Pre-requisites:
- Install Local by flywheel
- Install Sequel Pro or similar for the DB
- Install an IDE such as VSCode
- Install Git for your CMD or Terminal
- Instal Composer for your CMD or Terminal
- Access to the repository of the website you want to clone
- Install latest php version
- Python 2 (Windows Users)
- .NET Framework 2.0 Software Development Kit (Windows Users)

## Step 1 (Setting up local by flywheel): 

- Create a new site in local by flywheel
- For stage 1 of the setup type the project, type the name of the project you are setting up then check the advanced options to see if you are happy with the domain and path
- For the choose your environment stage select custom. For the php version use the latest one you have installed (something like 7.2.0). Web server should be set to nginx. SQL Version should be set to 5.5.
- For stage 3 type the Wordpress login you want to use temporarily for the admin (user: admin, pass: admin is fine). This will be replaced when we migrate the DB over from the live site so it doesn’t matter what it’s set to as long as its memorable
- Click add site once you are happy with your settings and it should be added to your local sites list with the project name you entered at the beginning

## Step 2 (Configure folders/files):

- Open in your IDE the Site folder which you just created. This can be found in Local Sites
- Delete the `app` folder, as the project repository will become this
- Find the file `site.conf` which will be found in `conf/nginx/site.conf` (the handlebars version will be called site.conf.hbs)
- Change `root /app/public/;` to `root /app/web/;` (If you have the handlebars version change `root   "{{root}}";` to `root   "/Users/your-user/Local Sites/sitename/app/web";`)
- Clone the project repo into the root of the site folder and make sure the folder name is app

## Step 3 (Composer Install):

- In terminal navigate the the new app folder which we cloned from the repo 
- Run the command `composer install` in terminal
- In the app folder you will have a file called `.env.example` Make a copy of this and rename the filer to be just `.env`
- In the copied file we made you will need to change the lines

```DB_NAME=database_name
DB_USER=database_user
DB_PASSWORD=database_password
```

To:

```
DB_NAME=local
DB_USER=root
DB_PASSWORD=root
```

- We now need to change the line `WP_HOME=http://example.com` to domain that you setup in flywheel eg `http://projectname.local`
- To generate your keys you need to navigate to: https://roots.io/salts.html
- Then paste the Env Format results of the page over the relevant lines
- In terminal we need to change directory to our theme name `app/web/app/themes/project-name`. Then run the `composer install` command again
- In the project folder we just navigated to, if there is a package.json file run the command `npm install` and `npm install node-sass` in your terminal as well

## Step 4 (Migrate DB):

- In Local by Flywheel, restart the site that we have created
- Click `Admin` and it should navigate to the Wordpress admin page, if you have an error trying doing a hard refresh
- If it asks to update click the button to do so then login with the credentials we made for Local by Flywheel during the site creation step
- Open the live site Wordpress admin and go to the plugins page, also go to the plugins page on your local site admin
- Activate the plugins that are currently on the live site for your local site
- If you are missing plugins or have extras just ignore them
- One of the plugins we have activated should be Migrate DB
- In both sites navigate to the Migrate DB page under Tools
- On your local site, you need to copy and paste your `Find` Fields into the live sites `Replace` side
- Then go to advanced options and enable`Compatible with older versions of MySQL (pre-5.5)`
- Hit `Export` at the bottom of the page and wait for it to download

## Step 5 (Replace our local DB with the live site):

- In Local by Flywheel go to our sites database tab and click Sequel Pro under connect
- Delete all of the tables that currently exist (Click force delete)
- Now in the top bar go to `File -> Import`
- Change the encoding to `Western (Mac OS Roman)`
- Find the DB file we just downloaded from the live site and select that as the import target (Make sure the encoding doesn’t change)
- Pray you get no errors :eyes:
- Once this has finished check to see if you have a prefix on your table names, if so you will need to edit your `.env` file like we did earlier
- Change the line of `# DB_PREFIX=wp_` to `DB_PREFIX=wp_` + `Your table prefix` (Ensure you remove the # at the start of the line to make sure its uncommented)
- Restart the site in Local by Flywheel, and go to wp-admin. Update the db if it asks and login using the live site

You should now have a working site!

Extra steps for niche builds

Some sites might have a bower configuration to run such as Atlas/Promethean App. You will need to install bower globally and in the theme folder in terminal run the command `bower install`.

You may also need to run gulp tasks while working on the site like the case of such as Atlas/Promethean App. To do so run the command `gulp` from the theme folder.
