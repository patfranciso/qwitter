<template>
  <q-page>
    <div class="q-py-lg">
      <q-input
        bottom-slots
        v-model="newQweetContent"
        placeholder="What's happening?"
        counter
        maxlength="280"
        :dense="dense"
      >
        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      newQweetContent: "",
    };
  },
});
</script>
