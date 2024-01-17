export class UI {
   constructor() {
      this.profile = document.getElementById('profile');
   }

   showProfile(user) {
      this.profile.innerHTML = `
         <div class="profile-container">
            <div class="profile-avatar">
               <img src="${user.avatar_url}" class="profile-avatar-img">
               <button class="profile-avatar-btn">
                  <a href="${user.html_url}" target="_blank">View Profile</a>
               </button>
               
            </div>
            <div class="profile-info">
               <span class="profile-info-repos">Public Repos: ${user.public_repos}</span>
               <span class="profile-info-repos" style="background: var(--color-secondary);">Public Gists: ${user.public_gists}</span>
               <span class="profile-info-repos" style="background: var(--color-accent);">Followers: ${user.followers}</span>
               <span class="profile-info-repos" style="background: var(--color-F);">Following: ${user.following}</span>
            </div>
            <div class="profile-list">
               <border class="border"></border>
               <ul class="list-group">
                  <li class="list-group-item">  Company: ${user.company}</li>
                  <li class="list-group-item">  Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">  Location: ${user.location}</li>
                  <li class="list-group-item">  Member Since: ${user.created_at}</li>
               </ul>
            </div>
         </div>
         <div class="latest-repo">Latest Repos</div>
         <div id="repos"></div>
      `;
   }

   showRepos(repos) {
      let output = '';

      repos.forEach(function(repo) {
         output += `
         <div class="repos-box">
            <a href="${repo.html_url}" target="_blank" class="repos-name">${repo.name}</a>
            <div class="repos-info">
               <span class="repos-info-item">Stars: ${repo.stargazers_count}</span>
               <span class="repos-info-item bg-secondary">Watchers: ${repo.watchers_count}</span>
               <span class="repos-info-item bg-accent">Forks: ${repo.forks_count}</span>
            </div>
         </div>
         `;
      });

      document.getElementById('repos').innerHTML = output;
   }

   showAlert(message, className) {
      this.clearAlert();

      const div = document.createElement('div');
      div.className = className;
      div.appendChild(document.createTextNode(message));

      const container = document.querySelector('.searchContainer');
      const search = document.querySelector('.search');
      container.insertBefore(div, search);

      setTimeout(() => {
         this.clearAlert();
      }, 3000);
   }

   clearAlert() {
      const currentAlert = document.querySelector('.alert');
      if(currentAlert) {
         currentAlert.remove();
      }
   }
   clearProfile() {
      this.profile.innerHTML = '';
   }
}

