class GitHub {
    constructor() {
      this.apiUrl = "https://api.github.com/users/";
      this.form = document.getElementById("form");
      this.searchInput = document.getElementById("search");
      this.main = document.getElementById("main");
  
      this.form.addEventListener("submit", this.handleSubmit.bind(this));
  
      // We can intialize the card with profile details
      const myUsername = "Pandey1005";
      this.getUserDetails(myUsername);
    }
  
    async getUserDetails(username) {
      try {
        const response = await fetch(this.apiUrl + username);
        const data = await response.json();
        this.createUserCard(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }
  
    createUserCard(user) {
      const cardHTML = `
        <div class="card">
          <img class="avatar" src="${user.avatar_url}" alt="Profile Avatar" />
          <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
              <li>${user.followers} Followers</li>
              <li>${user.following} Following</li>
              <li>${user.public_repos} Repos</li>
            </ul>
            <p>Twitter: ${user.twitter_username ? "@" + user.twitter_username : "humourslyours"}</p>
            <p>Location: ${user.location ? user.location : "Himachal Pradesh"}</p>
          </div>
        </div>
      `;
      this.main.innerHTML = cardHTML;
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const username = this.searchInput.value.trim();
      if (username) {
        this.getUserDetails(username);
        this.searchInput.value = "";
      }
    }
  }
  
  const github = new GitHub();