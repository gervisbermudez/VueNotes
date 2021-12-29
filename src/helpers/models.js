export class User {
    user_id = null;
    username = "";
    email = "";
    lastseen = "";
    level = "";
    role = "";
    status = "";
    baseurl = "";
    usergroup_id;
    user_data = {
      nombre: "",
      apellido: "",
      direccion: "",
      telefono: "",
      "create by": "",
    };
  
    constructor(params) {
      for (const param in params) {
        if (params.hasOwnProperty(param)) {
          this[param] = params[param] || "";
        }
      }
    }
  
    get_fullname = () => {
      if (this.user_data.nombre && this.user_data.apellido) {
        return this.user_data.nombre + " " + this.user_data.apellido;
      } else {
        return "";
      }
    };
  
    get_profileurl = () => {
      return this.baseurl + "admin/usuarios/ver/" + this.user_id;
    };
  
    get_avatarurl = () => {
      if (this.user_data.avatar) {
        return this.baseurl + this.user_data.avatar;
      } else {
        return this.baseurl + "public/img/profile/default.png";
      }
    };
  
    get_edit_url = () => {
      return this.baseurl + "admin/usuarios/edit/" + this.user_id;
    };
  }