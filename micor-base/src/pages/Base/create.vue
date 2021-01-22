<template>
  <a-form v-bind="formProps" :model="formvalues" ref="formRef">
    <a-form-item label='Micor Name' name='name'>
      <a-input v-model:value="formvalues.name" />
    </a-form-item>
    <a-form-item label='Micor Path' name='path'>
      <a-input v-model:value='formvalues.path' />
    </a-form-item>
    <a-form-item label='Micor Port' name='port'>
      <a-input v-model:value='formvalues.port' />
    </a-form-item>
    <a-form-item label='Micor Status' name='status'>
      <a-input v-model:value='formvalues.status' />
    </a-form-item>
    <a-form-item>
      <a-space>
        <a-button>Cancel</a-button>
        <a-button @click="handleSubmit" type='primary'>Submit</a-button>
        <a-button @click="jumpBack" type='danger'>Page Back</a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, markRaw, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const formvalues = reactive({})
    const history = useRouter()
    const store = useStore()
    const formRef = ref()

    const formProps = {
      labelCol: { span: 2, offset: 2 },
      wrapperCol: { span: 12 }
    }

    const handleSubmit = () => {
      const values = markRaw(formvalues)
      store.dispatch({
        type: 'updateMicorList',
        payload: {
          data: {
            ...values,
            _id: Math.random()
          }
        }
      })
      formRef.value.resetFields()

      setTimeout(jumpBack, 800)
    }

    const jumpBack = () => {
      history.push({ path: '/base-index' })
    }

    return {
      formProps,
      formvalues,
      jumpBack,
      handleSubmit,
      formRef
    }
  }
}
</script>