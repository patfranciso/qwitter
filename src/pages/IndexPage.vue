<template>
  <q-page>
    <div class="q-py-lg q-px-md">
      <q-input
        bottom-slots
        v-model="newQweetContent"
        placeholder="What's happening?"
        counter
        maxlength="280"
        :dense="dense"
        autogrow
        class="new-qweet"
      >
        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </template>

        <template v-slot:after>
          <q-btn
            unelevated
            :disabled="!newQweetContent"
            rounded
            no-caps
            color="primary"
            label="Qweet"
          />
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

<style lang="sass">
.new-qweet
  textarea
    font-size: 16px
    line-height: 1.6
</style>
