import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'BaseIndex',
  setup () {
    const columns = [{
      title: 'Micor Name',
      dataIndex: 'name'
    }, {
      title: 'Micor Port',
      dataIndex: 'port'
    }, {
      title: '操作',
      dataIndex: 'operation',
      fixed: 'right',
      customRender ({ record }) {
        return ([<a-button onClick={() => handleRemoveById(record)} size='small' type='danger'>删除</a-button>])
      }
    }]

    const history = useRouter()

    const store = useStore()
    const state = computed(() => store.state.base)

    const handleRemoveById = (current) => {
      const filterData = state.value.micorList.filter(item => item._id !== current._id)

      store.dispatch({
        type: 'removeMicorList',
        payload: {
          data: filterData
        }
      })
    }

    const handleJumpTo = () => {
      history.push({
        path: '/base-create'
      })
    }

    return {
      columns,
      store,
      state,
      handleRemoveById,
      handleJumpTo
    }
  },
  render ({ columns, state, handleJumpTo }) {
    return (<div>
      <h3>Current is BaseIndex: {state.namespace}</h3>
      <a-table
        rowKey='_id'
        columns={columns} 
        dataSource={state.micorList} 
        footer={() => <div>Current Table Footer</div>}></a-table>
      <a-button onClick={handleJumpTo}>Create</a-button>
    </div>)
  }
})