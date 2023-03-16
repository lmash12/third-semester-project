<template>
  <div class="header-box">
    <header>
      <nav>
        <RouterLink class="link" to="/">
          <fa icon="fa-solid fa-house"></fa>
        </RouterLink>
        <RouterLink class="link" to="/counter">Project</RouterLink>
        <a
          class="link"
          href="https://github.com/lmash12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fa icon="fa-brands fa-github"></fa>
        </a>
      </nav>
    </header>
  </div>
  <main>
    <div class="img-wrapper">
      <img
        alt="profile picture"
        class="profile-pic"
        src="@/assets/black-tee.jpg"
        width="255"
        height="255"
      />
      <div class="typit">
        <h3 class="typingEffect">
          Hello! <br />
          My name is Lesley Mashaya
        </h3>
      </div>
      <div>
        <p class="Intro">
          I am a FrontEnd Developer currenlty in my final semester with
          AltSchool Africa. Welcome to my third semester Project. Feel free to
          reach out for any input you might have.
        </p>
      </div>
    </div>
    <div class="about-project">
      <!-- about me-->
      <div class="about-wrapper">
        <about-me />
      </div>

      <!--project section-->
      <div class="project-wrapper">
        <projectCorner />
      </div>
    </div>
  </main>
  <div class="mobileVersion">
    <p class="mobileApology">
      Our mobile version is optimized for quick and easy access to the
      application. While we understand that some users may desire additional
      features like animations, please note that not all animation features are
      included in the mobile version due to device limitations. We invite you to
      explore the desktop version to experience all the exciting features.
      Nonetheless, the mobile version provides a reliable and seamless
      experience, and we continually work to improve the user experience on all
      platforms. Thank you for your understanding and support.
    </p>
  </div>
  <footer>
    <footer-section />
  </footer>
</template>

<script>
import aboutMe from "@/components/aboutMe";
import footerSection from "@/components/footerSection";
import projectCorner from "@/components/projectCorner";

export default {
  components: {
    aboutMe,
    footerSection,
    projectCorner,
  },
};
</script>

<style>
.header-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.typingEffect {
  padding-left: 20px;
  color: #32355c;
  font-family: "Trebuchet MS", sans-serif;
}

.icon {
  color: #32355c;
  font-size: 20px;
  margin-right: 10px;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  background: #32355c;
  margin: 0 auto;
}

.mobileVersion {
  display: none;
}

.Intro {
  padding-left: 20px;
  color: #32355c;
  width: 90%;
  margin-top: 0;
}
.img-wrapper {
  display: grid;
}

.profile-pic {
  margin: 30px auto;
  width: 250px;
  height: 250px;
  clip-path: polygon(50% 0%, 91% 25%, 91% 75%, 50% 100%, 9% 75%, 9% 25%);
}

.profile-pic:hover {
  margin: 30px auto;
  width: 250px;
  height: 250px;
  clip-path: polygon(
    50% 0%,
    82% 11%,
    100% 50%,
    82% 89%,
    50% 100%,
    18% 89%,
    0% 50%,
    18% 11%
  );
  animation: shake 4s ease-in backwards;
}
@keyframes shake {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(10deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  width: 100%;
  margin: 20px;
}

.link {
  color: white;
  font-size: 24px;
  transition: ease-in-out 2s;
}
.link:hover {
  animation: shake 5s ease-in backwards;
  box-shadow: rgba(0, 0, 3, 0.24) 5px 7px 14px;
  border-radius: 2px;
  color: whitesmoke;
}

main {
  width: 90%;
  margin: 0 auto;
  display: flex;
}

.about-wrapper,
.project-wrapper {
  height: 250px;
  padding-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  margin: 30px 10px;
  padding: 10px;
  width: 100%;
  color: whitesmoke;
}

.about-wrapper:hover,
.project-wrapper:hover {
  height: 250px;
  padding-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  margin: 30px 10px;
  padding: 10px;
  width: 100%;
  color: whitesmoke;
  background-color: rgba(50, 53, 92, 0.4);
  animation: shake 3s ease-in-out forwards;
}

.about-project {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/* Media queries for mobile screens */
@media only screen and (max-width: 428px) {
  /* CSS styles for iPhone 13 Pro */
  nav {
    display: flex;
    width: 100%;
  }
  .profile-pic {
    display: none;
  }
  .mobileVersion {
    display: block;
    height: 150px;
    overflow-wrap: break-word;
    overflow: scroll;
    width: 80%;
    margin: 0 auto;
    color: #32355c;
  }

  .Intro {
    display: none;
  }
  .img-wrapper h3 {
    display: none;
  }
  .project-wrapper {
    display: none;
  }
  .about-wrapper {
    width: 280px;
    height: 275px;
    margin: 80px auto;
  }
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
