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
          dense
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
          @click="addNewQweet"
        />
      </div>
    </div>
    <q-list separator>
      <transition-group
        appear
        enter-active-class="animated fadeIn slower"
        leave-active-class="animated fadeOut slower"
      >
        <q-item class="q-py-md" v-for="qweet in qweets" :key="qweet.date">
          <q-item-section avatar top>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-subtitle1"
              ><strong>John Doe</strong
              ><span class="text-grey-7">
                &nbsp;@johndoe <br class="lt-md" />&bull;
                {{ relativeDate(qweet.date) }}</span
              >
            </q-item-label>
            <q-item-label class="qweet-content text-body1"
              >{{ qweet.content }}
            </q-item-label>
            <div class="qweet-icons row justify-between q-mt-sm">
              <q-btn color="grey" icon="far fa-comment" flat size="sm" />
              <q-btn color="grey" icon="fas fa-retweet" flat size="sm" />
              <q-btn color="grey" icon="far fa-heart" flat size="sm" />
              <q-btn
                color="grey"
                icon="fas fa-trash"
                flat
                size="sm"
                @click="deleteQweet(qweet)"
              />
            </div>
          </q-item-section>
        </q-item>

        <q-separator inset="item" />
      </transition-group>
    </q-list>
  </q-page>
</template>

<script setup>
import { formatDistance } from "date-fns";
import { ref } from "vue";
const name = "IndexPage";
const newQweetContent = ref("");
const qweets = ref([
  {
    content: `"When you are content to be simply yourself and don't compare or compete, everybody will respect you."
- Laozi`,
    date: 1668812310710,
  },
  {
    content: `"You have enemies? Good. That means you've stood up for something, sometime in your life."
- Winston Churchill`,
    date: 1668812310810,
  },
  {
    content: `"Let the future tell the truth, and evaluate each one according to his work and accomplishments. The present is theirs; the future, for which I have really worked, is mine."
- Nikola Tesla`,
    date: 1668812310910,
  },
  {
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis repellat quos. Libero magnam recusandae, adipisci rerum laborum ipsam aliquid, incidunt numquam distinctio non, cumque omnis earum! Expedita, error optio.",
    date: 1668812311110,
  },
]);
function relativeDate(value) {
  return formatDistance(value, new Date());
}
function addNewQweet(e) {
  let newQweet = {
    content: newQweetContent.value,
    date: Date.now(),
  };
  qweets.value.unshift(newQweet);
  newQweetContent.value = "";
}
function deleteQweet(qweet) {
  console.log("Delete qweet");
  let dateToDelete = qweet.date;
  const index = qweets.value.findIndex((qweet) => qweet.date === dateToDelete);
  console.log({ index });
  qweets.value.splice(index, 1);
}
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
