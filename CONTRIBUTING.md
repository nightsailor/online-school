# Contributing Guidelines

This documentation contains a set of guidelines to help you during the contribution process.
We are happy to welcome all the contributions from anyone willing to improve/add new features to this project.
Thank you for helping out and remember, **no contribution is too small.**

### Need some help regarding the basics?🤔

You can refer to the following articles on basics of Git and Github and also contact the Project Mentors,
in case you are stuck:

- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://www.freecodecamp.org/news/git-and-github-for-beginners)
- [Learn GitHub from Scratch](https://lab.github.com/githubtraining/introduction-to-github)


## Submitting Contributions👩‍💻👨‍💻

This project requires the following tools:
 * Javascript - The programming language used by Node Js.
 * NPM or yarn - Tools used for managing libraries.

To get started, install Node from [here](https://nodejs.org/en/) on your local computer if you don't have already.

Below you will find the process and workflow used to review and merge your changes.

**Step 0 : Find an issue**

- Take a look at the Existing Issues or create your **own** Issues!
- Wait for the Issue to be assigned to you after which you can start working on it.
- Note : Every change in this project should/must have an associated issue.

![issues](https://raw.githubusercontent.com/nightsailor/online-school/main/demo/issues.png)

**Step 1. Fork the repository from [here](https://github.com/nightsailor/online-school/fork).**

![fork](https://raw.githubusercontent.com/nightsailor/online-school/main/demo/fork.png)

**Step 2. Clone the forked repository into a fresh folder**

```
$ git clone https://github.com/<your-username>/online-school.git
$ cd online-school
```
> Note : Replace `<your-username>` with your own username in the above command.

- Keep a reference to the original project in `upstream` remote. 
    ```bash
    git remote add upstream https://github.com/nightsailor/online-school
    ```

- If you have already forked the project, update your copy before working.
    ```bash
    git remote update
    git checkout main
    git rebase upstream/main
    ```  

**Step 3. Install the project dependencies**

We need to install the project dependencies, which are listed in `package.json`

- Using npm :
    ```bash
    $ cd server && npm install
    $ cd ../client && npm install
    ```

- Using yarn : 
    ```bash
    $ cd server && yarn install
    $ cd ../client && yarn install
    ```


Now we're ready to start our server which is as simple as:

```
  $ cd server && npm start
  $ cd ../client && yarn start
```

Open http://127.0.0.1:5000 to view it in your browser.

The app will automatically reload if you make changes to the code.
You will see the build errors and warnings in the console.


**Step 6 : Work on the issue assigned**

- Work on the issue(s) assigned to you.
- Add all the files/folders needed.
- After you've made changes or made your contribution to the project add changes to the branch you've just created by:

    ```bash  
    # To add all new files to your branch
    git add .  

    # To add only a few files to Branch_Name
    git add <some files>
    ```

**Step 7 : Commit**

- To commit give a descriptive message for the convenience of reviewer by:

    ```bash
    # This message get associated with all files you have changed  
    git commit -m "message"  
    ```

- **NOTE**: A PR should have only one commit. Multiple commits should be squashed.

**Step 8 : Work Remotely**

- Now you are ready to your work to the remote repository.
- When your work is ready and complies with the project conventions, upload your changes to your fork:

    ```bash  
    # To push your work to your remote repository
    git push -u origin <branch-name>
    ```

**Step 9 : Pull Request**

- Go to your repository in browser and click on compare and pull requests. Then add a title and description to your pull request that explains your contribution.
- Voila! Your Pull Request has been submitted and will be reviewed by the moderators and merged.🥳


<br>
<h5 align="center">
< Happy Contributing />
<br>
<a href="https://github.com/nightsailor">Muhammad Talha</a> | © 2022
</h5>
