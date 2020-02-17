<template>
  <div class="grid">
    <header>
      <Status></Status>
    </header>
    <!-- <aside class="sidebar-left">
    Left Sidebar
    </aside>-->
    <article>
      <Location></Location>
    </article>
    <aside class="sidebar-right">
      <Inventory></Inventory>
    </aside>
    <footer>
      <BottomMenu></BottomMenu>
    </footer>
  </div>
</template>

<script>
import Status from "./stats/Stats.vue";
import Location from "./location/Location.vue";
import Inventory from "./inventory/Inventory.vue";
import BottomMenu from "./bottomMenu/BottomMenu.vue";
import { mapGetters, mapMutations } from "vuex";
import generateLocations from "../models/locationGenerator";

export default {
  name: "Flood",
  components: {
    Status,
    Location,
    Inventory,
    BottomMenu
  },
  created() {
    this.setLocations(generateLocations());
  },
  computed: {
    ...mapGetters("game", {
      damage: "getHealthLost"
    })
  },
  methods: {
    ...mapMutations("game", ["attacked", "setLocations"]),
    attack(damage) {
      this.attacked(damage);
    }
  },
  data: function() {
    return {
      title: "The Flood"
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid {
  height: 750px;
  width: 750px;
  display: grid;
  grid-template-columns: 600px 150px;
  grid-template-rows: auto 600px auto;
  grid-gap: 0;
}

header,
footer {
  grid-column: 1 / 3;
}

.aside {
  height: 600px;
}

@media all and (max-width: 700px) {
  aside,
  article {
    grid-column: 1 / 3;
  }
}

header,
aside,
article,
footer {
  border: 1px solid black;
}
</style>
