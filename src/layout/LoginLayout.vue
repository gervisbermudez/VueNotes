<script>
import { mapActions } from "vuex";
import axios from "axios";

import Storage from "../helpers/storage";

import Checkbox from "../components/common/Checkbox.vue";
import Spinner from "../components/common/Spinner.vue";
import Alert from "../components/common/Alert.vue";

const storage = new Storage();

export default {
  name: "AuthLayout",
  components: {
    Checkbox,
    Spinner,
    Alert,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      BASE_URL: '',
      username: "",
      password: "",
      showSpinner: false,
      rememberMe: false,
      rememberMeData: {},
      alertData: {
        show: false,
        title: "",
        content: "",
        alertType: "info",
      },
    };
  },
  beforeCreate() {
    storage.removeItem("userdata");
  },
  mounted() {
    this.$nextTick(() => {
      this.BASE_URL = process.env.VUE_APP_API_URL
      storage.getItem("rememberMe")
        .then((data) => {
          this.rememberMe = true;
          this.username = data.email;
          this.rememberMeData = data;
        })
        .catch((error) => {});
    });
  },
  methods: {
    ...mapActions({
      setUserdata: "setUserdata",
    }),
    handleLogin() {
      if(!this.username && !this.password){
            this.showAlert({content: 'Ingrese sus credenciales'});
        return;
      }
      this.showSpinner = true;
      const params = new URLSearchParams();
      params.append("username", this.username);
      params.append("password", this.password);
      axios
        .post(this.BASE_URL + "/api/v1/login", params, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
        })
        .then(({ data }) => {
          let userdata = data.userdata[0];
          this.showSpinner = false;
          storage.setItem("userdata", userdata);
          storage.setItem("token", data.token);
          this.setUserdata(userdata);
          this.setRemerberMeData({data: userdata.user_data});

          this.$router.push("/");
        })
        .catch((error) => {
          console.error(error);
          this.showSpinner = false;
            this.showAlert({content: error.response.data.error_message, alertType: "danger"});
        });
    },
    showAlert({content, alertType = 'info'}){
          this.alertData.show = true;
          this.alertData.alertType = alertType;
          this.alertData.content = content || "Ocurrió un error inesperado";
    },
    handleClick({ target }) {
      this.rememberMe = target.checked;
      this.setRemerberMeData({});
    },
    setRemerberMeData({ data }) {
      if (this.rememberMe) {
        storage.setItem("rememberMe", {
          email: this.username,
          ...data,
        });
      } else {
        storage.removeItem("rememberMe");
      }
    },
  },
};
</script>

<template>
  <div class="login-container">
    <div class="form">
      <div class="form-head">
        <div class="logo">
          <img src="../assets/img/logo.svg" />
          <div class="brand-name">vuenotes</div>
        </div>
      </div>
      <div class="login-form">
        <h1>Sign in</h1>
        <div v-show="!showSpinner">
          <div class="input-form" v-if="!rememberMeData.email">
            <label for="email">Email</label>
            <input
              type="text"
              v-model="username"
              name="email"
              placeholder="email@domain.com"
            />
          </div>
          <div class="flex-center" v-else>
            <span>
              <div class="avatar"><img :src="this.BASE_URL + rememberMeData.avatar" /></div>
              <b>
                {{`${rememberMeData.nombre} ${rememberMeData.apellido}`}}
              </b>
            </span>
          </div>
          <div class="input-form">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              v-model="password"
              placeholder="Enter your password"
            />
          </div>
          <div class="form-footer">
            <Checkbox :label="'Remember me'" :checked="rememberMe" v-on:change="handleClick" />
            <a href="#!">Forget password?</a>
          </div>
        </div>
        <div class="flex-center">
          <Spinner v-show="showSpinner" />
        </div>
        <Alert
          v-if="alertData.show"
          :alertType="alertData.alertType"
          :content="alertData.content"
          :dismissible="true"
        />
        <div class="form-action">
          <div class="input-form">
            <button class="btn primary" @click="handleLogin()">Login</button>
          </div>
        </div>
      </div>
      <div class="copyright-zone">
        <span> {{ year }} Gervis Bermudez All Right Reserved. </span>
      </div>
    </div>
    <div class="cover">
      <div class="cover-img">
        <img src="../assets/img/login-cover-1.svg" />
      </div>
      <div class="cover-text">
        <span class="title">Keep your ideas</span>
        <p>Organize your thoughts</p>
      </div>
    </div>
  </div>
</template>

<style>
.login-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  height: 100vh;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
}

.cover {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: var(--uclablue);
  color: var(--white);
}

.cover::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 55%;
  height: 40%;
  background: url(../assets/img/line1.svg) -1px top no-repeat;
  background-size: contain;
  z-index: 1;
}

.cover::after {
  content: "";
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 55%;
  height: 40%;
  background: url(../assets/img/line2.svg) right bottom no-repeat;
  background-size: contain;
  z-index: 1;
}

.cover-img {
  z-index: 2;
  position: relative;
  width: 90%;
}

.cover-img img {
  max-width: 100%;
  margin: auto;
  display: block;
}

.cover-text {
  font-family: "Nunito", sans-serif;
  text-align: center;
  margin: 2rem;
  z-index: 2;
}

.title {
  font-size: 2.5rem;
}

.logo {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.brand-name {
  font-size: 1.6rem;
  font-family: "Nunito";
  font-weight: 600;
  color: var(--bluedark);
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.login-form input[type="text"],
.login-form input[type="password"] {
  width: 320px;
}

.btn {
  width: 280px;
}

.form-action {
  display: flex;
  justify-content: center;
}

.copyright-zone {
  font-size: 0.7rem;
}

.avatar {
    width: 70px;
    border-radius: 50%;
    overflow: hidden;
    margin: 1rem;
}

.avatar img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: auto;
}

@media screen and (max-width: 1200px) {
  .login-container {
    grid-template-columns: 1.2fr 1fr;
  }

  .cover-img {
    width: 80%;
  }
}

@media screen and (max-width: 900px) {
  .cover-img {
    width: 60%;
  }

  .login-form {
    padding: 0 2rem;
    width: 100%;
  }

  .login-form input[type="text"],
  .login-form input[type="password"] {
    width: calc(100% - 1.5rem);
  }

  .btn {
    width: 100%;
  }

  .form-action {
    width: 100%;
  }

  .form-action .input-form {
    width: auto;
    width: 100%;
  }

  .title {
    font-size: 2rem;
  }
}

@media screen and (max-width: 760px) {
  .login-container {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .form {
    padding: 1rem 2rem;
  }

  .cover {
    display: none;
  }

  .login-form {
    width: 70%;
  }
}

@media screen and (max-width: 500px) {
  .login-form {
    width: 90%;
  }

  .form-footer {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
</style>
