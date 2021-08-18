<template>
  <div id="center">
    <p id="hello">What are you going to do today?</p>
    <div>
      <input
        id="newinput"
        type="text"
        v-model="input"
        v-on:keyup.enter="newclick"
        autocomplete="off"
      />
      <button id="newbutton" @click="newclick()">Add</button>
    </div>

    <div>
      <ul>
        <li v-for="(item, index) in items" v-bind:key="item">
          <span class="check" @click="check(item, index)">
            <i class="far fa-check-square"></i>
          </span>
          {{ item }}
          <span class="remove" v-on:click="remove(item, index)">
            <i class="fas fa-trash"></i>
          </span>
        </li>
      </ul>
    </div>
    <div id="count">
      <i id="icon" class="fas fa-thumbtack"></i>You have {{ count }} task!
    </div>
    <div class="clearall">
      <button id="clear" @click="clearall()">
        Clear All <i class="fas fa-trash red"></i>
      </button>
    </div>
  </div>
</template>

<script>
var j = localStorage.length;
if (localStorage.length == 0) {
  j = 0;
} else j = localStorage.length - 1;

console.log(j);
export default {
  data: function () {
    return {
      input: "",
      items: [],
      count: j,
    };
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.items.push(localStorage.key(i));
        }
      }
    }
  },
  methods: {
    newclick: function () {
      console.log(this.input);
      localStorage.setItem(this.input, this.input);
      this.input = "";
    },
    remove: function (item, index) {
      localStorage.removeItem(item);
      this.items.splice(index, 1);
    },
    clearall() {
      localStorage.clear();
    },
  },
};
</script>

<style scoped>
#newbutton:hover {
  background-color: rgb(211, 200, 183);
}
#clear:hover {
  background-color: rgb(211, 200, 183);
}
#newinput {
  margin-top: 5px;
  margin-left: 50px;
  font-size: 25px;
  width: 420px;
  height: 40px;
  border-radius: 5px;
  border: 2px solid rgb(211, 200, 183);
}
#newbutton {
  margin-left: 10px;
  width: 60px;
  height: 30px;
  border-radius: 5px;
  background-color: rgb(250, 249, 247);
  border: 2px solid rgb(211, 200, 183);
}
#hello {
  font-size: 30px;
  margin: 20px;
  text-shadow: 2px 2px 2px gray;
}
#center {
  display: inline-block;
}
ul {
  list-style-type: none;
  text-align: left;
}
li {
  display: flex;
  text-align: left;
  width: 480px;
  font-size: 20px;
  background: white;
  border-radius: 5px;
  margin: 15px;
  padding: 15px;
}
#clear {
  font-size: 15px;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  background-color: rgb(250, 249, 247);
  border: 2px solid rgb(211, 200, 183);
  margin-bottom: 30px;
  margin-left: 15px;
  margin-top: 15px;
}
.remove {
  margin-left: auto;
  color: #6a8799;
}
.red {
  color: rgb(196, 61, 61);
}
.check {
  margin-right: 15px;
  color: #384860;
}
#icon {
  width: 50px;
  height: 10px;
  color: #384860;
}
#count {
  font-size: 20px;
  margin: 0px;
  margin-top: 10px;
  /* text-shadow: 2px 2px 2px gray; */
}
</style>