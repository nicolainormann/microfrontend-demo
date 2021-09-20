import "./vue.js";

Vue.component("product-details", {
  props: ["brand", "model", "price", "img"],
  template: `
            <div>
              <h1>{{ brand }} {{ model }}</h1> 
              <img v-bind:src="img" style="max-width: 100%"/>
              <div>{{ price }} DKK</div> 
            </div>
        `,
});

new Vue({ el: "#root" });
