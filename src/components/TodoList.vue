<template>
  <div>
    <div id="todo-layout">
      <div class="form">
        <form
          id="add-form"
          @submit="checkForm"
          method="post"
        >
          <label>
            <input
              autocomplete="off"
              type="text"
              placeholder="Todo description..."
              id="description"
              name="description"
              v-model="description"
            />
          </label>
          <button class="add-task-btn" type="submit">Add to list</button>
        </form>
      </div>
    </div>

    <div class="no-items-container" v-if="!todoList.length">
      <h2>Yaay! You don't have any homework to do.</h2>
    </div>

    <ul class="todo-list">
      <li class="t-item" v-for="item in todoList" v-bind:key="item">
        <div class="i-item-container">
          <input
            type="checkbox"
            :checked="!!(item.checked)"
            @click="checkTaskAction(item.id, $event)"
          >
          <span>{{ item.description }}</span>
        </div>
        <div>
          <button type="button" class="removeTask" @click="removeTaskAction(item.id)">
            Remove Task
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// Dependencies
import { mapActions, mapState } from 'vuex';

export default {
  name: 'TodoList',

  computed: {
    ...mapState(['todoList']),
  },

  data() {
    return {
      errors: [],
      description: null,
    };
  },

  methods: {
    checkForm($event) {
      $event.preventDefault();
      if (this.description) {
        this.$store.dispatch('add', this.description);
        this.description = null;
      }
    },

    removeTaskAction(id) {
      return this.$store.dispatch('remove', id);
    },

    checkTaskAction(id) {
      const { todoList } = this.$store.state;

      const item = todoList.find(e => e.id === id);
      if (item.checked) {
        this.$store.dispatch('unCheck', id);
      } else {
        this.$store.dispatch('check', id);
      }
    },

    ...mapActions([
      'add',
      'remove',
      'check',
      'uncheck',
    ]),
  },
};
</script>

<style scoped>
  #todo-layout {
    padding: 1vh 1vh 3vh 1vh;
    margin: 2vh;
    border-bottom: 1px dashed #e8e8e8;
  }

  #add-form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  #add-form label {
    display: flex;
    flex-grow: 1;
  }

  ul.todo-list {
    margin: 3vh;
    list-style-type: none;
  }

  .removeTask {
    border: none;
    border-radius: 2px;
    padding: 6px 14px;
    background: #f1f1f1;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    visibility: hidden;
    opacity: 0;
    transition: all .15s ease-in-out;
    cursor: pointer;
  }

  .removeTask:hover {
    background: #d1d1d1;
  }

  #description {
    width: 100%;
    background: #fff;
    border: 1px solid #eaeaea;
    padding: 12px;
    border-radius: 2px;
    border-top-color: #dedede;
    font-size: 14px;
  }

  #description:focus {
    border: 1px solid #54b883;
  }

  .i-item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .i-item-container span {
    padding: 0 2vh;
  }

  .add-task-btn {
    background: #54b883;
    border: none;
    height: fit-content;
    padding: 13px;
    margin-left: 2vh;
    border-radius: 2px;
    color: #fff;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }

  .add-task-btn:hover {
    background: #5cc58e;
  }

  li.t-item {
    position: relative;
    font-size: 14px;
    padding: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transition: all .15s ease-in-out;
  }

  li.t-item:hover {
    background: #f9f9f9;
  }

  li.t-item:hover .removeTask {
    opacity: 1;
    visibility: visible;
  }

  li.t-item:last-child {
    margin-bottom: 0;
  }

  .no-items-container {
    height: 44vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .no-items-container h2 {
    font-size: 14px;
    text-align: center;
  }

  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    input[type='checkbox'],
    input[type='radio'] {
      --active: #54b883;
      --active-inner: #fff;
      --input-border: #CDD9ED;
      --input-border-hover: #54b883;
      --background: #fff;
      --disabled: #F5F9FF;
      --disabled-inner: #E4ECFA;
      --shadow-inner: rgba(18, 22, 33, .1);
      height: 21px;
      outline: none;
      position: relative;
      -webkit-appearance: none;
      -moz-appearance: none;
      margin: 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
      height: 21px;
      border: 1px solid var(--input-border);
      background: var(--background);
      transition: background .3s ease, border-color .3s ease;
    }
    input[type='checkbox']:after,
    input[type='radio']:after {
      content: '';
      display: block;
      left: 0;
      top: 0;
      position: relative;
      transition: opacity .2s ease, -webkit-transform .3s ease, -webkit-filter .3s ease;
      transition: transform .3s ease, opacity .2s ease, filter .3s ease;
      transition: transform .3s ease, opacity .2s ease, filter .3s ease,
      -webkit-transform .3s ease, -webkit-filter .3s ease;
    }
    input[type='checkbox']:checked,
    input[type='radio']:checked {
      background: var(--active);
      border-color: var(--active);
    }
    input[type='checkbox']:checked:after,
    input[type='radio']:checked:after {
      -webkit-filter: drop-shadow(0 1px 2px var(--shadow-inner));
      filter: drop-shadow(0 1px 2px var(--shadow-inner));
      transition: opacity 0.3s ease, -webkit-filter 0.3s ease,
      -webkit-transform 0.6s cubic-bezier(0.175, 0.88, 0.32, 1.2);
      transition: opacity 0.3s ease, filter 0.3s ease,
        transform 0.6s cubic-bezier(0.175, 0.88, 0.32, 1.2);
      transition: opacity 0.3s ease, filter 0.3s ease,
        transform 0.6s cubic-bezier(0.175, 0.88, 0.32, 1.2),
      -webkit-filter 0.3s ease, -webkit-transform 0.6s cubic-bezier(0.175, 0.88, 0.32, 1.2);
    }
    input[type='checkbox']:disabled,
    input[type='radio']:disabled {
      cursor: not-allowed;
      opacity: .9;
      background: var(--disabled);
    }
    input[type='checkbox']:disabled:checked,
    input[type='radio']:disabled:checked {
      background: var(--disabled-inner);
      border-color: var(--input-border);
    }
    input[type='checkbox']:hover:not(:checked):not(:disabled),
    input[type='radio']:hover:not(:checked):not(:disabled) {
      border-color: var(--input-border-hover);
    }
    input[type='checkbox']:not(.switch),
    input[type='radio']:not(.switch) {
      width: 21px;
    }
    input[type='checkbox']:not(.switch):after,
    input[type='radio']:not(.switch):after {
      opacity: 0;
    }
    input[type='checkbox']:not(.switch):checked:after,
    input[type='radio']:not(.switch):checked:after {
      opacity: 1;
    }

    input[type='checkbox']:not(.switch) {
      border-radius: 6px;
    }
    input[type='checkbox']:not(.switch):after {
      width: 5px;
      height: 9px;
      border: 2px solid var(--active-inner);
      border-top: 0;
      border-left: 0;
      left: 6px;
      top: 2px;
      -webkit-transform: rotate(20deg);
      transform: rotate(20deg);
    }
    input[type='checkbox']:not(.switch):checked:after {
      -webkit-transform: rotate(43deg);
      transform: rotate(43deg);
    }
    input[type='checkbox'].switch {
      width: 38px;
      border-radius: 11px;
    }
    input[type='checkbox'].switch:after {
      left: 2px;
      top: 2px;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      background: var(--input-border);
    }
    input[type='checkbox'].switch:checked:after {
      background: var(--active-inner);
      -webkit-transform: translateX(17px);
      transform: translateX(17px);
    }
    input[type='checkbox'].switch:disabled:not(:checked):after {
      opacity: .6;
    }

    input[type='radio'] {
      border-radius: 50%;
    }
    input[type='radio']:after {
      width: 19px;
      height: 19px;
      border-radius: 50%;
      background: var(--active-inner);
      opacity: 0;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
    }
    input[type='radio']:checked:after {
      background: var(--active-inner);
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
  }

  input[type='text'] {
    line-height: 21px;
    border: 0;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: #6C7486;
    background: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    width: 100%;
    font-family: 'Source Sans Pro', Arial;
  }
</style>
