<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
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
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          unelevated
          :disabled="!newQweetContent"
          rounded
          no-caps
          color="primary"
          label="Qweet"
          class="q-mb-md"
        />
      </div>
    </div>
    <q-list separator>
      <q-item class="q-py-md" v-for="qweet in qweets" :key="date">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1"
            ><strong>John Doe</strong><span class="text-grey-7">@johndoe</span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1"
            >{{ qweet.content }}
          </q-item-label>
          <div class="qweet-icons row justify-between q-mt-sm">
            <q-btn color="grey" icon="far fa-comment" flat size="sm" />
            <q-btn color="grey" icon="fas fa-retweet" flat size="sm" />
            <q-btn color="grey" icon="far fa-heart" flat size="sm" />
            <q-btn color="grey" icon="fas fa-trash" flat size="sm" />
          </div>
        </q-item-section>

        <q-item-section side top> {{ qweet.date }} </q-item-section>
      </q-item>

      <q-separator inset="item" />
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
      qweets: [
        {
          content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
          date: 1668812310710,
        },
        {
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis repellat quos. Libero magnam recusandae, adipisci rerum laborum ipsam aliquid, incidunt numquam distinctio non, cumque omnis earum! Expedita, error optio.",
          date: 1668812310810,
        },
        {
          content:
            "Molestias officiis repellat quos. Libero magnam recusandae, adipisci rerum laborum ipsam aliquid, incidunt numquam distinctio non, cumque omnis earum! Expedita, error optio.",
          date: 1668812310910,
        },
        {
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis repellat quos. Libero magnam recusandae, adipisci rerum laborum ipsam aliquid, incidunt numquam distinctio non, cumque omnis earum! Expedita, error optio.",
          date: 1668812311110,
        },
      ],
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
.qweet-icons
  margin-left: -15px
</style>
