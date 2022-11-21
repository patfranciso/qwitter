<template>
  <q-page>
    <q-scroll-area style="width: 100%; height: 100vh">
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
          <q-item class="q-py-md" v-for="qweet in qweets" :key="qweet.id">
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
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import {
  db,
  query,
  collection,
  onSnapshot,
  orderBy,
  addDoc,
  deleteDoc,
  doc,
} from 'src/boot/firebase';
import { formatDistance } from 'date-fns';
import { onMounted, ref } from 'vue';
const name = 'IndexPage';
const newQweetContent = ref('');
const qweets = ref([]);
function relativeDate(value) {
  return formatDistance(value, new Date());
}
async function addNewQweet(e) {
  let newQweet = {
    content: newQweetContent.value,
    date: Date.now(),
  };
  const docRef = await addDoc(collection(db, 'qweets'), newQweet);
  newQweetContent.value = '';
}
async function deleteQweet(qweet) {
  await deleteDoc(doc(db, 'qweets', qweet.id));
}
onMounted(() => {
  console.log(`The component is now mounted!`);
  const q = query(collection(db, 'qweets'), orderBy('date'));
  const unsubscribe = onSnapshot(q, snapshot => {
    console.log({ snapshot });
    snapshot.docChanges().forEach(change => {
      console.log({ change });
      let qweetChange = change.doc.data();
      qweetChange.id = change.doc.id;
      if (change.type === 'added') {
        console.log('New Qweet: ', qweetChange);
        qweets.value.unshift(qweetChange);
      }
      if (change.type === 'modified') {
        console.log('Modified Qweet: ', qweetChange);
      }
      if (change.type === 'removed') {
        console.log('Removed Qweet: ', qweetChange);
        let index = qweets.value.findIndex(
          qweet => qweet.id === qweetChange.id
        );
        qweets.value.splice(index, 1);
      }
    });
  });
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
