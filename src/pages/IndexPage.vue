<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input bottom-slots v-model="newQweetContent" placeholder="What's happening?" counter maxlength="280"
          :dense="dense" autogrow class="new-qweet">
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn unelevated :disabled="!newQweetContent" rounded no-caps color="primary" label="Qweet" class="q-mb-md" />
      </div>
    </div>
    <q-list>
      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1"><strong>John Doe</strong><span class="text-grey-7">@johndoe</span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            praesentium incidunt, adipisci quisquam molestias excepturi
            officiis, natus esse facilis at expedita et ipsam alias deleniti
            illo? Provident veritatis illum iure. Adipisci quisquam molestias
            excepturi officiis, natus esse facilis at expedita et ipsam alias
            deleniti illo? Provident veritatis illum iure.
          </q-item-label>
        </q-item-section>

        <q-item-section side top> 1 min ago </q-item-section>
      </q-item>

      <q-separator inset="item" />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Linear Project</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section side top> 1 min ago </q-item-section>
      </q-item>
    </q-list>
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
.qweet-content
  white-space: pre-line
</style>
